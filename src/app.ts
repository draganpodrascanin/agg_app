import express from 'express';
//allows us just to throw errors without calling next and catching async
import 'express-async-errors';
import path from 'path';
import cookieParser from 'cookie-parser';
import CustomError from './utils/CustomError';

import viewsRoutes from './routes/views-routes';
import userRoutes from './routes/user-routes';
import adminRoutes from './routes/admin-routes';
import appointmentsRoutes from './routes/appointemnt-routes';
import loggingRoutes from './routes/log-routes';
import contactRoutes from './routes/contact-routes';
import carRoutes from './routes/car-routes';
import warrantyRoutes from './routes/warranty-routes';
import warrantyConditionsRoutes from './routes/warranty-condition-routes';
import workOrderRoutes from './routes/work-order-routes';
import carReceptionRoutes from './routes/car-reception-routes';
import nextVisitRoutes from './routes/next-visit-routes';

import ViewsController from './controllers/ViewsController';
import ErrorController from './controllers/ErrorController';

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '../views'));

//Serving static files
app.use(express.static(path.join(__dirname, '../public')));

app.use(express.json());
app.use(cookieParser());

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/cars', carRoutes);
app.use('/api/v1/admin', adminRoutes);
app.use('/api/v1/appointments', appointmentsRoutes);
app.use('/api/v1/logs', loggingRoutes);
app.use('/api/v1/contact', contactRoutes);
app.use('/api/v1/warranties', warrantyRoutes);
app.use('/api/v1/nextVisit', nextVisitRoutes);
app.use('/api/v1/warrantyConditions', warrantyConditionsRoutes);
app.use('/api/v1/workOrders', workOrderRoutes);
app.use('/api/v1/carReceptions', carReceptionRoutes);
//not found api route
app.use('/api/v1/*', (req, res, next) => {
  throw new CustomError(
    `can't find ${req.originalUrl} url on this server`,
    404
  );
});

app.use('/', viewsRoutes);
app.use('*', ViewsController.NotFound404View);

app.use(ErrorController);

export default app;
