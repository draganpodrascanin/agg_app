import { Request, Response } from 'express';
import { Entities } from '../entity/Entities';
import { WarrantyConditions } from '../entity/WarrantyConditions';
import { CarRepository } from '../repositories/CarRepository';
import { WarrantyRepository } from '../repositories/WarrantyRepository';
import CustomError from '../utils/CustomError';
import getEnvConnection from '../utils/get-env-connection';
import handlerFactory from './handlerFactory';

class WarantyController {
  public create = async (req: Request, res: Response) => {
    if (!req.body.carRegistration) {
      throw new CustomError(
        'need to specify registration of a car which warranty is for',
        400
      );
    }

    if (!req.body.warrantyConditionsTitle) {
      throw new CustomError(
        'need to specify warranty condition title (ex. std warranty)',
        400
      );
    }

    //get car
    const connection = getEnvConnection();
    const carRepo = connection.getCustomRepository(CarRepository);
    const car = await carRepo.findByRegistration(req.body.carRegistration);

    if (!car) {
      throw new CustomError('car with provided registration not found', 404);
    }

    //get warranty conditions
    const warrantyConditionsRepo = connection.getRepository(WarrantyConditions);
    const warrantyConditions = await warrantyConditionsRepo.findOne({
      where: { conditionsTitle: req.body.warrantyConditionsTitle },
    });

    if (!warrantyConditions) {
      throw new CustomError(
        'warranty conditions with provided title not found',
        404
      );
    }

    //create and save warranty
    const warrantyRepo = getEnvConnection().getCustomRepository(
      WarrantyRepository
    );

    const warranty = await warrantyRepo.createWarranty({
      car,
      warrantyConditions,
      partsUnderWarranty: req.body.partsUnderWarranty,
      validUntil: req.body.validUntil,
    });

    res.status(201).json({
      status: 'success',
      data: warranty,
    });
  };

  public changeConditions = async (req: Request, res: Response) => {
    const { id, warrantyConditionsTitle } = req.body;

    const connection = getEnvConnection();
    const warrantyRepo = connection.getCustomRepository(WarrantyRepository);
    const warrantyConditionRepo = connection.getRepository(WarrantyConditions);

    const newConditions = await warrantyConditionRepo.findOne({
      where: { conditionsTitle: warrantyConditionsTitle },
    });

    if (!newConditions) {
      throw new CustomError('conditions with provided title not found', 404);
    }

    const warranty = await warrantyRepo.findOne(id);

    if (!warranty) {
      throw new CustomError('warranty with provided id not found', 404);
    }

    warranty.warrantyConditions = newConditions;
    const responseData = await warrantyRepo.save(warranty);

    res.status(200).json({
      status: 'success',
      data: responseData,
    });
  };

  public getOne = async (req: Request, res: Response) => {
    const warrantyRepo = getEnvConnection().getCustomRepository(
      WarrantyRepository
    );
    const { id } = req.params;

    if (!id) throw new CustomError('need to provide id of a warranty', 400);

    const warranty = await warrantyRepo.findOne({
      where: { id: id },
      relations: ['car', 'warrantyConditions'],
    });

    if (!warranty)
      throw new CustomError('warrantie with provided id not found', 404);

    res.status(200).json({
      status: 'success',
      data: warranty,
    });
  };

  public getAll = handlerFactory.getAll(Entities.Warranty);
  public deleteOne = handlerFactory.deleteOne(Entities.Warranty);
  public updateOne = handlerFactory.updateOne(Entities.Warranty, [
    'partsUnderWarranty',
    'validUntil',
  ]);
}

export default new WarantyController();
