import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Admin } from './Admin';

@Entity('blog')
export class Blog {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'varchar', length: 255 })
  slug: string;

  @Column({ type: 'varchar', length: 100 })
  img: string;

  @Column({ type: 'varchar', length: 100, name: 'img_min' })
  imgMin: string;

  @Column({ type: 'text' })
  markdown: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Column({ nullable: true, type: 'varchar', length: 50 })
  adminId: string;

  @ManyToOne(() => Admin, (admin) => admin.blogs)
  admin: Admin;
}
