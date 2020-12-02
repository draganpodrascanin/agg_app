import dayjs from 'dayjs';
import UserAuthService from '../services/user-service';
import createDBConnection from '../utils/create-typeorm-connection';
import faker from 'faker';
import getEnvConnection from '../utils/get-env-connection';
import { User } from '../entity/User';
import { Car } from '../entity/Car';
import { asyncForEach } from '../utils/asyncForEach';

const userService = new UserAuthService();

const getUserSeed = async () => {
  const userSeed: User[] = [];
  const userRepo = getEnvConnection().getRepository(User);

  for (let i = 0; i <= 300; i++) {
    const userData = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: 'password',
      phoneNumber: faker.phone.phoneNumber('+386########'),
      createdAt: dayjs(new Date())
        .subtract(Math.round(Math.random() * 50), 'day')
        .format('YYYY-MM-DD'),
    };

    const user = userRepo.create(userData);

    userSeed.push(user);
  }

  return userSeed;
};

const seedDB = async () => {
  await createDBConnection();
  const useSeed = await getUserSeed();
  const carSeed: Car[] = [];

  const userRepo = getEnvConnection().getRepository(User);
  const carRepo = getEnvConnection().getRepository(Car);

  console.log('seeding..');
  try {
    await asyncForEach(useSeed, async (user: User) => {
      user.password = await userService.hash(user.password);
      const u = await userRepo.save(user);
      console.log(u);

      //for every user create 1 or 2 cars
      const carNum = Math.round(Math.random() + 1);
      for (let e = 1; e <= carNum; e++) {
        //battle with linter, name is "a" because linter always break the line and ends up wit \n in db
        const a = (n: number) => faker.random.alphaNumeric(n);

        const carData = {
          user: u,
          registration: `${a(3)}-${a(1)}-${a(3)}`,
          carBrand: faker.vehicle.manufacturer(),
          carModel: faker.vehicle.model(),
          productionYear: dayjs(faker.date.past(30)).format('YYYY'),
          engine: faker.vehicle.vin(),
          milage: 100000,
        };

        carSeed.push(carRepo.create(carData));
      }
    });

    await carRepo.save(carSeed);

    return console.log('seeding DB success!');
  } catch (e) {
    return console.log('seeding DB failed. - ', e);
  }
};

seedDB();
