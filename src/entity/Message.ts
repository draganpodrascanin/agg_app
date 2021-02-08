import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

import { IsEmail } from 'class-validator';

@Entity('message')
export class Message {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'boolean',
    default: false,
  })
  seen: Boolean;

  @Column({
    type: 'varchar',
    length: 100,
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 100,
  })
  phone: string;

  @Column({
    type: 'varchar',
    length: 100,
  })
  @IsEmail()
  email: string;

  @Column({
    type: 'varchar',
    length: 200,
    nullable: true,
  })
  car: string;

  @Column({
    type: 'varchar',
    length: 500,
  })
  message: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
