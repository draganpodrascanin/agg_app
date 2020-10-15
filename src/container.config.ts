import { Container } from 'inversify';
import { TYPES } from './types';
import { Authentication } from './interfaces/services/Authentication';
import AuthenticationService from './services/auth-service';
import { Email } from './interfaces/services/Email';
import EmailService from './services/email-service';

var container = new Container();
container.bind<Authentication>(TYPES.Authentication).to(AuthenticationService);
container.bind<Email>(TYPES.Email).to(EmailService);

export default container;
