import { EntityRepository, Repository } from 'typeorm';
import { Car } from '../entity/Car';
import { WorkOrder } from '../entity/WorkOrder';
import CustomError from '../utils/CustomError';
import getEnvConnection from '../utils/get-env-connection';
import { UserRepository } from './UserRepository';

@EntityRepository(WorkOrder)
export class WorkOrderRepository extends Repository<WorkOrder> {
  //----------------------------------------------------------------------------------

  public getWorkOrderPage(
    page: number,
    limit: number
  ): Promise<WorkOrder[] | undefined> {
    const offset = (page - 1) * limit;

    return this.createQueryBuilder('work_order')
      .orderBy('work_order.created_at', 'DESC')
      .offset(offset)
      .limit(limit)
      .getMany();
  }

  public getActiveWorkOrders(): Promise<WorkOrder[] | undefined> {
    return this.find({ where: { completed: false }, relations: ['car'] });
  }

  public createAndSaveWorkOrder(car: Car): Promise<WorkOrder> {
    const wo = this.create({ car: car });
    return this.save(wo);
  }
}