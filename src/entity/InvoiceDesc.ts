import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Invoice } from './Invoice';

@Entity('invoice_desc')
export class InvoiceDesc {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'int', default: 1 })
  qty: number;

  @Column({ type: 'decimal', precision: 8, scale: 2 })
  price: number;

  @Column({ type: 'decimal', precision: 8, scale: 2, name: 'price_per_unit' })
  pricePerUnit: number;

  @Column({ type: 'varchar', length: 150, name: 'bill_to' })
  desc: string; // item or service being billed

  @Column({ type: 'int', default: 0 })
  tax: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Column({ type: 'varchar', length: 50, nullable: true })
  invoiceId: string;

  @ManyToOne((type) => Invoice, (invoice) => invoice.invoiceDescs)
  invoice: Invoice;

  @BeforeInsert()
  setPrice() {
    this.price = this.pricePerUnit * this.qty;
  }
}
