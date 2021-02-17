import { injectable } from 'inversify';
import { User } from '../entity/User';
import { UserRepository } from '../repositories/UserRepository';
import UserInterface from '../interfaces/entities/User';
import CustomError from '../utils/CustomError';
import getEnvConnection from '../utils/get-env-connection';
import AuthenticationService from './auth-service';
import validateEntity from '../utils/validateEntity';
import { UserServiceInterface } from '../interfaces/services/UserService';
import { Repository } from 'typeorm';

@injectable()
export default class UserAuthService
  extends AuthenticationService
  implements UserServiceInterface {
  public async createNewUser(user: UserInterface): Promise<User> {
    const { email, firstName, lastName, phoneNumber } = user;
    const repo = getEnvConnection().getCustomRepository(UserRepository);

    if (!email || !user.password || !firstName || !lastName || !phoneNumber) {
      throw new CustomError(
        'email, first name, last name, password and phone number are required (not optional)',
        400
      );
    }

    const newUser = new User();
    newUser.password = user.password;
    newUser.email = email;
    newUser.firstName = firstName;
    newUser.lastName = lastName;
    newUser.phoneNumber = phoneNumber;

    await validateEntity(newUser);

    newUser.password = await this.hash(user.password);

    return repo.save(newUser);
  }

  //---------------------------------------------------------------------------

  async findUserIfPasswordIsValid(
    email: string,
    password: string
  ): Promise<User> {
    const repo = getEnvConnection().getCustomRepository(UserRepository);
    const user = await repo.findUserByEmail(email);

    if (!user) {
      throw new CustomError('User does not exist', 400);
    }

    if (!(await this.isCorrectPassword(password, user))) {
      throw new CustomError('Wrong password', 400);
    }

    return user;
  }

  async resetUsersPassword(user: User) {
    const repo = getEnvConnection().getCustomRepository(UserRepository);
    //reset password to be - 12345678
    const newPass = await this.hash('12345678');
    user.password = newPass;

    return repo.save(user);
  }
}
