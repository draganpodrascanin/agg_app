export interface Authenticatable {
  id: string;
  password: string;
  passwordResetToken?: string | null;
  passwordResetExpires?: Date | null;
  passwordChangedAt?: Date | null;
  active: boolean;
}
