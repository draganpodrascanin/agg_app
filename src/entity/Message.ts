import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  BeforeInsert,
} from 'typeorm';

import { IsEmail } from 'class-validator';

@Entity('message')
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

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

  @BeforeInsert()
  beforeInsert() {
    this.createdAt = new Date();
  }
}
