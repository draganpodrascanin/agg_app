import { Request, Response } from 'express';
import { Entities } from '../entity/Entities';
import { CarExamRepository } from '../repositories/CarExamRepository';
import { WorkOrderRepository } from '../repositories/WorkOrderRepository';
import CustomError from '../utils/CustomError';
import getEnvConnection from '../utils/get-env-connection';
import handlerFactory from './handlerFactory';

class CarExamController {
  public getPage = handlerFactory.getPage(Entities.CarExam);
  public getOne = handlerFactory.getOne(Entities.CarExam);
  public updateOne = handlerFactory.updateOne(Entities.CarExam, [
    'examConclusion',
  ]);
  public deleteOne = handlerFactory.deleteOne(Entities.CarExam);
  public count = handlerFactory.count(Entities.CarExam);

  public create = async (req: Request, res: Response) => {
    const { workOrderId, examConclusion } = req.body;
    if (!workOrderId) throw new CustomError('need to provide workOrderID', 400);

    const connection = getEnvConnection();

    const workOrderRepo = connection.getCustomRepository(WorkOrderRepository);
    const workOrder = await workOrderRepo.findOne(workOrderId);
    if (!workOrder)
      throw new CustomError('work order with provided id not found', 404);

    const carExamRepo = connection.getCustomRepository(CarExamRepository);
    const carExam = await carExamRepo.createAndSave({
      examConclusion,
      workOrder,
    });

    res.status(200).json({
      status: 'success',
      data: carExam,
    });
  };
}

export default new CarExamController();
