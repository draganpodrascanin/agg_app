import Mail from 'nodemailer/lib/mailer';
import { EmailTemaplates } from '../../enum/EmailTemplates';

export interface Email {
  newTransport(): Mail;

  send(
    template: EmailTemaplates,
    to: string,
    subject: string,
    options?: Object
  ): Promise<void>;

  sendWelcome(to: string): Promise<void>;

  sendPasswordReset(to: string, url: string): Promise<void>;
}
