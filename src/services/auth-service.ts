import bcrypt from 'bcryptjs';
import { User } from '../entity/User';
import { Admin } from '../entity/Admin';
import crypto from 'crypto';
import { Authentication } from '../interfaces/services/Authentication';
import { injectable } from 'inversify';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { Authenticatable } from '../interfaces/Authenticatable';

//this service is used for users and admins
@injectable()
class AuthenticationService implements Authentication {
  passwordMatchWithPasswordConfirm(password: string, passwordConfirm: string) {
    return password === passwordConfirm;
  }

  //----------------------------------------------------------------------------------

  hash(password: string): Promise<string> {
    return bcrypt.hash(password, 12);
  }

  //----------------------------------------------------------------------------------

  isCorrectPassword(password: string, User: Authenticatable): Promise<boolean> {
    return bcrypt.compare(password, User.password);
  }
  createPasswordResetToken() {
    const resetToken = crypto.randomBytes(32).toString('hex');

    const hashedToken = crypto
      .createHash('sha256')
      .update(resetToken)
      .digest('hex');

    const passwordResetExpires = new Date(Date.now() + 10 * 60 * 1000);

    return { resetToken, hashedToken, passwordResetExpires };
  }

  //----------------------------------------------------------------------------------

  checkIfPasswordResetTokenExpired(user: Authenticatable): boolean {
    if (!user.passwordResetExpires) return true;
    return user.passwordResetExpires < new Date();
  }

  //----------------------------------------------------------------------------------

  changedPasswordAfter(user: User, date: Date): boolean {
    if (!user.passwordChangedAt) return false;
    return date < user.passwordChangedAt;
  }

  //----------------------------------------------------------------------------------

  signJWTToken(id: string | number): string {
    return jwt.sign({ id, iat: Date.now() }, process.env.JWT_SECRET!, {
      expiresIn: process.env.JWT_EXPIRES_IN!,
    });
  }

  //----------------------------------------------------------------------------------

  createSendJWTToken(
    user: Authenticatable,
    statusCode: number,
    request: Request,
    res: Response
  ): void {
    let jwt = '';

    if (user instanceof User) jwt = 'jwt';
    if (user instanceof Admin) jwt = 'adminjwt';

    const token = this.signJWTToken(user.id);

    res.cookie(jwt, token, {
      expires: new Date(
        //@ts-ignore
        Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
      // secure: req.secure || req.headers['x-forwarded-proto'] === 'https'
    });

    // Remove password from output
    const resUser: { password: any } = { ...user, password: undefined };

    res.status(statusCode).json({
      status: 'success',
      token,
      data: {
        user: resUser,
      },
    });
  }
}

export default AuthenticationService;
