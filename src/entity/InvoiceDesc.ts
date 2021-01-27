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

export enum UnitEnum {
  kom = 'kom',
  h = 'h',
  komplet = 'komplet',
}

@Entity('invoice_desc')
export class InvoiceDesc {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 150, name: 'bill_to' })
  desc: string; // item or service being billed

  @Column({ type: 'int', default: 1 })
  qty: number;

  @Column({ type: 'decimal', precision: 8, scale: 2 })
  pricePerUnit: number;

  @Column({ type: 'decimal', precision: 8, scale: 2 })
  preTaxPrice: number;

  @Column({ type: 'decimal', precision: 8, scale: 2 })
  priceTaxInc: number;

  @Column({ type: 'int', default: 0 })
  tax: number;

  @Column({ type: 'int', default: 0 })
  discount: number;

  @Column({ type: 'enum', enum: UnitEnum, default: UnitEnum.kom })
  unit: UnitEnum;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Column({ type: 'varchar', length: 50, nullable: true })
  invoiceId: string;

  @ManyToOne((type) => Invoice, (invoice) => invoice.invoiceDescs)
  invoice: Invoice;

  @BeforeInsert()
  setPreTaxPrice() {
    this.preTaxPrice = this.pricePerUnit * this.qty;
  }

  @BeforeInsert()
  setPriceTaxInc() {
    this.priceTaxInc = this.preTaxPrice * (1 + this.tax / 100);
  }
}
