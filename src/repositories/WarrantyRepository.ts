import { EntityRepository, InsertResult, Repository } from 'typeorm';
import { Car } from '../entity/Car';
import { Entities } from '../entity/Entities';
import { Warranty } from '../entity/Warranty';
import { WarrantyConditions } from '../entity/WarrantyConditions';
import CustomError from '../utils/CustomError';
import getEnvConnection from '../utils/get-env-connection';
import { CarRepository } from './CarRepository';

interface createWarrantyBody {
  car: Car;
  warrantyConditions: WarrantyConditions;
  partsUnderWarranty: string;
  validUntil: Date;
}

@EntityRepository(Warranty)
export class WarrantyRepository extends Repository<Warranty> {
  //----------------------------------------------------------------------------------

  public async createWarranty(body: createWarrantyBody): Promise<Warranty> {
    const warranty = this.create({
      car: body.car,
      warrantyConditions: body.warrantyConditions,
      partsUnderWarranty: body.partsUnderWarranty,
      validUntil: body.validUntil,
    });

    return this.save(warranty);
  }

  public async getForCar(carId: string): Promise<Warranty[]> {
    return this.createQueryBuilder(Entities.Warranty)
      .where(`${Entities.Warranty}.carId = :carId`, { carId })
      .getMany();
  }
}
