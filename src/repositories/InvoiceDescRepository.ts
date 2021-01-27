import { EntityRepository, Repository } from 'typeorm';
import { Invoice } from '../entity/Invoice';
import { InvoiceDesc, UnitEnum } from '../entity/InvoiceDesc';

interface IInvoiceDescBody {
  invoice?: Invoice;
  pricePerUnit: number;
  qty: number;
  tax: number;
  desc: string;
  discount?: number;
  unit?: UnitEnum;
}

@EntityRepository(InvoiceDesc)
export class InvoiceDescRepository extends Repository<InvoiceDesc> {
  //----------------------------------------------------------------------------------

  public createAndSave(
    InvoiceDescBody: IInvoiceDescBody
  ): Promise<InvoiceDesc> {
    const {
      invoice,
      pricePerUnit,
      qty,
      tax,
      desc,
      discount,
      unit,
    } = InvoiceDescBody;

    const invoiceDesc = this.create({
      desc,
      qty,
      pricePerUnit,
      tax,
      discount,
      unit,
    });

    if (invoice) invoiceDesc.invoice = invoice;

    return this.save(invoiceDesc);
  }
}
