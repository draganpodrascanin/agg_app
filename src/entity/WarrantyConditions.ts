import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Warranty } from './Warranty';

@Entity('warranty_conditions')
export class WarrantyConditions {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 255,
    unique: true,
    name: 'conditions_title',
  })
  conditionsTitle: string;

  @Column({ type: 'varchar', length: 10000 })
  condition: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => Warranty, (warranty) => warranty.warrantyConditions)
  warranties: Warranty[];
}
