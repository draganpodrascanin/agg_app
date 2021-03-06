import dayjs from 'dayjs';
import { NextFunction, Request, response, Response } from 'express';
import { Entities } from '../entity/Entities';
import { CarRepository } from '../repositories/CarRepository';
import CustomError from '../utils/CustomError';
import getEnvConnection from '../utils/get-env-connection';
import validateEntity from '../utils/validateEntity';
import handlerFactory from './handlerFactory';

class CarController {
  //------------------------------------------------------------
  public getPage = async (req: Request, res: Response, next: NextFunction) => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 20;
    const search = req.query.search ? String(req.query.search) : '';

    const carRepo = getEnvConnection().getCustomRepository(CarRepository);
    const responseCars = await carRepo.findCarPage(page, limit, search);

    const count = carRepo.createQueryBuilder(Entities.Car);

    if (search) {
      count
        .where(
          `CONCAT(${Entities.Car}.carBrand, ' ', ${Entities.Car}.carModel) LIKE '%${search}%'`
        )
        .orWhere(`${Entities.Car}.registration LIKE '%${search}%'`);
    }

    const resCount = await count.getCount();

    res.status(200).json({
      status: 'success',
      results: responseCars?.length || 0,
      count: resCount,
      data: responseCars,
    });
  };

  public getSuggestions = async (req: Request, res: Response) => {
    const carRepo = getEnvConnection().getCustomRepository(CarRepository);
    let search;

    if (!req.query.search) search = '';
    else search = String(req.query.search);

    const cars = await carRepo.getSuggestions(search);

    res.status(200).json({
      status: 'success',
      count: cars.length,
      data: [...cars],
    });
  };

  //------------------------------------------------------------
  public countCars = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const carRepo = getEnvConnection().getCustomRepository(CarRepository);

    const count = await carRepo.count();

    res.status(200).json({
      status: 'success',
      data: count,
    });
  };

  //------------------------------------------------------------

  public getMyCars = async (req: Request, res: Response) => {
    if (!req.user) {
      throw new CustomError('you need to be logged in', 401);
    }

    const carRepo = getEnvConnection().getCustomRepository(CarRepository);
    const myCars = await carRepo.getUserOwnedCars(req.user.id);

    if (!myCars) {
      throw new CustomError('no cars found', 404);
    }

    res.status(200).json({
      status: 'success',
      data: myCars,
    });
  };

  //------------------------------------------------------------

  public getOne = async (req: Request, res: Response, next: NextFunction) => {
    const id = String(req.params.id);
    const carRepo = getEnvConnection().getCustomRepository(CarRepository);

    const carRes = await carRepo.findOneAndPopulate(id);

    if (!carRes) {
      throw new CustomError('No car with that id', 404);
    }

    res.status(200).json({
      status: 'success',
      data: carRes,
    });
  };

  //------------------------------------------------------------

  public create = async (req: Request, res: Response) => {
    console.log('body! = ', req.body);

    const {
      registration,
      carBrand,
      carModel,
      productionYear,
      milage,
      engine,
    } = req.body;

    if (
      !registration ||
      !carBrand ||
      !carModel ||
      !productionYear ||
      !milage ||
      !engine
    )
      throw new CustomError('All fields all necessary', 400);

    const carRepo = getEnvConnection().getCustomRepository(CarRepository);

    const newCar = carRepo.create({
      registration: registration.toUpperCase(),
      carBrand,
      carModel,
      productionYear: dayjs(productionYear).format('YYYY'),
      milage,
      engine,
    });

    await validateEntity(newCar);
    const dbResCar = await carRepo.save(newCar);

    if (!dbResCar) {
      throw new CustomError(
        "something went wrong, couldn't persist car into db",
        500
      );
    }

    res.status(201).json({
      status: 'success',
      data: dbResCar,
    });
  };

  //------------------------------------------------------------

  public setUserOwnership = async (req: Request, res: Response) => {
    const carRepo = getEnvConnection().getCustomRepository(CarRepository);

    const resCar = await carRepo.setOwner(req.params.id, req.body.userId);

    res.status(200).json({
      status: 'success',
      data: resCar,
    });
  };

  //------------------------------------------------------------

  public setOwnerByRegistration = async (req: Request, res: Response) => {
    const carRepo = getEnvConnection().getCustomRepository(CarRepository);

    const resCar = await carRepo.setOwnerByRegistration(
      req.body.carReg,
      req.body.userId
    );

    res.status(200).json({
      status: 'success',
      data: resCar,
    });
  };

  //------------------------------------------------------------
  public updateOne = handlerFactory.updateOne(Entities.Car, [
    'registration',
    'engine',
    'carBrand',
    'carModel',
    'productionYear',
  ]);
  //------------------------------------------------------------
  public deleteOne = handlerFactory.deleteOne(Entities.Car);
}

export default new CarController();
