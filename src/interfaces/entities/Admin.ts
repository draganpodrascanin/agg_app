import { AdminRoles } from '../../entity/Admin';

export default interface User {
  username: string;
  role: AdminRoles;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  phoneNumber: number;
  passwordResetToken?: string;
  passwordResetExpires?: Date;
  passwordChangedAt?: Date;
}
