import { Container } from 'inversify';
import { TYPES } from './types';
import { Authentication } from './interfaces/services/Authentication';
import AuthenticationService from './services/auth-service';
import UserService from './services/user-service';
import AdminService from './services/admin-service';
import { Email } from './interfaces/services/Email';
import EmailService from './services/email-service';
import { UserServiceInterface } from './interfaces/services/UserService';
import { AdminServiceInterface } from './interfaces/services/AdminService';
import { InvoiceService } from './services/invoice-service';
import IInvoiceService from './interfaces/services/IInvoiceService';

var container = new Container();
container.bind<Authentication>(TYPES.Authentication).to(AuthenticationService);
container.bind<UserServiceInterface>(TYPES.UserService).to(UserService);
container.bind<AdminServiceInterface>(TYPES.AdminService).to(AdminService);
container.bind<Email>(TYPES.Email).to(EmailService);
container.bind<IInvoiceService>(TYPES.InvoiceService).to(InvoiceService);

export default container;
