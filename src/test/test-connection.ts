import { config } from 'dotenv';
config({ path: 'config.env' });
//@ts-ignore
process.env.UV_THREADPOOL_SIZE = 1;
import { getConnection, getConnectionOptions } from 'typeorm';
import { createConnection } from 'typeorm';
import { asyncForEach } from '../utils/asyncForEach';
import getEnvConnection from '../utils/get-env-connection';

const testConnection = {
  //create a connection to test db
  async create() {
    const opt = await getConnectionOptions(process.env.NODE_ENV);
    await createConnection(opt);
  },

  //clear everything from db
  async clear() {
    const connection = getEnvConnection();
    const entities = connection.entityMetadatas;

    await asyncForEach(entities, async (entity: any) => {
      const repo = connection.getRepository(entity.tableName);
      await repo.query(`DELETE FROM ${entity.tableName}`);
    });
  },

  //close connection
  async close() {
    await getConnection(process.env.NODE_ENV).close();
  },
};

export default testConnection;
