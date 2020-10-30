import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { CarExam } from './CarExam';
import { CarReception } from './CarReception';
import { JobTicket } from './JobTicket';
import { JobConclusion } from './JobConclusion';
import { Car } from './Car';

@Entity('work_order')
export class WorkOrder {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'boolean', default: false })
  completed: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Column({ nullable: true, type: 'varchar', length: 50 })
  carReceptionId: string;

  @Column({ nullable: true, type: 'varchar', length: 50 })
  carExamId: string;

  @Column({ nullable: true, type: 'varchar', length: 50 })
  jobConclusionId: string;

  @Column({ nullable: true, type: 'varchar', length: 50 })
  carId: string;

  @ManyToOne(() => Car, (car) => car.workOrders)
  car: Car;

  @OneToOne((type) => CarReception, (carReception) => carReception.workOrder)
  @JoinColumn()
  carReception: CarReception;

  @OneToOne((type) => CarExam, (carExam) => carExam.workOrder)
  @JoinColumn()
  carExam: CarExam;

  @OneToOne((type) => JobConclusion, (jobConclusion) => jobConclusion.workOrder)
  @JoinColumn()
  jobConclusion: JobConclusion;

  @OneToMany(() => JobTicket, (jobTicket) => jobTicket.workOrder)
  jobTickets: JobTicket[];
}
