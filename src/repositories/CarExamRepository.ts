import { EntityRepository, Repository } from 'typeorm';
import { CarExam } from '../entity/CarExam';
import { WorkOrder } from '../entity/WorkOrder';

interface ICarExamBody {
  workOrder: WorkOrder;
  examConclusion: string;
}

@EntityRepository(CarExam)
export class CarExamRepository extends Repository<CarExam> {
  //----------------------------------------------------------------------------------

  public createAndSave(carExamBody: ICarExamBody): Promise<CarExam> {
    const workOrder = this.create({
      examConclusion: carExamBody.examConclusion,
      workOrder: carExamBody.workOrder,
    });

    return this.save(workOrder);
  }
}
