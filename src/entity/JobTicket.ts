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

  @Column({ type: 'varchar', length: 255 })
  ticket: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Column({ type: 'varchar', length: 50, nullable: true })
  workOrderId: string;

  @ManyToOne((type) => WorkOrder, (workOrder) => workOrder.jobTickets, {
    onDelete: 'CASCADE',
  })
  workOrder: WorkOrder;
}
