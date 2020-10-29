import { EntityRepository, Repository } from 'typeorm';
import { Car } from '../entity/Car';
import CustomError from '../utils/CustomError';
import getEnvConnection from '../utils/get-env-connection';
import { UserRepository } from './UserRepository';

@EntityRepository(Car)
export class CarRepository extends Repository<Car> {
  //----------------------------------------------------------------------------------

  public findCarPage(page: number, limit: number): Promise<Car[] | undefined> {
    const offset = (page - 1) * limit;

    return this.createQueryBuilder('car')
      .orderBy('car.created_at', 'DESC')
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
}
