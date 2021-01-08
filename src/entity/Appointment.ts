import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('appointment')
class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  car: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  note: string;

  @Column({ type: 'boolean', nullable: true })
  showedUp: boolean;

  @Column({ type: 'varchar', length: 30 })
  phoneNumber: string;

  @Column({ type: 'datetime' })
  datetime: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}

export default Appointment;
