import { notEquals } from 'class-validator';
import { EntityRepository, Not, Repository } from 'typeorm';
import { Entities } from '../entity/Entities';
import { JobTicket, JobTicketStatus } from '../entity/JobTicket';
import { WorkOrder } from '../entity/WorkOrder';

interface IJobTicketBody {
  workOrder: WorkOrder;
  ticket: string;
  status: JobTicketStatus;
}

@EntityRepository(JobTicket)
export class JobTicketRepository extends Repository<JobTicket> {
  //----------------------------------------------------------------------------------

  public createAndSave(jobTicketBody: IJobTicketBody): Promise<JobTicket> {
    const workOrder = this.create({
      ticket: jobTicketBody.ticket,
      workOrder: jobTicketBody.workOrder,
      status: jobTicketBody.status,
    });

    return this.save(workOrder);
  }

  public getActive(): Promise<JobTicket[]> {
    return this.find({
      where: { status: Not('finished') },
    });
  }
}
