import { Request, Response } from 'express';
import { Entities } from '../entity/Entities';
import { WorkOrder } from '../entity/WorkOrder';
import { CarRepository } from '../repositories/CarRepository';
import { WorkOrderRepository } from '../repositories/WorkOrderRepository';
import CustomError from '../utils/CustomError';
import getEnvConnection from '../utils/get-env-connection';
import handlerFactory from './handlerFactory';

class WorkOrderController {
  public getPage = async (req: Request, res: Response) => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 20;

    console.log('lupio');

    const workOrderRepo = getEnvConnection().getCustomRepository(
      WorkOrderRepository
    );

    const workOrders = await workOrderRepo.getWorkOrderPage(page, limit);

    console.log(workOrders);

    res.status(200).json({
      status: 'success',
      results: workOrders?.length || 0,
      data: workOrders || [],
    });
  };

  // completed : false
  public getActive = async (req: Request, res: Response) => {
    const workOrderRepo = getEnvConnection().getCustomRepository(
      WorkOrderRepository
    );

    const workOrders = await workOrderRepo.getActiveWorkOrders();

    res.status(200).json({
      status: 'success',
      results: workOrders?.length || 0,
      data: workOrders || [],
    });
  };

  //registration for creation ;)
  public create = async (req: Request, res: Response) => {
    const { carRegistration } = req.body;
    if (!carRegistration)
      throw new CustomError('carRegistration need to be provided', 400);

    const connection = getEnvConnection();
    const carRepo = connection.getCustomRepository(CarRepository);
    const workOrderRepo = connection.getCustomRepository(WorkOrderRepository);

    const car = await carRepo.findByRegistration(carRegistration);
    if (!car)
      throw new CustomError('car with provided registration not found.', 404);

    const workOrder = await workOrderRepo.createAndSaveWorkOrder(car);

    res.status(201).json({
      status: 'success',
      data: workOrder,
    });
  };

  public setToCompleted = async (req: Request, res: Response) => {
    const workOrderRepo = getEnvConnection().getCustomRepository(
      WorkOrderRepository
    );

    if (!req.params.id) throw new CustomError('you neew to provide id', 400);

    const workOrder = await workOrderRepo.findOne({
      where: { id: req.params.id },
    });
    if (!workOrder)
      throw new CustomError('work order with provided id not found', 404);

    workOrder.completed = true;
    const resWorkOrder = await workOrderRepo.save(workOrder);

    res.status(200).json({
      status: 'success',
      data: resWorkOrder,
    });
  };

  public getCount = handlerFactory.count(Entities.WorkOrder);
  public getOne = handlerFactory.getOne(Entities.WorkOrder, {
    relations: ['carExam', 'jobConclusion', 'carReception', 'jobTickets'],
  });
}

export default new WorkOrderController();
