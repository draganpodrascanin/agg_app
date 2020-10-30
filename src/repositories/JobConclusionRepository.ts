import { EntityRepository, Repository } from 'typeorm';
import { JobConclusion } from '../entity/JobConclusion';
import { WorkOrder } from '../entity/WorkOrder';

interface IJobConclusionBody {
  workOrder: WorkOrder;
  workDone: string;
  charged: number;
  note?: string;
}

@EntityRepository(JobConclusion)
export class JobConclusionRepository extends Repository<JobConclusion> {
  //----------------------------------------------------------------------------------

  public createAndSave(
    JobConclusionBody: IJobConclusionBody
  ): Promise<JobConclusion> {
    const workOrder = this.create({
      workOrder: JobConclusionBody.workOrder,
      workDone: JobConclusionBody.workDone,
      charged: JobConclusionBody.charged,
      note: JobConclusionBody.note,
    });

    return this.save(workOrder);
  }
}
