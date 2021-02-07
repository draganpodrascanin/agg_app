import { UnitEnum } from '../../entity/InvoiceDesc';

export enum pdfFormat {
  A4 = 'A4',
  A3 = 'A3',
  A5 = 'A5',
  Legal = 'Legal',
  Letter = 'Letter',
}

export interface IinvoiceRow {
  nazivRobe: string;
  jedinicaMjere: UnitEnum;
  kolicina: number;
  cenaPoJedinci: string;
  cenaBezPdva: string;
  popust: number;
  pdv: number;
  cenaSaPdvom: string;
}

export interface ICreateInvoiceTemplateArg {
  izdanoDana: string;
  mjesto: string;
  dpo: string;
  valuta: string;
  datumIsporuke: string;
  po: string;
  imeKupca: string;
  adresa?: string;
  postanskiBrojNaselje?: string;
  brojTelefonaKupca?: string;
  emailKupca?: string;
  infoKupca?: string;
  invoiceTitle: string;
  invoiceNumber: number;
  invoiceRows: IinvoiceRow[];
  ukupanIznosBezPdv: string;
  pdvUkupan: string;
  ukupanIznosSaPdv: string;
  ukupanIznosZaNaplatu?: string;
  slovima: string;
  predracunVaziBezPecata?: string;
}

export default interface IInvoiceService {
  createTemplate(invoice: ICreateInvoiceTemplateArg): string;
  createPdf(
    template: string,
    location: string,
    name: string,
    format: pdfFormat
  ): Promise<any>;
}
