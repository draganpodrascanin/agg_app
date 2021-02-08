import { Request, Response } from 'express';
import { Entities } from '../entity/Entities';
import { Message } from '../entity/Message';
import { MessageRepository } from '../repositories/MessageRepository';
import { io } from '../server';
import CustomError from '../utils/CustomError';
import getEnvConnection from '../utils/get-env-connection';
import handlerFactory from './handlerFactory';

class MessageController {
  public updateOne = handlerFactory.updateOne(Entities.Message, ['seen']);
  public deleteOne = handlerFactory.deleteOne(Entities.Message);

  public create = async (req: Request, res: Response) => {
    const { name, phone, email, message, car } = req.body;

    if (!name || !phone || !message)
      throw new CustomError(
        'Name, phone and message are required fields.',
        400
      );

    const messageRepo = getEnvConnection().getCustomRepository(
      MessageRepository
    );

    const newMessage = await messageRepo.createAndSave({
      name,
      car,
      phone,
      email,
      message,
    });

    io.emit('NewMessage', newMessage);

    res.status(201).json({
      status: 'success',
      data: newMessage,
    });
  };

  public getPage = async (req: Request, res: Response) => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 20;
    const search = req.query.search ? String(req.query.search) : '';

    const messageRepo = getEnvConnection().getCustomRepository(
      MessageRepository
    );

    const messages = await messageRepo.getPage(page, limit, search);

    //get count
    let countQuery = messageRepo.createQueryBuilder(Entities.Message);
    if (search) countQuery.where(`${Entities}.name LIKE '%${search}%'`);
    const count = await countQuery.getCount();

    res.status(200).json({
      status: 'success',
      data: {
        results: messages.length,
        messages,
        count,
      },
    });
  };

  public getNotSeenNumber = async (req: Request, res: Response) => {
    const messageRepo = getEnvConnection().getCustomRepository(
      MessageRepository
    );

    const numberNotSeen = await messageRepo.count({ seen: false });

    res.status(200).json({
      status: 'success',
      data: numberNotSeen,
    });
  };
}

export default new MessageController();
