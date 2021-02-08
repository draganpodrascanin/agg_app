import { notEquals } from 'class-validator';
import { EntityRepository, Not, Repository } from 'typeorm';
import { Entities } from '../entity/Entities';
import { Message } from '../entity/Message';

interface IMessageCreate {
  name: string;
  phone: string;
  email?: string;
  car?: string;
  message: string;
}

@EntityRepository(Message)
export class MessageRepository extends Repository<Message> {
  //----------------------------------------------------------------------------------

  public createAndSave(messageBody: IMessageCreate): Promise<Message> {
    const Message = this.create({
      email: messageBody.email,
      phone: messageBody.phone,
      name: messageBody.name,
      car: messageBody.car,
      message: messageBody.message,
    });

    return this.save(Message);
  }

  public getPage(
    page: number,
    limit: number,
    search?: string
  ): Promise<Message[]> {
    const offset = (page - 1) * limit;

    let query = this.createQueryBuilder(Entities.Message);

    if (search) query.where(`${Entities.Message}.name LIKE '%${search}%'`);

    return query
      .orderBy(`${Entities.Message}.createdAt`, 'DESC')
      .offset(offset)
      .limit(limit)
      .getMany();
  }
}
