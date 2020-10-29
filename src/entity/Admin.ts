import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Index,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { IsEmail, Length } from 'class-validator';
import { Authenticatable } from '../interfaces/Authenticatable';
import { Blog } from './Blog';

export enum AdminRoles {
  superAdmin = 'super-admin',
  admin = 'admin',
  blogger = 'blogger',
  editor = 'editor',
  mechanic = 'mechanic',
}

@Entity('admin')
export class Admin implements Authenticatable {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ nullable: false, type: 'varchar', length: 30 })
  firstName: string;

  @Column({ nullable: false, type: 'varchar', length: 30 })
  lastName: string;

  @Column({ nullable: false, type: 'varchar', length: 100, unique: true })
  @IsEmail()
  email: string;

  @Column({ nullable: false, type: 'varchar', length: 100, unique: true })
  @Index({ unique: true })
  username: string;

  @Column({ nullable: false, type: 'varchar', length: 255 })
  @Length(8)
  password: string;

  @Column({ nullable: true, type: 'varchar', length: 255 })
  passwordResetToken: string | null;

  @Column({ nullable: false, type: 'varchar', length: 20 })
  phoneNumber: string;

  @Column({ nullable: true, type: 'datetime' })
  passwordResetExpires: Date | null;

  @Column({
    nullable: false,
    type: 'enum',
    enum: AdminRoles,
    default: AdminRoles.mechanic,
  })
  role: AdminRoles;

  @Column({ nullable: true, type: 'datetime' })
  passwordChangedAt: Date | null;

  @Column({ nullable: false, type: 'boolean', default: true })
  active: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => Blog, (blog) => blog.admin)
  blogs: Blog[];

  setPasswordChangedAt() {
    this.passwordChangedAt = new Date(Date.now() - 1000);
  }
}
