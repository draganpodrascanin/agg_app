import dayjs from 'dayjs';
import { EntityRepository, MoreThan, Repository } from 'typeorm';
import { Entities } from '../entity/Entities';
import { Invoice, InvoiceTitleEnum } from '../entity/Invoice';

interface IInvoiceBody {
  invoiceTitle?: InvoiceTitleEnum;
  location: string;
  dpo: Date;
  valuta: Date;
  dueDate: Date;
  deliveryDate: Date;
  customerName: string;
  customerAdress?: string;
  customerPostNumberLocation?: string;
  customerEmail?: string;
  customerPhoneNumber?: string;
  customerAdditionalInfo?: string;
  priceInWriting: string;
}

@EntityRepository(Invoice)
export class InvoiceRepository extends Repository<Invoice> {
  //----------------------------------------------------------------------------------

  public findInvoicePage(
    page: number,
    limit: number,
    search?: string
  ): Promise<Invoice[]> {
    const offset = (page - 1) * limit;

    let query = this.createQueryBuilder(Entities.Invoice);

    if (search) {
      query.where(`${Entities.Invoice}.customerName LIKE '%${search}%'`);
    }

    return query
      .orderBy(`${Entities.Invoice}.createdAt`, 'DESC')
      .leftJoinAndSelect(
        `${Entities.Invoice}.invoiceDescs`,
        `${Entities.InvoiceDesc}`
      )
      .skip(offset)
      .take(limit)
      .getMany();
  }

  public async createAndSave(invoiceBody: IInvoiceBody): Promise<Invoice> {
    const year = dayjs(new Date()).format('YYYY-01-01 00:00:00');

    const invoiceNo =
      (await this.count({ where: { createdAt: MoreThan(year) } })) + 1;

    const po = `#${dayjs(year).format('YYYY')}-${invoiceNo}`;

    const workOrder = this.create({
      ...invoiceBody,
      invoiceNo,
      po,
    });

    return this.save(workOrder);
  }
}
