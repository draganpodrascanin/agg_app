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
	public getOne = (Entity: Entities) => async (
		req: Request,
		res: Response,
		next: NextFunction
	) => {
		const entityRepo = getEnvConnection().getRepository(Entity);
		const entity = (await entityRepo.findOne({
			where: { id: req.params.id },
		})) as ObjectLiteral;

		if (!entity) {
			throw new CustomError('Data Not Found', 404);
		}

		const resEntity = { ...entity, password: undefined };

		res.status(200).json({
			status: 'success',
			data: resEntity,
		});
	};

	//delete one from db
	public deletOne = (Entity: Entities) => async (
		req: Request,
		res: Response,
		next: NextFunction
	) => {
		const entityRepo = getEnvConnection().getRepository(Entity);
		const response = await entityRepo.delete(req.params.id);

		res.status(200).json({
			status: 'success',
			response,
		});
	};

	//update one, provide Entity, and Array of strings that represents fields that are allowed to update
	//if allowed fields are not specified, everything is allowed to update
	public updateOne = (Entity: Entities, allowedFields?: string[]) => async (
		req: Request,
		res: Response,
		next: NextFunction
	) => {
		const entityRepo = getEnvConnection().getRepository(Entity);
		const entity: any = await entityRepo.findOne({
			where: { id: req.params.id },
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

	public createOne = (Entity: Entities) => async (
		req: Request,
		res: Response,
		next: NextFunction
	) => {
		const entityRepo = getEnvConnection().getRepository(Entity);
		const entity = entityRepo.create(req.body);
		await validateEntity(entity);
		await entityRepo.save(entity);

		res.status(201).json({
			status: 'success',
			data: entity,
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
