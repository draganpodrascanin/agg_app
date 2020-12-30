import dayjs from 'dayjs';
import { Request, Response } from 'express';
import { Entities } from '../entity/Entities';
import { Expense } from '../entity/Expense';
import getEnvConnection from '../utils/get-env-connection';
import handlerFactory from './handlerFactory';

class ExprensesController {
  public getOne = handlerFactory.getOne(Entities.Expense);
  public deleteOne = handlerFactory.deleteOne(Entities.Expense);
  public updateOne = handlerFactory.updateOne(Entities.Expense);
  public getPage = handlerFactory.getPage(Entities.Expense);
  public getBetweenDates = handlerFactory.getBetweenDates(Entities.Expense);
  public create = async (req: Request, res: Response) => {
    const { amount, date, description } = req.body;
    const repo = getEnvConnection().getRepository(Expense);
    const formatedDate = dayjs(date).format('YYYY-MM-DD');

    const expense = repo.create({
      description,
      amount,
      createdAt: formatedDate,
    });

    await repo.save(expense);

    res.status(200).json({
      status: 'success',
      data: expense,
    });
  };
}

export default new ExprensesController();
