import { Request, Response } from 'express';
import { Entities } from '../entity/Entities';
import { JobConclusionRepository } from '../repositories/JobConclusionRepository';
import { WorkOrderRepository } from '../repositories/WorkOrderRepository';
import CustomError from '../utils/CustomError';
import getEnvConnection from '../utils/get-env-connection';
import handlerFactory from './handlerFactory';

class JobConclusionController {
  public getPage = handlerFactory.getPage(Entities.JobConclusion);
  public getOne = handlerFactory.getOne(Entities.JobConclusion);
  public count = handlerFactory.count(Entities.JobConclusion);
  public updateOne = handlerFactory.updateOne(Entities.JobConclusion, [
    'workDone',
    'note',
    'charged',
  ]);
  public deleteOne = handlerFactory.deleteOne(Entities.JobConclusion);

  public create = async (req: Request, res: Response) => {
    const { workOrderId, note, workDone, charged } = req.body;
    if (!workOrderId) throw new CustomError('need to provide workOrderID', 400);

    const connection = getEnvConnection();

    const workOrderRepo = connection.getCustomRepository(WorkOrderRepository);
    const workOrder = await workOrderRepo.findOne(workOrderId);
    if (!workOrder)
      throw new CustomError('work order with provided id not found', 404);

    const jobConclusionRepo = connection.getCustomRepository(
      JobConclusionRepository
    );
    const jobConclusion = await jobConclusionRepo.createAndSave({
      workDone,
      note,
      workOrder,
      charged,
    });

    res.status(200).json({
      status: 'success',
      data: jobConclusion,
    });
  };
}

export default new JobConclusionController();
