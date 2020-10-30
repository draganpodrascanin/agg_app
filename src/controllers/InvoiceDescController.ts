import { Request, Response } from 'express';
import { Entities } from '../entity/Entities';
import { InvoiceDescRepository } from '../repositories/InvoiceDescRepository';
import { InvoiceRepository } from '../repositories/InvoiceRepository';
import CustomError from '../utils/CustomError';
import getEnvConnection from '../utils/get-env-connection';
import handlerFactory from './handlerFactory';

class InvoiceDescController {
  public getOne = handlerFactory.getOne(Entities.InvoiceDesc);
  public deleteOne = handlerFactory.deleteOne(Entities.InvoiceDesc);
  public updateOne = handlerFactory.updateOne(Entities.InvoiceDesc, [
    'pricePerUnit',
    'tax',
    'desc',
    'qty',
  ]);

  public getInvoiceDescsOfInvoice = async (req: Request, res: Response) => {
    const invoiceDescRepo = getEnvConnection().getCustomRepository(
      InvoiceDescRepository
    );

    const invoiceDescs = await invoiceDescRepo.find({
      where: { invoiceId: req.params.invoiceId },
    });

    res.status(200).json({
      status: 'success',
      results: invoiceDescs.length,
      data: invoiceDescs,
    });
  };

  public create = async (req: Request, res: Response) => {
    const { pricePerUnit, qty, tax, desc } = req.body;
    const invoiceId = req.params.invoiceId;
    const connection = getEnvConnection();

    const invoiceRepo = connection.getCustomRepository(InvoiceRepository);
    const invoice = await invoiceRepo.findOne(invoiceId);
    if (!invoice)
      throw new CustomError('Invoice with provided ID not found', 404);

    const invoiceDescRepo = connection.getCustomRepository(
      InvoiceDescRepository
    );
    const invoiceDesc = await invoiceDescRepo.createAndSave({
      invoice,
      qty,
      tax,
      desc,
      pricePerUnit,
    });

    res.status(201).json({
      status: 'succes',
      data: invoiceDesc,
    });
  };
}

export default new InvoiceDescController();
