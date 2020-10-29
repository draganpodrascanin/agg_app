import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Car } from './Car';

@Entity('next_visit')
class NextVisit {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'int' })
  milage: number;

  @Column({ type: 'varchar', length: 255 })
  note: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => Car, (car) => car.nextVisits)
  car: Car;
}

export default NextVisit;
