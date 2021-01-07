import { EntityRepository, Repository } from 'typeorm';
import { Car } from '../entity/Car';
import { Entities } from '../entity/Entities';
import { WorkOrder } from '../entity/WorkOrder';
import CustomError from '../utils/CustomError';
import getEnvConnection from '../utils/get-env-connection';
import { UserRepository } from './UserRepository';

@EntityRepository(WorkOrder)
export class WorkOrderRepository extends Repository<WorkOrder> {
  //----------------------------------------------------------------------------------

  public async getWorkOrderPage(
    page: number,
    limit: number,
    completed?: boolean
  ): Promise<{
    count: number;
    workOrders: WorkOrder[];
  }> {
    const offset = (page - 1) * limit;

    const count = await this.createQueryBuilder('work_order').getCount();

    let workOrders = this.createQueryBuilder('work_order');

    if (!completed) {
      workOrders.where('work_order.completed = :bool', {
        bool: false,
      });
    }

    const res = await workOrders
      .leftJoinAndSelect(`${Entities.WorkOrder}.car`, Entities.Car)
      .leftJoinAndSelect(
        `${Entities.WorkOrder}.carReception`,
        Entities.CarReception
      )
      .leftJoinAndSelect(`${Entities.WorkOrder}.carExam`, Entities.CarExam)
      .leftJoinAndSelect(`${Entities.WorkOrder}.jobTickets`, Entities.JobTicket)
      .leftJoinAndSelect(
        `${Entities.WorkOrder}.jobConclusion`,
        Entities.JobConclusion
      )
      .orderBy('work_order.created_at', 'DESC')
      .offset(offset)
      .limit(limit)
      .getMany();

    return { count, workOrders: res };
  }

  public getActiveWorkOrders(): Promise<WorkOrder[] | undefined> {
    return this.find({ where: { completed: false }, relations: ['car'] });
  }

  public createAndSaveWorkOrder(car: Car): Promise<WorkOrder> {
    const wo = this.create({ car: car });
    return this.save(wo);
  }

  public findOneAndPopulate(id: string): Promise<WorkOrder | undefined> {
    return this.createQueryBuilder(Entities.WorkOrder)
      .where(`${Entities.WorkOrder}.id = :id`, { id: id })
      .leftJoinAndSelect(`${Entities.WorkOrder}.car`, Entities.Car)
      .leftJoinAndSelect(
        `${Entities.WorkOrder}.carReception`,
        Entities.CarReception
      )
      .leftJoinAndSelect(`${Entities.WorkOrder}.carExam`, Entities.CarExam)
      .leftJoinAndSelect(`${Entities.WorkOrder}.jobTickets`, Entities.JobTicket)
      .leftJoinAndSelect(
        `${Entities.WorkOrder}.jobConclusion`,
        Entities.JobConclusion
      )
      .leftJoinAndSelect(`${Entities.Car}.user`, Entities.User)
      .getOne();
  }
}
