import { Request, Response } from 'express';
import { Entities } from '../entity/Entities';
import { JobTicketStatus } from '../entity/JobTicket';
import { JobTicketRepository } from '../repositories/JobTicketRepository';
import { WorkOrderRepository } from '../repositories/WorkOrderRepository';
import CustomError from '../utils/CustomError';
import getEnvConnection from '../utils/get-env-connection';
import validateEntity from '../utils/validateEntity';
import handlerFactory from './handlerFactory';

class JobTicketController {
  public getPage = handlerFactory.getPage(Entities.JobTicket);
  public getOne = handlerFactory.getOne(Entities.JobTicket);
  public count = handlerFactory.count(Entities.JobTicket);
  public updateOne = handlerFactory.updateOne(Entities.JobTicket, [
    'ticket',
    'status',
  ]);
  public deleteOne = handlerFactory.deleteOne(Entities.JobTicket);

  public create = async (req: Request, res: Response) => {
    const { workOrderId, ticket, status } = req.body;
    if (!workOrderId) throw new CustomError('need to provide workOrderID', 400);

    const connection = getEnvConnection();

    const workOrderRepo = connection.getCustomRepository(WorkOrderRepository);
    const workOrder = await workOrderRepo.findOne(workOrderId);
    if (!workOrder)
      throw new CustomError('work order with provided id not found', 404);

    const jobTicketRepo = connection.getCustomRepository(JobTicketRepository);
    const jobTicket = await jobTicketRepo.createAndSave({
      ticket,
      workOrder,
      status,
    });

    res.status(200).json({
      status: 'success',
      data: jobTicket,
    });
  };

  public getActive = async (req: Request, res: Response) => {
    const jobTicketRepo = getEnvConnection().getCustomRepository(
      JobTicketRepository
    );

    const activeTickets = await jobTicketRepo.getActive();

    res.status(200).json({
      status: 'success',
      results: activeTickets.length,
      data: activeTickets,
    });
  };

  public changeStatus = async (req: Request, res: Response) => {
    const { status } = req.body;

    const jobTicketRepo = getEnvConnection().getCustomRepository(
      JobTicketRepository
    );

    const jobTicket = await jobTicketRepo.findOne(req.params.id);
    if (!jobTicket)
      throw new CustomError('job ticket with provided id not found', 404);

    jobTicket.status = status;
    await validateEntity(jobTicket);
    const resData = await jobTicketRepo.save(jobTicket);

    res.status(200).json({
      status: 'success',
      data: resData,
    });
  };
}

export default new JobTicketController();
