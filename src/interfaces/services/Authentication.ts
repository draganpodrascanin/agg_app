import { Request, Response } from 'express';
import { User } from '../../entity/User';

export interface CreatePasswordResetTokenResponse {
  resetToken: string;
  hashedToken: string;
  passwordResetExpires: Date;
}

export interface Authentication {
  hash(password: string): Promise<string>;

  passwordMatchWithPasswordConfirm(p1: string, p2: string): boolean;

  isCorrectPassword(password: string, user: User): Promise<boolean>;

  createPasswordResetToken(): CreatePasswordResetTokenResponse;

  checkIfPasswordResetTokenExpired(user: User): boolean;

  changedPasswordAfter(user: User, date: Date): boolean;

  signJWTToken(s: string | number): string;

  createSendJWTToken(
    user: User,
    statusCode: number,
    req: Request,
    res: Response
  ): void;
}
