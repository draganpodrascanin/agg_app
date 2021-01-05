import { EntityRepository, Repository } from 'typeorm';
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
}
