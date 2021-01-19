import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  Index,
  BeforeInsert,
  BeforeUpdate,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Admin } from './Admin';
import { Image } from './Image';

@Entity('blog')
export class Blog {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'boolean', default: false })
  published: boolean;

  @Column({ type: 'varchar', length: 255, unique: true })
  @Index('blog-slug')
  slug: string;

  @Column({ type: 'text' })
  content: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Column({ nullable: true, type: 'varchar', length: 50 })
  adminId: string;

  @ManyToOne(() => Admin, (admin) => admin.blogs)
  admin: Admin;

  @Column({ type: 'varchar', length: 150 })
  synopsis: string;

  @OneToOne(() => Image)
  @JoinColumn()
  image: Image;

  @Column({ nullable: true, type: 'varchar', length: 50 })
  imageId: string;

  @Column({
    default: 'generic heading image with title',
    type: 'varchar',
    length: 255,
  })
  imageAlt: string;

  @OneToOne(() => Image)
  @JoinColumn()
  thumbnail: Image;

  @Column({
    default: 'generic thumbnail with title',
    type: 'varchar',
    length: 255,
  })
  thumbnailAlt: string;

  @Column({ nullable: true, type: 'varchar', length: 50 })
  thumbnailId: string;

  @BeforeInsert()
  @BeforeUpdate()
  createSlug() {
    this.slug = this.title.split(' ').join('-');
  }

  @BeforeInsert()
  createSynopsis() {
    if (!this.synopsis) this.synopsis = this.content.slice(3, 150) + '...';
  }
}
