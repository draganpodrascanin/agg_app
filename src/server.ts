import 'reflect-metadata';
import createDBConnection from './utils/create-typeorm-connection';
import app from './app';
import { config } from 'dotenv';
import { createServer } from 'http';
import { Server } from 'socket.io';

config({ path: 'config.env' });
const env = process.env.NODE_ENV;
if (!env) {
  console.log('ERROR SET YOUR ENV VARIABLES, EXITING APP NOW');
  process.exit(1);
}

//setting up socket-io
const httpServer = createServer(app);
export const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['POST', 'GET'],
  },
});

const bootstrap = async () => {
  //CONNECT TO DB
  try {
    const connection = await createDBConnection();
    if (env === 'development') connection.synchronize();
    // await connection.synchronize();
    console.log('connected to db..');
  } catch (err) {
    console.log("couldn't connect to DB...", err);
  }

  const PORT = process.env.PORT || 5000;

  httpServer.listen(PORT, () => {
    console.log(`app running on port ${PORT}`);
  });
};

bootstrap();
