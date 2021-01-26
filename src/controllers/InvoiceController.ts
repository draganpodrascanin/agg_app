import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import container from '../container.config';
import { Entities } from '../entity/Entities';
import IInvoiceService from '../interfaces/services/IInvoiceService';
import { InvoiceRepository } from '../repositories/InvoiceRepository';
import { TYPES } from '../types';
import getEnvConnection from '../utils/get-env-connection';
import handlerFactory from './handlerFactory';

@injectable()
class InvoiceController {
  private _InvoiceService;

  constructor(@inject(TYPES.InvoiceService) InvoiceS: IInvoiceService) {
    this._InvoiceService = InvoiceS;
  }

  public getPage = handlerFactory.getPage(Entities.Invoice);
  public count = handlerFactory.count(Entities.Invoice);
  public getOne = handlerFactory.getOne(Entities.Invoice, {
    relations: ['invoiceDescs'],
  });
  public updateOne = handlerFactory.updateOne(Entities.Invoice, [
    'billTo',
    'dueDate',
  ]);

  public create = async (req: Request, res: Response) => {
    const { billTo } = req.body;
    const dueDate = new Date(req.body.dueDate);

    const invoiceRepo = getEnvConnection().getCustomRepository(
      InvoiceRepository
    );
    const invoice = await invoiceRepo.createAndSave({ billTo, dueDate });

    res.status(200).json({
      status: 'success',
      data: invoice,
    });
  };
}

export default new InvoiceController(
  container.get<IInvoiceService>(TYPES.InvoiceService)
);
