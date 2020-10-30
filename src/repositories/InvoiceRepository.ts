import dayjs from 'dayjs';
import { EntityRepository, MoreThan, Repository } from 'typeorm';
import { Invoice } from '../entity/Invoice';

interface IInvoiceBody {
  billTo: string;
  dueDate: Date;
}

@EntityRepository(Invoice)
export class InvoiceRepository extends Repository<Invoice> {
  //----------------------------------------------------------------------------------

  public async createAndSave(invoiceBody: IInvoiceBody): Promise<Invoice> {
    const { billTo, dueDate } = invoiceBody;

    const year = dayjs(new Date()).format('YYYY-01-01 00:00:00');

    const invoiceNo =
      (await this.count({ where: { createdAt: MoreThan(year) } })) + 1;

    const workOrder = this.create({
      billTo,
      dueDate,
      invoiceNo,
    });

    return this.save(workOrder);
  }
}
