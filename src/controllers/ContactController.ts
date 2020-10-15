import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { Message } from '../entity/Message';
import CustomError from '../utils/CustomError';
import { Email } from '../interfaces/services/Email';
// import Email from '../utils/Email/Email';
// import { EmailTemaplates } from '../utils/Email/EmailTemplate';
import getEnvConnection from '../utils/get-env-connection';
import { TYPES } from '../types';
import container from '../container.config';
import { EmailTemaplates } from '../enum/EmailTemplates';
@injectable()
class ContactController {
  private _EmailService: Email;

  constructor(@inject(TYPES.Email) Email: Email) {
    this._EmailService = Email;
  }

  public contact = async (req: Request, res: Response, next: NextFunction) => {
    const { email, car, phone, name, message } = req.body;

    //save message to db
    const msgRepo = getEnvConnection().getRepository(Message);
    const msg = msgRepo.create({
      email,
      car,
      phone,
      name,
      message,
    });

    await msgRepo.save(msg);

    try {
      await this._EmailService.send(
        EmailTemaplates.contactEmail,
        process.env.RECIVER_EMAIL!,
        `AGG KONTAKT - ${name}`,
        {
          name,
          phone,
          email,
          car,
          message,
        }
      );
    } catch (e) {
      console.log(e);
      throw new CustomError(
        'Failed with sending mail, please try again later',
        500
      );
    }

    res.status(200).json({
      status: 'success',
    });
    //send email
  };

  // public ponuda = async (req: Request, res: Response, next: NextFunction) => {};
}

export default new ContactController(container.get<Email>(TYPES.Email));
