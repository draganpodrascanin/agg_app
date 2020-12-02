import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Index,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Car } from './Car';
import { IsEmail, Length } from 'class-validator';
import { Authenticatable } from '../interfaces/Authenticatable';

@Entity('user')
export class User implements Authenticatable {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ nullable: false, type: 'varchar', length: 30 })
  firstName: string;

  @Column({ nullable: false, type: 'varchar', length: 30 })
  lastName: string;

  @Column({ nullable: false, type: 'varchar', length: 100, unique: true })
  @Index('user-email-idx')
  @IsEmail()
  email: string;

  @Column({ nullable: false, type: 'varchar', length: 255 })
  @Length(8)
  password: string;

  @Column({ nullable: true, type: 'varchar', length: 255 })
  passwordResetToken: string | null;

  @Column({ nullable: false, type: 'varchar' })
  phoneNumber: string; /* format - 38765701308 */

  @Column({ nullable: true, type: 'datetime' })
  passwordResetExpires: Date | null;

  @Column({ nullable: true, type: 'datetime' })
  passwordChangedAt: Date | null;

  @Column({ nullable: false, type: 'boolean', default: true })
  active: boolean;

  @OneToMany(() => Car, (car) => car.user)
  cars: Car[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  setPasswordChangedAt() {
    this.passwordChangedAt = new Date(Date.now() - 1000);
  }
}
