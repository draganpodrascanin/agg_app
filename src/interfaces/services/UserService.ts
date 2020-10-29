import { User } from '../../entity/User';
import { Authentication } from './Authentication';
import UserInterface from '../entities/User';

export interface UserServiceInterface extends Authentication {
  findUserIfPasswordIsValid(email: string, password: string): Promise<User>;

  createNewUser(userBody: UserInterface): Promise<User>;

  resetUsersPassword(user: User): Promise<User>;
}
