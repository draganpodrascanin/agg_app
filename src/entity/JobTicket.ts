import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { WorkOrder } from './WorkOrder';

export enum JobTicketStatus {
  toDo = 'to-do',
  waitingForParts = 'waiting-for-parts',
  inProgress = 'in-progress',
  finished = 'finished',
}

@Entity('job_ticket')
export class JobTicket {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'enum',
    enum: JobTicketStatus,
    default: JobTicketStatus.toDo,
  })
  status: JobTicketStatus;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Column({ type: 'varchar', length: 30, nullable: true })
  workOrderId: string;

  @ManyToOne((type) => WorkOrder, (workOrder) => workOrder.jobTicket)
  workOrder: WorkOrder;
}
