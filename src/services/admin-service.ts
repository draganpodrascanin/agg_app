import { injectable } from 'inversify';
import { Admin } from '../entity/Admin';
import { AdminRepository } from '../repositories/AdminRepository';
import AdminInterface from '../interfaces/entities/Admin';
import CustomError from '../utils/CustomError';
import getEnvConnection from '../utils/get-env-connection';
import AuthenticationService from './auth-service';
import validateEntity from '../utils/validateEntity';
import {
  AdminServiceInterface,
  CreateAdminArg,
} from '../interfaces/services/AdminService';

@injectable()
export default class AdminService
  extends AuthenticationService
  implements AdminServiceInterface {
  //--------------------------------------------------------------------------------

  async findAdminIfPasswordIsValid(
    username: string,
    password: string
  ): Promise<Admin> {
    const repo = getEnvConnection().getCustomRepository(AdminRepository);
    const admin = await repo.findAdminByUsername(username);

    if (!admin) {
      throw new CustomError('User does not exisst', 400);
    }

    if (!(await this.isCorrectPassword(password, admin))) {
      throw new CustomError('Wrong password', 400);
    }

    return admin;
  }

  async createNewAdmin(admin: CreateAdminArg): Promise<Admin> {
    const { email, firstName, lastName, phoneNumber, username } = admin;
    const repo = getEnvConnection().getCustomRepository(AdminRepository);

    if (!email || !admin.password || !firstName || !lastName || !phoneNumber) {
      throw new CustomError(
        'email, first name, last name, password and phone number are required (not optional)',
        400
      );
    }

    const newAdmin = new Admin();
    newAdmin.password = admin.password;
    newAdmin.email = email;
    newAdmin.firstName = firstName;
    newAdmin.lastName = lastName;
    newAdmin.phoneNumber = phoneNumber;
    newAdmin.username = username;
    if (admin.role) newAdmin.role = admin.role;

    await validateEntity(newAdmin);

    newAdmin.password = await this.hash(admin.password);

    return repo.save(newAdmin);
  }
}
