import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  Index,
} from 'typeorm';
import NextVisit from './NextVisit';
import { User } from './User';
import { Warranty } from './Warranty';
import { WorkOrder } from './WorkOrder';

@Entity('car')
export class Car {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 50, name: 'car_brand' })
  carBrand: string;

  @Column({ type: 'varchar', length: 50, name: 'car_model' })
  carModel: string;

  @Column({ type: 'int' })
  milage: number;

  @Column({ type: 'varchar', length: 30, unique: true })
  @Index()
  registration: string;

  @Column({ type: 'year', name: 'production_year' })
  productionYear: Date;

  @Column({ type: 'varchar', length: 100 })
  engine: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Column({ nullable: true, type: 'varchar', length: 50 })
  userId: string;

  @ManyToOne(() => User, (user) => user.cars)
  user: User;

  @OneToMany(() => Warranty, (warranty) => warranty.car)
  warranties: Warranty[];

  @OneToMany(() => WorkOrder, (workOrder) => workOrder.car)
  workOrders: WorkOrder[];

  @OneToMany(() => NextVisit, (nextVisit) => nextVisit.car)
  nextVisits: NextVisit[];
}
