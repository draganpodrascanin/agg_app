import { createConnection, getConnectionOptions } from 'typeorm';

export default async () => {
  const conOptions = await getConnectionOptions(process.env.NODE_ENV);
  return await createConnection(conOptions);
};
