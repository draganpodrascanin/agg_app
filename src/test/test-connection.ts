import { getConnection, getConnectionOptions } from 'typeorm';
import dotenv from 'dotenv';
import { createConnection } from 'typeorm';

import { asyncForEach } from '../utils/asyncForEach';

dotenv.config({ path: 'config.env' });

const env = process.env.NODE_ENV;
if (!env) {
  console.log('NO ENV VARIABLE, EXITING APP NOW');
  process.exit(1);
}
// console.log('NODE_ENV =', env);

const testConnection = {
  //create a connection to test db
  async create() {
    const opt = await getConnectionOptions(env);
    await createConnection(opt);
  },

  //clear everything from db
  async clear() {
    const connection = getConnection(env);
    const entities = connection.entityMetadatas;

    for (let entity of entities) {
      const repository = connection.getRepository(entity.name);
      await repository.clear();
    }
  },

  //close connection
  async close() {
    await getConnection(env).close();
  },
};

export default testConnection;
