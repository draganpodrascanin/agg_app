import { injectable } from 'inversify';
import pdf from 'html-pdf';
import { CreateOptions } from 'html-pdf';
import CustomError from '../utils/CustomError';
import path from 'path';
import IInvoiceService, {
  ICreateInvoiceTemplateArg,
  IinvoiceRow,
  pdfFormat,
} from '../interfaces/services/IInvoiceService';

@injectable()
export class InvoiceService implements IInvoiceService {
  createTemplate(invoice: ICreateInvoiceTemplateArg) {
    const {
      izdanoDana,
      mjesto,
      dpo,
      valuta,
      datumIsporuke,
      po,
      ime,
      invoiceTitle,
      invoiceNumber,
      pdv,
      ukupanIznosBezPdv,
      pdvUkupan,
      ukupanIznosSaPdv,
      slovima,
    } = invoice;

    const adresa = invoice.adresa || '';
    const postanskiBrojNaselje = invoice.postanskiBrojNaselje || '';
    const brojTelefonaKupca = invoice.brojTelefonaKupca || '';
    const emailKupca = invoice.emailKupca || '';
    const infoKupca = invoice.infoKupca || '';
    const predracunVaziBezPecata = invoice.predracunVaziBezPecata || '';

    let rows = ``;

    invoice.invoiceRow.forEach((row: IinvoiceRow, i) => {
      const {
        nazivRobe,
        jedinicaMjere,
        kolicina,
        cenaBezPdva,
        cenaSaPdvom,
        popust,
      } = row;

      rows += `
        <tr data-iterate="item">
            <td>${
              i + 1
            }</td> <!-- Don't remove this column as it's needed for the row commands -->
            <td><span class="show-mobile">{item_description_label}</span> <span>${nazivRobe}</span></td>
            <td><span class="show-mobile">{item_unit_label}</span> <span>${jedinicaMjere}</span></td>
            <td><span class="show-mobile">{item_quantity_label}</span> <span>${kolicina}</span></td>
            <td><span class="show-mobile">{item_price_label}</span> <span>${cenaBezPdva}</span></td>
            <td><span class="show-mobile">{item_discount_label}</span> <span>${popust}%</span></td>
            <td><span class="show-mobile">{item_tax_label}</span> <span>${pdv}%</span></td>
            <td><span class="show-mobile">{item_line_total_label}</span> <span>${cenaSaPdvom}</span></td>
        </tr>
      `;
    });

    const template = `
        <!DOCTYPE html>
    <html lang="rs">
      <head>
        <meta charset="utf-8">
        <title>Predračun</title>
        
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <meta name="description" content="Invoice">

        <style>
            @import url("https://fonts.googleapis.com/css?family=Open+Sans:400,700&subset=cyrillic,cyrillic-ext,latin,greek-ext,greek,latin-ext,vietnamese");
            html, body, div, span, applet, object, iframe,
            h1, h2, h3, h4, h5, h6, p, blockquote, pre,
            a, abbr, acronym, address, big, cite, code,
            del, dfn, em, img, ins, kbd, q, s, samp,
            small, strike, strong, sub, sup, tt, var,
            b, u, i, center,
            dl, dt, dd, ol, ul, li,
            fieldset, form, label, legend,
            table, caption, tbody, tfoot, thead, tr, th, td,
            article, aside, canvas, details, embed,
            figure, figcaption, footer, header, hgroup,
            menu, nav, output, ruby, section, summary,
            time, mark, audio, video {
              margin: 0;
              padding: 0;
              border: 0;
              font: inherit;
              font-size: 100%;
              vertical-align: baseline;
            }

            html {
              line-height: 1;
            }

            ol, ul {
              list-style: none;
            }

            table {
              border-collapse: collapse;
              border-spacing: 0;
            }

            caption, th, td {
              text-align: left;
              font-weight: normal;
              vertical-align: middle;
            }

            q, blockquote {
              quotes: none;
            }
            q:before, q:after, blockquote:before, blockquote:after {
              content: "";
              content: none;
            }

            a img {
              border: none;
            }

            article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary {
              display: block;
            }

            /* Invoice styles */
            /**
            * DON'T override any styles for the <html> and <body> tags, as this may break the layout.
            * Instead wrap everything in one main <div id="container"> element where you may change
            * something like the font or the background of the invoice
            */
            html, body {
              /* MOVE ALONG, NOTHING TO CHANGE HERE! */
            }

            /** 
            * IMPORTANT NOTICE: DON'T USE '!important' otherwise this may lead to broken print layout.
            * Some browsers may require '!important' in oder to work properly but be careful with it.
            */
            html {
              background: #eee;
              padding: 30px;
            }

            body {
              max-width: 1240px;
              min-width: 1240px;
              margin: 0 auto;
              background: #fff;
              position: relative;
              min-height: 1754px;
              max-height: 1754px;
            }

            .clearfix {
              display: block;
              clear: both;
            }

            #container {
              font: normal 15px/1.5em 'Open Sans', Sans-serif;
              margin: 0 auto;
              padding:50px;
              min-height: 1754px;
              max-height: 1754px;
            }

            #memo .logo {
              float: left;
              margin-right: 20px;
            }
            #memo .logo img {
              width: 150px;
              height: 100px;
            }
            #memo .company-info {
              float: left;
              width: 370px;
              max-width: 100%;
            }
            #memo .company-info > div:first-child {
              font-weight: bold;
              font-size: 20px;
            }
            #memo .company-info div {
              margin-bottom: 3px;
            }
            #memo .payment-info {
              float: right;
              text-align: right;
              width: 220px;
              max-width: 100%;
            }
            #memo .payment-info div {
              margin-bottom: 3px;
              min-width: 20px;
            }
            #memo:after {
              content: '';
              display: block;
              clear: both;
            }

            .memo-line {
              margin-top: 30px;
              border-bottom: 1px solid #e2e2e2;
            }

            #invoice-info {
              float: left;
              margin-top: 50px;
              width: 300px;
              max-width: 100%;
            }
            #invoice-info > div {
              float: left;
            }
            #invoice-info > div > span {
              display: block;
              min-width: 100px;
              min-height: 18px;
              margin-bottom: 3px;
            }
            #invoice-info > div:last-child {
              margin-left: 10px;
              text-align: right;
            }
            #invoice-info:after {
              content: '';
              display: block;
              clear: both;
            }

            #client-info {
              float: right;
              margin-top: 30px;
              width: 300px;
              max-width: 100%;
            }
            #client-info > div {
              margin-bottom: 3px;
            }
            #client-info span {
              display: block;
            }
            #client-info > span {
              font-weight: bold;
            }

            #invoice-title-number {
              text-align: center;
              font-size: 20px;
              font-weight: bold;
              margin: 50px 0 20px 0;
            }
            #invoice-title-number #title {
              margin-right: 5px;
              text-align: right;
            }
            #invoice-title-number #number {
              margin-left: 5px;
              text-align: left;
            }

            table {
              table-layout: fixed;
            }
            table th, table td {
              vertical-align: top;
              word-break: keep-all;
              word-wrap: break-word;
            }

            #items .first-cell, #items table th:first-child, #items table td:first-child {
              width: 18px;
              text-align: right;
            }
            #items table {
              border-collapse: separate;
              width: 100%;
            }
            #items table tr:nth-child(odd) {
              background: #fafafa;
            }
            #items table th {
              font-weight: bold;
              color: #fff;
              background: #4b4f52;
              padding: 12px 10px;
              text-align: right;
            }
            #items table th:nth-child(2) {
              width: 30%;
              text-align: left;
            }
            #items table th:last-child {
              text-align: right;
            }
            #items table td {
              border-bottom: 1px solid #e2e2e2;
              border-top: 1px solid #fff;
              padding: 15px 10px;
              text-align: right;
            }
            #items table td:first-child {
              text-align: left;
            }
            #items table td:nth-child(2) {
              text-align: left;
            }
            #items table td:empty:after {
              content: '';
              display: block;
              min-height: 18px;
            }
            #items table span {
              display: inline-block;
              min-width: 20px;
            }

            #sums {
              float: right;
              margin-top: 30px;
              page-break-inside: avoid;
            }
            #sums table tr th, #sums table tr td {
              min-width: 100px;
              padding: 10px;
              text-align: right;
            }
            #sums table tr th {
              text-align: left;
              padding-right: 25px;
            }
            #sums table tr.amount-total th {
              text-transform: uppercase;
            }
            #sums table tr.amount-total th, #sums table tr.amount-total td {
              font-weight: bold;
              border-top: 1px solid #e2e2e2;
            }
            #sums table tr:nth-last-child(2) th, #sums table tr:nth-last-child(2) td {
              color: #fff;
              background: #4b4f52;
              font-weight: bold;
            }

            #terms {
              margin-top: 520px;
              page-break-inside: avoid;
            }
            #terms > .heading {
              font-weight: bold;
              margin-top: -100px !important;
            }
            #terms > div {
              margin-top: -30px;
              min-height: 70px;
              max-width: 450px;
            }

            .show-mobile {
              display: none !important;
            }

            .stamp {
              float: right;
              margin-top: -58px !important;
              text-align: center;
            }

            .stamp  #fakturisao {
              padding-bottom: 30px;
            }

            #mp {
              position: absolute;
              bottom: 60px;
              left: 50%;
              transform: translate(-50%, -50%);
            }
            .predracun {
              position: absolute;
              text-align: center;
              left: 50%;
              bottom: 10px;
              transform: translate(-50%, -50%);
              font-size: 12px;
            }
            /**
            * If the printed invoice is not looking as expected you may tune up
            * the print styles (you can use !important to override styles)
            */
            @media print {
              /* Here goes your print styles */
            }

        </style>
      </head>
      <body>
        <div id="container">
          <section id="memo">
            <div class="logo">
              <img src="./logoblack.svg" data-logo="{company_logo}" />
            </div>
            
            <div class="company-info">
              <div>Auto Gas Gaga </div>
              <div>Njegoševa 40.</div>
              <div>78000 Banja Luka, Bosna i Hercegovina.</div>
              <div>+38765701308</div>
              <div>autogasgaga.ba | office@autogasgaga.ba</div>
            </div>
            
            <div class="payment-info">
              <div>JIB:4404157690009</div>
              <div>MB:</div>
              <div>AR/KM: 5672411100096845/SBERBANK</div>
              <div>       5721060001019083/MFBANK</div>
            </div>

          </section>

          <div class="memo-line"></div>
          
          <section id="invoice-info">
            <div>
              <span>Izdano Dana:</span>
              <span>Mjesto:</span>
              <span>DPO:</span>
              <span>Valuta:</span>
              <span>Datum Isporuke:</span>
              <span>P.O. #</span>
            </div>
            
            <div>
              <span>${izdanoDana}</span>
              <span>${mjesto}</span>
              <span>${dpo}</span>
              <span>${valuta}</span>
              <span>${datumIsporuke}</span>
              <span>${po}</span>
            </div>
          </section>
          
          <section id="client-info">
            <span>Kupac:</span>
            <div>
              <span>${ime}</span>
            </div>
            
            <div>
              <span>${adresa}</span>
            </div>
            
            <div>
              <span>${postanskiBrojNaselje}</span>
            </div>
            
            <div>
              <span>${brojTelefonaKupca}</span>
            </div>
            
            <div>
              <span>${emailKupca}</span>
            </div>
            
            <div>
              <span>${infoKupca}</span>
            </div>
          </section>
          
          <div class="clearfix"></div>
          
          <section id="invoice-title-number">
          
            <span id="title">${invoiceTitle}</span>
            <span id="number">${invoiceNumber}</span>
            
          </section>
          
          <div class="clearfix"></div>
          
          <section id="items">
            
            <table cellpadding="0" cellspacing="0">
            
              <tr>
                <th></th> <!-- Dummy cell for the row number and row commands -->
                <th>Naziv Robe/Usluge</th>
                <th>Jedinica Mjere</th>
                <th>Količina</th>
                <th>Cijena Bez PDV-a</th>
                <th>Popust</th>
                <th>PDV</th>
                <th>Cijena sa PDV-om</th>
              </tr>
              
              ${rows}
              
            </table>
            
          </section>
          
          <section id="sums">
          
            <table cellpadding="0" cellspacing="0">
              <tr>
                <th>Iznos bez PDV-a:</th>
                <td>${ukupanIznosBezPdv}</td>
              </tr>
              
              <tr data-iterate="tax">
                <th>PDV:</th>
                <td>${pdvUkupan}</td>
              </tr>
              
              <tr class="amount-total">
                <th>Ukupan Iznos:</th>
                <td>${ukupanIznosSaPdv}</td>
              </tr>
              
              <!-- You can use attribute data-hide-on-quote="true" to hide specific information on quotes.
                  For example Invoicebus doesn't need amount paid and amount due on quotes  -->
              
              <tr data-hide-on-quote="true">
                <th>Za Naplatu</th>
                <td>{ukupanIznosSaPdv}</td>
              </tr>
              <tr>
                <th>Slovima:</th>
                <td>${slovima}</td>
              </tr>
              
            </table>
            
          </section>
          
          <div class="clearfix"></div>
          
          <section id="terms">
          
            <div class="heading">Uslovi</div>
            <div>Nakon isteka valute, zaračunavamo kamatu, po stopi koju poslovne banke primenjuju na kratkoročne kredite i utužujemo bez opomene. U slučaju spora nadležan je sud u Banjaluci.</div>
            
            
            <div class="stamp">
              <div id="fakturisao">Fakturisao</div>
              <div style="width: 200px; height: 1px; background: #000;"></div>
            </div>
          </section>

          <div id="mp">mp</div>
        </div>
        <div class="predracun">${predracunVaziBezPecata}</div>

      </body>
    </html>
  `;

    return template;
  }

  createPdf(
    template: string,
    location: string,
    name: string,
    format: pdfFormat
  ) {
    const options: CreateOptions = {
      format: format,
      paginationOffset: 1,
    };

    return new Promise((resolve, reject) => {
      pdf
        .create(template, options)
        .toFile(path.resolve(__dirname, `${location}/${name}`), (err, res) => {
          if (err) throw new CustomError('Error while creating pdf', 500);
          resolve(res);
        });
    });
  }
}
