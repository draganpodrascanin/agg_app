import { Request, Response } from 'express';
import { Entities } from '../entity/Entities';
import { CarReceptionRepository } from '../repositories/CarRecepitonRepository';
import { WorkOrderRepository } from '../repositories/WorkOrderRepository';
import CustomError from '../utils/CustomError';
import getEnvConnection from '../utils/get-env-connection';
import handlerFactory from './handlerFactory';
import _ from 'lodash';

class CarReceptionController {
  public getOne = handlerFactory.getOne(Entities.CarReception);
  public updateOne = handlerFactory.updateOne(Entities.CarReception);
  public deleteOne = handlerFactory.deleteOne(Entities.CarReception);

  public getPage = async (req: Request, res: Response) => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 20;

    const carReceptionRepo = getEnvConnection().getCustomRepository(
      CarReceptionRepository
    );

    const carReceptions = await carReceptionRepo.getCarReceptionPage(
      page,
      limit
    );

    res.status(200).json({
      status: 'success',
      results: carReceptions?.length || 0,
      data: carReceptions,
    });
  };

  public create = async (req: Request, res: Response) => {
    const { workOrderId } = req.body;
    if (!workOrderId) throw new CustomError('need to provide workOrderId', 400);

    const connection = getEnvConnection();

    const workOrderRepo = connection.getCustomRepository(WorkOrderRepository);
    const workOrder = await workOrderRepo.findOne(workOrderId);

    if (!workOrder)
      throw new CustomError('work order with provided id not found', 404);

    const carReceptionRepo = connection.getCustomRepository(
      CarReceptionRepository
    );
    const carReception = await carReceptionRepo.createAndSave({
      carDamage: req.body.carDamage,
      ownerRemarks: req.body.ownerRemarks,
      milage: req.body.milage,
      workOrder,
      adminRecived: `${_.upperFirst(req.admin?.firstName)} ${_.upperFirst(
        req.admin?.lastName
      )}`,
    });

    res.status(201).json({
      status: 'success',
      data: carReception,
    });
  };

  public count = async (req: Request, res: Response) => {
    const carReceptionRepo = getEnvConnection().getCustomRepository(
      CarReceptionRepository
    );

    const count = await carReceptionRepo.count();

    res.status(200).json({
      status: 'success',
      data: count,
    });
  };
}

export default new CarReceptionController();
