import { FindManyOptions, ObjectLiteral } from 'typeorm';
import { NextFunction, Request, Response } from 'express';
import getEnvConnection from '../utils/get-env-connection';
import validateEntity from '../utils/validateEntity';
import { filterObj } from '../utils/filterObject';
import CustomError from '../utils/CustomError';
import { Entities } from '../entity/Entities';

/*
	You can use these HandlerFactory
	to apstract standard api controllers.
	
	Don't forget to update entitiesEnum when you
	create new enitites
*/

class HandlerFactory {
  public getOne = (
    Entity: Entities,
    options?: { paramId?: string; relations?: string[] }
  ) => async (req: Request, res: Response, next: NextFunction) => {
    const entityRepo = getEnvConnection().getRepository(Entity);

    const id = options?.paramId || 'id';

    const query = entityRepo.findOne({
      where: { id: req.params[id] },
      relations: options?.relations || [],
    });

    const entity = (await query) as ObjectLiteral;

    if (!entity) {
      throw new CustomError('Data Not Found', 404);
    }

    const resEntity = { ...entity, password: undefined };

    res.status(200).json({
      status: 'success',
      data: resEntity,
    });
  };

  //get page of entities
  public getPage = (Entity: Entities, setLimit?: number) => async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const entityRepo = getEnvConnection().getRepository(Entity);

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || setLimit || 20;
    const offset = (page - 1) * limit;

    const entities = await entityRepo
      .createQueryBuilder(Entity)
      .offset(offset)
      .limit(limit)
      .getMany();

    res.status(200).json({
      status: 'success',
      results: entities.length,
      data: entities,
    });
  };

  //delete one from db
  public deleteOne = (Entity: Entities, paramId?: string) => async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const entityRepo = getEnvConnection().getRepository(Entity);
    const id = paramId || 'id';
    const response = await entityRepo.delete(req.params[id]);

    res.status(200).json({
      status: 'success',
      response,
    });
  };

  //update one, provide Entity, and Array of strings that represents fields that are allowed to update
  //if allowed fields are not specified, everything is allowed to update
  public updateOne = (
    Entity: Entities,
    allowedFields?: string[],
    paramId?: string
  ) => async (req: Request, res: Response, next: NextFunction) => {
    const entityRepo = getEnvConnection().getRepository(Entity);
    const id = paramId || 'id';

    const entity: any = await entityRepo.findOne({
      where: { id: req.params[id] },
    });

    if (!entity) {
      throw new CustomError('Data Not Found', 404);
    }

    //filter request
    let updateBody;
    if (allowedFields && allowedFields.length > 0) {
      updateBody = filterObj(req.body, ...allowedFields);
    } else updateBody = req.body;

    //set entities value to updated values
    for (const property in updateBody) {
      if (Object.prototype.hasOwnProperty.call(updateBody, property)) {
        const newValue = updateBody[property];
        entity[property] = newValue;
      }
    }

    await validateEntity(entity);

    await entityRepo.save(entity);

    res.status(200).json({
      success: 'success',
      data: entity,
    });
  };

  public count = (Entity: Entities) => async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const entityRepo = getEnvConnection().getRepository(Entity);

    const count = await entityRepo.count();

    res.status(200).json({
      status: 'success',
      data: count,
    });
  };

  public createOne = (Entity: Entities) => async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const entityRepo = getEnvConnection().getRepository(Entity);
    const entity = entityRepo.create(req.body);
    await validateEntity(entity);
    const responseEnt = await entityRepo.save(entity);

    res.status(201).json({
      status: 'success',
      data: responseEnt,
    });
  };

  public getAll = (Entity: Entities, filter?: FindManyOptions) => async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const entityRepo = getEnvConnection().getRepository(Entity);
    const entities = await entityRepo.find(filter);

    res.status(200).json({
      status: 'success',
      results: entities.length,
      data: entities,
    });
  };
}

export default new HandlerFactory();
