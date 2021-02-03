import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { InvoiceDesc } from './InvoiceDesc';

export enum InvoiceTitleEnum {
  racun = 'Račun',
  predracun = 'Predračun',
}

@Entity('invoice')
export class Invoice {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'enum',
    enum: InvoiceTitleEnum,
    default: InvoiceTitleEnum.racun,
  })
  invoiceTitle: InvoiceTitleEnum;

  @Column({ type: 'varchar', length: 100, default: 'Banja Luka' })
  location: string;

  @Column({ type: 'date' })
  dpo: Date;

  @Column({ type: 'date' })
  valuta: Date;

  @Column({ type: 'int', name: 'invoice_no' })
  invoiceNo: number;

  @Column({ type: 'varchar', length: 30 })
  po: string;

  @Column({ type: 'date', name: 'due_date' })
  dueDate: Date;

  @Column({ type: 'date' })
  deliveryDate: Date;

  @Column({ type: 'varchar', length: 60 })
  customerName: string;

  @Column({ type: 'varchar', length: 150, nullable: true })
  customerAdress: string;

  @Column({ type: 'varchar', length: 150, nullable: true })
  customerPostNumberLocation: string;

  @Column({ type: 'varchar', length: 15, nullable: true })
  customerPhoneNumber: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  customerEmail: string;

  @Column({ type: 'varchar', length: 300, nullable: true })
  customerAdditionalInfo: string;

  @Column({ type: 'varchar', length: 200, nullable: true })
  predracunTag: string;

  @Column({ type: 'varchar', length: 100 })
  priceInWriting: string;

  @Column({ type: 'varchar', length: 200, nullable: true })
  pdfName: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToMany((type) => InvoiceDesc, (invocieDesc) => invocieDesc.invoice)
  invoiceDescs: InvoiceDesc[];

  @BeforeInsert()
  updatePredracunTag() {
    if (this.invoiceTitle === InvoiceTitleEnum.predracun) {
      this.predracunTag = 'Ovaj dokument je važeći bez pečata i potpisa.';
    }
  }
}
