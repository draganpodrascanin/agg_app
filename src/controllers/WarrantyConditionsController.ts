import { Request, Response } from 'express';
import { Entities } from '../entity/Entities';
import { WarrantyConditions } from '../entity/WarrantyConditions';
import CustomError from '../utils/CustomError';
import getEnvConnection from '../utils/get-env-connection';
import handlerFactory from './handlerFactory';

class WarrantyConditionsController {
  public create = handlerFactory.createOne(Entities.WarrantyConditions);
  public updateOne = handlerFactory.updateOne(Entities.WarrantyConditions);
  public deleteOne = handlerFactory.deletOne(Entities.WarrantyConditions);
  public getAll = handlerFactory.getAll(Entities.WarrantyConditions);

  public getByConditionTitle = async (req: Request, res: Response) => {
    const warrantyConditionsRepo = getEnvConnection().getRepository(
      WarrantyConditions
    );

    const condition = await warrantyConditionsRepo.findOne({
      where: { conditionsTitle: req.params.conditionsTitle },
    });

    if (!condition) {
      throw new CustomError(
        "Can't find warranty condition with that title",
        404
      );
    }

    res.status(200).json({
      status: 'success',
      data: condition,
    });
  };
}

export default new WarrantyConditionsController();
