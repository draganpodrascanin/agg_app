import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  BeforeInsert,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Car } from './Car';
import { User } from './User';
import { WarrantyConditions } from './WarrantyConditions';

@Entity('warranty')
export class Warranty {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'parts_under_warranty', type: 'varchar', length: 255 })
  partsUnderWarranty: string;

  @Column({ type: 'datetime', name: 'vaild_until' })
  validUntil: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Column({ nullable: true, type: 'varchar', length: 50 })
  carId: string;

  @Column({ nullable: true, type: 'varchar', length: 50 })
  warrantyConditionsId: string;

  @ManyToOne((type) => Car, (car) => car.warranties)
  car: Car;

  @ManyToOne(
    () => WarrantyConditions,
    (warrantyConditions) => warrantyConditions.warranties
  )
  warrantyConditions: WarrantyConditions;
}
