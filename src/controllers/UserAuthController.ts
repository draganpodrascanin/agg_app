import { User } from '../entity/User';
import { Request, Response, NextFunction } from 'express';
import CustomError from '../utils/CustomError';
import getEnvConnection from '../utils/get-env-connection';
// import PasswordResetEmail from '../utils/Email/PasswordResetEmail';
import crypto from 'crypto';
import validateEntity from '../utils/validateEntity';
// import userAuthService from '../services/auth-service';
import { UserRepository } from '../repositories/UserRepository';
import { injectable, inject } from 'inversify';
import { TYPES } from '../types';
import { Authentication } from '../interfaces/services/Authentication';
import container from '../container.config';
import { Email } from '../interfaces/services/Email';
import { UserServiceInterface } from '../interfaces/services/UserService';
import EmailService from '../services/email-service';

//extending Request object to take user if provided by middleware
declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}

@injectable()
class UserAuthController {
  private _UserService;

  constructor(@inject(TYPES.UserService) userService: UserServiceInterface) {
    this._UserService = userService;
  }

  //----------------------------------------------------------------------------------

  public signupUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const {
      email,
      password,
      passwordConfirm,
      firstName,
      lastName,
      phoneNumber,
    } = req.body;

    if (
      !this._UserService.passwordMatchWithPasswordConfirm(
        password,
        passwordConfirm
      )
    ) {
      throw new CustomError(
        'password and password confirm does not match',
        400
      );
    }

    const newUser = await this._UserService.createNewUser({
      email,
      password,
      firstName,
      lastName,
      phoneNumber,
    });

    this._UserService.createSendJWTToken(newUser, 201, req, res);
  };

  //===================================================================================================================

  public loginUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { email, password } = req.body;

    let user = await this._UserService.findUserIfPasswordIsValid(
      email,
      password
    );

    this._UserService.createSendJWTToken(user, 200, req, res);
  };

  //===================================================================================================================
  //rewrite jwt cookie, effectivly logging user out
  public logoutUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    res.cookie('jwt', 'loggedout', {
      expires: new Date(0),
      httpOnly: true,
    });
    res.status(200).json({ status: 'success' });
  };

  //===================================================================================================================

  public forgotPasswordUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { email } = req.body;
    const EmailServiceInst = new EmailService();

    const userRepo = getEnvConnection().getCustomRepository(UserRepository);

    //find user with provided email
    const user = await userRepo.findUserByEmail(email);
    if (!user) throw new CustomError('User with this email not found', 404);

    //create passwordResetToken and passwordResetExpires on entity, get back token
    const createdToken = this._UserService.createPasswordResetToken();

    //save user entity with passwordResetToken and passwordExpires to db
    user.passwordResetToken = createdToken.hashedToken;
    user.passwordResetExpires = createdToken.passwordResetExpires;
    await userRepo.save(user);

    //send EMAIL with token and link for password reset
    try {
      //req.protocol = (http/https), req.get('host) = ex. www.mysyite.com
      const resetURL = `${req.protocol}://${req.get('host')}/zaboravili-sifru/${
        createdToken.resetToken
      }`;

      await EmailServiceInst.sendPasswordReset(user.email, resetURL);

      res.status(200).json({
        status: 'success',
        message: 'Token sent to email!',
      });
    } catch (err) {
      console.log(err);
      user.passwordResetToken = null;
      user.passwordResetExpires = null;

      await userRepo.save(user);

      throw new CustomError(
        'There was an Error with sending email, please try again later',
        500
      );
    }
  };

  //===================================================================================================================

  public passwordResetUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { password, passwordConfirm } = req.body;
    const token = crypto
      .createHash('sha256')
      .update(req.params.token)
      .digest('hex');

    if (
      !this._UserService.passwordMatchWithPasswordConfirm(
        password,
        passwordConfirm
      )
    )
      throw new CustomError("password and password confirm don't match", 400);

    const connect = getEnvConnection();
    const userRepo = connect.getRepository(User);
    const user = await userRepo
      .findOneOrFail({ where: { passwordResetToken: token } })
      .catch((err) => {
        throw new CustomError(
          'token for password reset invalid, please request new password reset email',
          401
        );
      });

    if (this._UserService.checkIfPasswordResetTokenExpired(user))
      throw new CustomError(
        'sorry time for password reset has expired, please try again',
        401
      );

    let hashedPassword = await this._UserService.hash(password);
    user.password = hashedPassword;
    await userRepo.save(user);

    this._UserService.createSendJWTToken(user, 200, req, res);
  };

  // ============================================================================================
  /*
		check if provided current password is correct
		update password
		send new jwt cookie 
	*/

  public updatePasswordUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { currentPassword, password, passwordConfirm } = req.body;
    if (!req.user) {
      throw new CustomError('You must be logged in', 401);
    }
    const user = req.user;

    //check if current password is correct
    if (!(await this._UserService.isCorrectPassword(currentPassword, user)))
      throw new CustomError('provided wrong current password', 401);

    const connection = getEnvConnection();
    const userRepo = connection.getRepository(User);

    if (
      !this._UserService.passwordMatchWithPasswordConfirm(
        password,
        passwordConfirm
      )
    )
      throw new CustomError('password and passwordConfirm do not match', 400);

    user.password = password;
    await validateEntity(user);
    user.password = await this._UserService.hash(user.password);

    user.setPasswordChangedAt();

    await userRepo.save(user);

    this._UserService.createSendJWTToken(user, 200, req, res);
  };
}

export default new UserAuthController(
  container.get<UserServiceInterface>(TYPES.UserService)
);
