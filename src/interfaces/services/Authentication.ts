import { Request, Response } from 'express';
import { User } from '../../entity/User';
import { Authenticatable } from '../Authenticatable';

export interface CreatePasswordResetTokenResponse {
  resetToken: string;
  hashedToken: string;
  passwordResetExpires: Date;
}

export interface Authentication {
  hash(password: string): Promise<string>;

  passwordMatchWithPasswordConfirm(p1: string, p2: string): boolean;

  isCorrectPassword(password: string, user: Authenticatable): Promise<boolean>;

  createPasswordResetToken(): CreatePasswordResetTokenResponse;

  checkIfPasswordResetTokenExpired(user: Authenticatable): boolean;

  changedPasswordAfter(user: Authenticatable, date: Date): boolean;

  signJWTToken(s: string | number): string;

  createSendJWTToken(
    user: Authenticatable,
    statusCode: number,
    req: Request,
    res: Response
  ): void;
}
