import dayjs from 'dayjs';
import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import container from '../container.config';
import { Entities } from '../entity/Entities';
import { InvoiceDesc } from '../entity/InvoiceDesc';
import IInvoiceService, {
  IinvoiceRow,
  pdfFormat,
} from '../interfaces/services/IInvoiceService';
import { InvoiceDescRepository } from '../repositories/InvoiceDescRepository';
import { InvoiceRepository } from '../repositories/InvoiceRepository';
import { TYPES } from '../types';
import CustomError from '../utils/CustomError';
import getEnvConnection from '../utils/get-env-connection';
import handlerFactory from './handlerFactory';
import path from 'path';
import { readFile, readFileSync } from 'fs';

@injectable()
class InvoiceController {
  private _InvoiceService;

  constructor(@inject(TYPES.InvoiceService) InvoiceS: IInvoiceService) {
    this._InvoiceService = InvoiceS;
  }

  public count = handlerFactory.count(Entities.Invoice);
  public getOne = handlerFactory.getOne(Entities.Invoice, {
    relations: ['invoiceDescs'],
  });
  public updateOne = handlerFactory.updateOne(Entities.Invoice, [
    //Stavi sve za update
  ]);

  public getPage = async (req: Request, res: Response) => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 20;
    const search = req.query.search ? String(req.query.search) : '';
    const invoiceRepo = getEnvConnection().getCustomRepository(
      InvoiceRepository
    );

    const invoicesPage = await invoiceRepo.findInvoicePage(page, limit, search);

    const count = invoiceRepo.createQueryBuilder(Entities.Invoice);

    if (search) {
      count.where(`${Entities.Invoice}.customerName LIKE '%${search}%'`);
    }

    const resCount = await count.getCount();

    res.status(200).json({
      status: 'success',
      count: resCount,
      data: invoicesPage,
    });
  };

  public create = async (req: Request, res: Response) => {
    const invoiceRepo = getEnvConnection().getCustomRepository(
      InvoiceRepository
    );
    const invoiceDescRepo = getEnvConnection().getCustomRepository(
      InvoiceDescRepository
    );

    //create INVOICE
    const {
      invoiceTitle,
      location,
      dpo,
      valuta,
      dueDate,
      deliveryDate,
      customerName,
      customerAdress,
      customerPostNumberLocation,
      customerPhoneNumber,
      customerEmail,
      customerAdditionalInfo,
      priceInWriting,
    } = req.body;

    const invoice = await invoiceRepo.createAndSave({
      invoiceTitle,
      location,
      dpo,
      valuta,
      dueDate,
      deliveryDate,
      customerName,
      customerAdress,
      customerPostNumberLocation,
      customerPhoneNumber,
      customerEmail,
      customerAdditionalInfo,
      priceInWriting,
    });

    //create INVOICE_DESCS
    const invoiceDescsPromises = req.body.invoiceDescs.map(
      (invoiceDesc: any) => {
        const { desc, pricePerUnit, qty, tax, discount, unit } = invoiceDesc;

        return invoiceDescRepo.createAndSave({
          invoice,
          desc,
          pricePerUnit,
          qty,
          tax,
          discount,
          unit,
        });
      }
    );

    const invoiceDescs: InvoiceDesc[] = await Promise.all(invoiceDescsPromises);

    //create TEMPLATE
    const rows = invoiceDescs.map(
      (invoiceDesc: InvoiceDesc): IinvoiceRow => {
        const {
          desc,
          discount,
          preTaxPrice,
          priceTaxInc,
          qty,
          tax,
          unit,
        } = invoiceDesc;

        return {
          kolicina: qty,
          jedinicaMjere: unit,
          cenaBezPdva: preTaxPrice,
          cenaSaPdvom: priceTaxInc,
          pdv: tax,
          nazivRobe: desc,
          popust: discount,
        };
      }
    );

    const ukupanPdv: number = invoiceDescs.reduce(
      (accumulator: number, desc: InvoiceDesc) => {
        return accumulator + (desc.priceTaxInc - desc.preTaxPrice);
      },
      0
    );

    const ukupanIznosBezPdv: number = invoiceDescs.reduce(
      (accumulator: number, desc: InvoiceDesc) => {
        return accumulator + desc.preTaxPrice;
      },
      0
    );

    const ukupanIznosSaPdv: number = invoiceDescs.reduce(
      (accumulator: number, desc: InvoiceDesc) => {
        return accumulator + desc.priceTaxInc;
      },
      0
    );

    const htmlTemplate: string = this._InvoiceService.createTemplate({
      datumIsporuke: dayjs(invoice.createdAt).format('DD.MM.YYYY'),
      dpo: dayjs(invoice.dpo).format('DD.MM.YYYY'),
      valuta: dayjs(invoice.dueDate).format('DD.MM.YYYY'),
      izdanoDana: dayjs(invoice.createdAt).format('DD.MM.YYYY'),
      imeKupca: invoice.customerName,
      invoiceNumber: invoice.invoiceNo,
      invoiceRows: rows,
      invoiceTitle: invoice.invoiceTitle,
      mjesto: invoice.location,
      po: invoice.po,
      pdvUkupan: ukupanPdv,
      slovima: invoice.priceInWriting,
      ukupanIznosBezPdv,
      ukupanIznosSaPdv,
      ukupanIznosZaNaplatu: ukupanIznosSaPdv,
    });

    const dateNow = Date.now();

    const pdf = await this._InvoiceService.createPdf(
      htmlTemplate,
      '../../public/documents',
      `${invoice.invoiceTitle}${invoice.po.slice(1, 999)}-${dateNow}.pdf`,
      pdfFormat.A4
    );

    invoice.pdfName = `${invoice.invoiceTitle}${invoice.po.slice(
      1,
      999
    )}-${dateNow}.pdf`;

    await invoiceRepo.save(invoice);

    res.status(200).json({
      status: 'success',
      data: {
        invoice: {
          ...invoice,
          invoiceDesc: invoiceDescs,
        },
        pdf,
      },
    });
  };

  public getPdf = async (req: Request, res: Response) => {
    const id = req.params.id;

    const repo = getEnvConnection().getCustomRepository(InvoiceRepository);
    const invoice = await repo.findOne(id);

    if (!invoice) throw new CustomError('No invoice found with that ID', 404);

    const data = readFileSync(
      path.join(__dirname, `../../public/documents/${invoice.pdfName}`)
    );
    res.contentType('application/pdf');
    res.send(data);
  };
}

export default new InvoiceController(
  container.get<IInvoiceService>(TYPES.InvoiceService)
);
