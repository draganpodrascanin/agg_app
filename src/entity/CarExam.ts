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
import { WorkOrder } from './WorkOrder';

@Entity('car_exam')
export class CarExam {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 1000, name: 'exam_conclusion' })
  examConclusion: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToOne((type) => WorkOrder, (workOrder) => workOrder.carExam, {
    onDelete: 'CASCADE',
  })
  workOrder: WorkOrder;
}
