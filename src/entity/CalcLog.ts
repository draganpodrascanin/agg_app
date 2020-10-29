import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  BeforeInsert,
} from 'typeorm';

@Entity('calc_log')
export class CalcLog {
  @Column()
  savingsPerMonth: number;
  @Column()
  savingsPerYear: number;

  @PrimaryGeneratedColumn('uuid')
  id: string;

  //price of Petrol (cena benzina)
  @Column({
    type: 'decimal',
    precision: 5,
    scale: 2,
  })
  pricePetrol: number;

  //price of LPG (cena plin)
  @Column({
    type: 'decimal',
    precision: 5,
    scale: 2,
  })
  priceLPG: number;

  //kilometers driven per year. (prelazi kilometara godisnje)
  @Column()
  kmPerYear: number;

  //fuel consumption per 100km (postrosnja na 100km)
  @Column()
  fcPer100km: number;

  @CreateDateColumn({ name: 'created_at' }) createdAt: Date;

  @BeforeInsert()
  beforeInsert() {
    this.savingsPerYear = Math.round(
      (this.kmPerYear / 100) *
        this.fcPer100km *
        (this.pricePetrol - this.priceLPG)
    );
    this.savingsPerMonth = Math.round(
      ((this.kmPerYear / 100) *
        this.fcPer100km *
        (this.pricePetrol - this.priceLPG)) /
        12
    );
  }
}
