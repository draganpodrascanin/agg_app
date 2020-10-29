import { Admin, AdminRoles } from '../../entity/Admin';
import { Authentication } from './Authentication';

export interface CreateAdminArg {
  password: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  role?: AdminRoles;
}

export interface AdminServiceInterface extends Authentication {
  findAdminIfPasswordIsValid(
    username: string,
    password: string
  ): Promise<Admin>;

  createNewAdmin(adminBody: CreateAdminArg): Promise<Admin>;
}
