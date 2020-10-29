import { Request, Response } from 'express';
import { Between, LessThan, MoreThan, Raw } from 'typeorm';
import Appointment from '../entity/Appointment';
import { Entities } from '../entity/Entities';
import getEnvConnection from '../utils/get-env-connection';
import handlerFactory from './handlerFactory';
import dayjs from 'dayjs';

class AppointmentController {
  public create = handlerFactory.createOne(Entities.Appointment);
  public getAll = handlerFactory.getAll(Entities.Appointment);
  public getOne = handlerFactory.getOne(Entities.Appointment);
  public updateOne = handlerFactory.updateOne(Entities.Appointment, [
    'date',
    'time',
    'name',
    'phoneNumber',
  ]);

  public getBetweenDates = async (req: Request, res: Response) => {
    const repo = getEnvConnection().getRepository(Appointment);

    const fromDate = String(req.query.fromDate) || '1970';
    const toDate = String(req.query.toDate) || '2999';

    //format dates from params
    const formatedFromDate = dayjs(fromDate).format('YYYY-MM-DD 00:00');
    const formatedToDate = dayjs(toDate).format('YYYY-MM-DD 23:59');

    const appointments = await repo.find({
      where: { datetime: Between(formatedFromDate, formatedToDate) },
      order: { datetime: 'DESC' },
    });

    res.status(200).json({
      status: 'success',
      results: appointments.length,
      data: appointments,
    });
  };

  public getTodaysAppointments = async (req: Request, res: Response) => {
    const repo = getEnvConnection().getRepository(Appointment);

    const todayMidnight = dayjs(new Date()).format('YYYY-MM-DD 00:00');
    const tomorrow = dayjs(new Date()).add(1, 'day').format('YYYY-MM-DD 00:00');

    const appointments = await repo.find({
      where: {
        datetime: Raw(
          (alias) =>
            `${alias} > "${todayMidnight}" AND ${alias} < "${tomorrow}"`
        ),
      },
      order: { datetime: 'DESC' },
    });

    res.status(200).json({
      status: 'success',
      results: appointments.length,
      data: appointments,
    });
  };
}

export default new AppointmentController();
