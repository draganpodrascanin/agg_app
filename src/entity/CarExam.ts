import { type } from 'os';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { CarReception } from './CarReception';
import { WorkOrder } from './WorkOrder';

@Entity('car_exam')
export class CarExam {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 1000, name: 'exam_conclusion' })
  exam_conclusion: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Column()
  workOrderId: string;

  @OneToOne((type) => WorkOrder, (workOrder) => workOrder.carExam)
  workOrder: WorkOrder;

  // @OneToMany(() => Warranty, (warranty) => warranty.warrantyConditions)
  // warranties: Warranty[];
}
