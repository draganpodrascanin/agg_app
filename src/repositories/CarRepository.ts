import { EntityRepository, Like, Repository } from 'typeorm';
import { Car } from '../entity/Car';
import { Entities } from '../entity/Entities';
import CustomError from '../utils/CustomError';
import getEnvConnection from '../utils/get-env-connection';
import { UserRepository } from './UserRepository';

@EntityRepository(Car)
export class CarRepository extends Repository<Car> {
  //----------------------------------------------------------------------------------

  public findCarPage(
    page: number,
    limit: number,
    search?: string
  ): Promise<Car[] | undefined> {
    const offset = (page - 1) * limit;

    let query = this.createQueryBuilder(Entities.Car);

    if (search) {
      query
        .where(
          `CONCAT(${Entities.Car}.carBrand, ' ', ${Entities.Car}.carModel) LIKE '%${search}%'`
        )
        .orWhere(`${Entities.Car}.registration LIKE '%${search}%'`);
    }

    return query
      .orderBy('car.created_at', 'DESC')
      .leftJoinAndSelect('car.user', 'user')
      .offset(offset)
      .limit(limit)
      .getMany();
  }

  public async setOwner(carId: string, userId: number): Promise<Car> {
    const userRepo = getEnvConnection().getCustomRepository(UserRepository);

    const car = await this.findOne(carId);
    const user = await userRepo.findOne(userId);

    if (!car || !user) {
      throw new CustomError('invalid car or user id', 400);
    }

    car.user = user;
    return this.save(car);
  }

  public getSuggestions = (search: string) => {
    return this.find({
      select: ['id', 'carBrand', 'carModel', 'productionYear', 'registration'],
      where: { registration: Like(`%${search}%`) },
    });
  };

  public async setOwnerByRegistration(
    carReg: string,
    userId: number
  ): Promise<Car> {
    const userRepo = getEnvConnection().getCustomRepository(UserRepository);

    const car = await this.findOne({ where: { registration: carReg } });
    const user = await userRepo.findOne(userId);

    if (!car || !user) {
      throw new CustomError('invalid car or user id', 400);
    }

    car.user = user;
    return this.save(car);
  }

  public async getUserOwnedCars(userId: string): Promise<Car[]> {
    console.log(userId);
    return this.find({ where: { userId: userId } });
  }

  public async findByRegistration(reg: string): Promise<Car | undefined> {
    return this.findOne({ where: { registration: reg } });
  }

  public findOneAndPopulate(id: string): Promise<Car | undefined> {
    return this.createQueryBuilder(Entities.Car)
      .where(`${Entities.Car}.id = :id`, { id: id })
      .leftJoinAndSelect(`${Entities.Car}.workOrders`, Entities.WorkOrder)
      .leftJoinAndSelect(`${Entities.Car}.user`, Entities.User)
      .leftJoinAndSelect(`${Entities.Car}.warranties`, Entities.Warranty)
      .leftJoinAndSelect(
        `${Entities.Warranty}.warrantyConditions`,
        Entities.WarrantyConditions
      )
      .leftJoinAndSelect(
        `${Entities.WorkOrder}.carReception`,
        Entities.CarReception
      )
      .leftJoinAndSelect(`${Entities.WorkOrder}.carExam`, Entities.CarExam)
      .leftJoinAndSelect(`${Entities.WorkOrder}.jobTickets`, Entities.JobTicket)
      .leftJoinAndSelect(
        `${Entities.WorkOrder}.jobConclusion`,
        Entities.JobConclusion
      )
      .getOne();
  }
}
