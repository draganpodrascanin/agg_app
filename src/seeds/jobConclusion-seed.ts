import dayjs from 'dayjs';
import getEnvConnection from '../utils/get-env-connection';
import createDBConnection from '../utils/create-typeorm-connection';
import { JobConclusion } from '../entity/JobConclusion';
import { Entities } from '../entity/Entities';
import faker from 'faker';

const getSeed = () => {
  const seed: any[] = [];

  for (let i = 0; i <= 300; i++) {
    seed.push({
      charged: Math.round(Math.random() * 250 + 10),
      workDone: faker.company.catchPhrase(),
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
  const repo = getEnvConnection().getRepository(JobConclusion);
  await repo.query(`DELETE FROM ${Entities.JobConclusion}`);

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
