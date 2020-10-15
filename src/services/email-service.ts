import nodemailer from 'nodemailer';
import pug from 'pug';
import htmlToText from 'html-to-text';
import { EmailTemaplates } from '../enum/EmailTemplates';
import { Email } from '../interfaces/services/Email';
import { User } from '../entity/User';
import { injectable } from 'inversify';

@injectable()
class EmailService implements Email {
  public to: string;
  public name: string;
  private user: User;
  protected from: string = `Auto Gas Gaga <${process.env.EMAIL_FROM!}>`;

  /**
   * setting user that some methods might use
   */

  newTransport() {
    if (process.env.NODE_ENV === 'production') {
      return nodemailer.createTransport({
        //@ts-ignore
        host: process.env.PROD_EMAIL_HOST,
        port: process.env.PROD_EMAIL_PORT,
        auth: {
          user: process.env.PROD_EMAIL_USERNAME,
          pass: process.env.PROD_EMAIL_PASSWORD,
        },
      });
    }

    return nodemailer.createTransport({
      //@ts-ignore
      host: process.env.DEV_EMAIL_HOST,
      port: process.env.DEV_EMAIL_PORT,
      auth: {
        user: process.env.DEV_EMAIL_USERNAME,
        pass: process.env.DEV_EMAIL_PASSWORD,
      },
    });
  }

  // Send the email method
  async send(
    template: EmailTemaplates,
    to: string,
    subject: string,
    options?: Object
  ) {
    // 1) Render HTML based on a pug template
    const html = pug.renderFile(
      `${__dirname}/../../views/email/${template}.pug`,
      {
        subject,
        ...options,
      }
    );
    // 2) Define email options
    const mailOptions = {
      from: this.from,
      to: to,
      subject,
      html,
      text: htmlToText.fromString(html),
    };

    // 3) Create a transport and send email
    await this.newTransport().sendMail(mailOptions);
  }

  //to whom to send email
  async sendWelcome(to: string) {
    await this.send(
      EmailTemaplates['welcome'],
      to,
      'Uspesno otvorena e knjizica.'
    );
  }

  /**
   * url on which can user retrive its password
   *
   * @param url
   */
  async sendPasswordReset(to: string, url: string) {
    await this.send(EmailTemaplates['passwordReset'], to, 'Resetovanje šifre', {
      url,
    });
  }
}

export default EmailService;
