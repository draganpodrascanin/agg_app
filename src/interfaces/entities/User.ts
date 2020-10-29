export default interface User {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  phoneNumber: string;
  passwordResetToken?: string;
  passwordResetExpires?: Date;
  passwordChangedAt?: Date;
}
