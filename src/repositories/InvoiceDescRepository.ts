import { EntityRepository, Repository } from 'typeorm';
import { Invoice } from '../entity/Invoice';
import { InvoiceDesc } from '../entity/InvoiceDesc';

interface IInvoiceDescBody {
  invoice: Invoice;
  pricePerUnit: number;
  qty: number;
  tax: number;
  desc: string;
}

@EntityRepository(InvoiceDesc)
export class InvoiceDescRepository extends Repository<InvoiceDesc> {
  //----------------------------------------------------------------------------------

  public createAndSave(
    InvoiceDescBody: IInvoiceDescBody
  ): Promise<InvoiceDesc> {
    const { invoice, pricePerUnit, qty, tax, desc } = InvoiceDescBody;
    console.log(invoice);
    const invoiceDesc = this.create({
      pricePerUnit,
      qty,
      tax,
      desc,
    });
    invoiceDesc.invoice = invoice;
    console.log(invoiceDesc);

    return this.save(invoiceDesc);
  }
}
