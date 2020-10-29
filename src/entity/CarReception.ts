import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { WorkOrder } from './WorkOrder';

@Entity('car_reception')
export class CarReception {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 1000, name: 'owner_remarks' })
  ownerRemarks: string;

  @Column({ type: 'varchar', length: 1000, name: 'car_damage' })
  carDamage: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Column({ nullable: true, type: 'varchar', length: 50 })
  workOrderId: string;

  @OneToOne((type) => WorkOrder, (workOrder) => workOrder.carReception)
  workOrder: WorkOrder;

  // @OneToMany(() => Warranty, (warranty) => warranty.warrantyConditions)
  // warranties: Warranty[];
}
