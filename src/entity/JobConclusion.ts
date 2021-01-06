import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { WorkOrder } from './WorkOrder';

@Entity('job_conclusion')
export class JobConclusion {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 1000, name: 'work_done' })
  workDone: string;

  @Column({ type: 'varchar', length: 1000, nullable: true })
  note: string;

  @Column({ type: 'int' })
  charged: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Column({ type: 'varchar', length: 50, nullable: true })
  workOrderId: string;

  @OneToOne((type) => WorkOrder, (workOrder) => workOrder.jobConclusion, {
    onDelete: 'SET NULL',
  })
  workOrder: WorkOrder;
}
