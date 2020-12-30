import { EntityRepository, Repository } from 'typeorm';
import { CarReception } from '../entity/CarReception';
import { WorkOrder } from '../entity/WorkOrder';

interface ICarReceptionBody {
  workOrder: WorkOrder;
  ownerRemarks: string;
  carDamage: string;
  milage: number;
  adminRecived: string;
}

@EntityRepository(CarReception)
export class CarReceptionRepository extends Repository<CarReception> {
  //----------------------------------------------------------------------------------

  public getCarReceptionPage(
    page: number,
    limit: number
  ): Promise<CarReception[] | undefined> {
    const offset = (page - 1) * limit;

    return this.createQueryBuilder('car_reception')
      .orderBy('car_reception.created_at', 'DESC')
      .offset(offset)
      .limit(limit)
      .getMany();
  }

  public createAndSave(
    carReceptionBody: ICarReceptionBody
  ): Promise<CarReception> {
    const workOrder = this.create({
      adminRecived: carReceptionBody.adminRecived,
      carDamage: carReceptionBody.carDamage,
      ownerRemarks: carReceptionBody.ownerRemarks,
      milage: carReceptionBody.milage,
      workOrder: carReceptionBody.workOrder,
    });

    return this.save(workOrder);
  }
}
