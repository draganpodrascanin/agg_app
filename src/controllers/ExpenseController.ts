import { Entities } from '../entity/Entities';
import handlerFactory from './handlerFactory';

class ExprensesController {
  public create = handlerFactory.createOne(Entities.Expense);
  public getOne = handlerFactory.getOne(Entities.Expense);
  public deleteOne = handlerFactory.deleteOne(Entities.Expense);
  public updateOne = handlerFactory.updateOne(Entities.Expense);
  public getPage = handlerFactory.getPage(Entities.Expense);
}

export default new ExprensesController();
