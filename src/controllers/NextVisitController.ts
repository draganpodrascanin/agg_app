import { Request, Response } from 'express';
import { Entities } from '../entity/Entities';
import { CarRepository } from '../repositories/CarRepository';
import { NextVisitRepository } from '../repositories/NextVisitRepository';
import CustomError from '../utils/CustomError';
import getEnvConnection from '../utils/get-env-connection';
import handlerFactory from './handlerFactory';

class NextVisitController {
  public getAll = handlerFactory.getAll(Entities.NextVisit);
  public getOne = handlerFactory.getOne(Entities.NextVisit);
  public updateOne = handlerFactory.updateOne(Entities.NextVisit, [
    'milage',
    'note',
  ]);
  public deleteOne = handlerFactory.deletOne(Entities.NextVisit);

  public createOne = async (req: Request, res: Response) => {
    const connection = getEnvConnection();
    const carRepo = connection.getCustomRepository(CarRepository);
    const nextVisitRepo = connection.getCustomRepository(NextVisitRepository);

    if (!req.body.carId) {
      throw new CustomError('you need to provide carId', 400);
    }

    const car = await carRepo.findOne(req.body.carId);

    if (!car) {
      throw new CustomError('car with provided id not found', 404);
    }

    const nextVisit = await nextVisitRepo.createNextVisit({
      car,
      milage: req.body.milage,
      note: req.body.note,
    });

    res.status(200).json({
      status: 'success',
      data: nextVisit,
    });
  };
}

export default new NextVisitController();
