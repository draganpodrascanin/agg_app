import { EntityRepository, Repository, Timestamp } from 'typeorm';
import { Car } from '../entity/Car';
import NextVisit from '../entity/NextVisit';

interface INextVisitBody {
  note: string;
  milage: number;
  car: Car;
}

@EntityRepository(NextVisit)
export class NextVisitRepository extends Repository<NextVisit> {
  //----------------------------------------------------------------------------------

  public async createNextVisit(
    nextVisitBody: INextVisitBody
  ): Promise<NextVisit> {
    const nextVisit = this.create({
      milage: nextVisitBody.milage,
      note: nextVisitBody.note,
      car: nextVisitBody.car,
    });

    return this.save(nextVisit);
  }
}
