import dayjs from 'dayjs';
import { Expense } from '../entity/Expanse';
import getEnvConnection from '../utils/get-env-connection';
import createDBConnection from '../utils/create-typeorm-connection';
import { Entities } from '../entity/Entities';

const getSeed = () => {
  const seed: any[] = [];

  for (let i = 0; i <= 300; i++) {
    seed.push({
      description: 'seed',
      amount: Math.round(Math.random() * 200),
      createdAt: dayjs(new Date())
        .subtract(Math.round(Math.random() * 50), 'day')
        .format('YYYY-MM-DD'),
    });
  }

  return seed;
};

const seed: any[] = getSeed();

const seedDb = async () => {
  await createDBConnection();
  const repo = getEnvConnection().getRepository(Expense);
  await repo.query(`DELETE FROM ${Entities.Expense}`);

  const seedData = repo.create(seed);
  console.log('seeding..');
  try {
    const res = await repo.save(seedData);
    console.log('seed successful - ', res);
  } catch (e) {
    console.log('seed failed - ', e);
  }
};

seedDb();
export default seed;
