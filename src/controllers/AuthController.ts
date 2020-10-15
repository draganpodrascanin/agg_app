import { User } from '../entity/User';
import { Request, Response, NextFunction } from 'express';
import CustomError from '../utils/CustomError';
import createSendJWTToken from '../utils/create-send-jwt-cookie';
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

//extending Request object to take user if provided by middleware
declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}
@injectable()
class AuthController {
  private _AuthenticationService;
  private _EmailService;

  constructor(
    @inject(TYPES.Authentication) Auth: Authentication,
    @inject(TYPES.Email) Email: Email
  ) {
    this._AuthenticationService = Auth;
    this._EmailService = Email;
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
      !this._AuthenticationService.passwordMatchWithPasswordConfirm(
        password,
        passwordConfirm
      )
    )
      throw new CustomError(
        'password and password confirm does not match',
        400
      );

    const userRepository = getEnvConnection().getCustomRepository(
      UserRepository
    );

    const newUser = await userRepository.createNewUser({
      email,
      password,
      firstName,
      lastName,
      phoneNumber,
    });

    this._AuthenticationService.createSendJWTToken(newUser, 201, req, res);
  };

  //===================================================================================================================

  public loginUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { email, password } = req.body;
    const userRepository = getEnvConnection().getCustomRepository(
      UserRepository
    );

    /**
     * finds user if provided with valid password and email
     * if not throws an ERROR 400
     */
    let user = await userRepository.findUserIfPasswordIsValid(email, password);

    this._AuthenticationService.createSendJWTToken(user, 200, req, res);
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
    const connect = getEnvConnection();
    const userRepo = connect.getRepository(User);

    //find user with provided email
    const user = await userRepo.findOne({ where: { email } });
    if (!user) throw new CustomError('User with this email not found', 404);

    //create passwordResetToken and passwordResetExpires on entity, get back token
    const resetToken = user.createPasswordResetToken();
    console.log(user);
    //save user entity with passwordResetToken and passwordExpires to db
    await userRepo.save(user);

    //send EMAIL with token and link for password reset
    try {
      //req.protocol = (http/https), req.get('host) = ex. www.mysyite.com
      const resetURL = `${req.protocol}://${req.get(
        'host'
      )}/resetPassword/${resetToken}`;

      // await new PasswordResetEmail(user, resetURL).sendPasswordReset();
      await this._EmailService.sendPasswordReset(user.email, resetURL);

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

    if (!User.passwordMatchWithPasswordConfirm(password, passwordConfirm))
      throw new CustomError(
        "password and password confirmation don't match",
        400
      );

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

    if (user.checkIfPasswordResetTokenExpired())
      throw new CustomError(
        'sorry time for password has expired, please try again',
        401
      );

    //change password, hash it, and save user to db
    user.password = password;
    await user.hashPassword();
    await userRepo.save(user);

    createSendJWTToken(user, 200, req, res);
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
    if (!(await user.isCorrectPassword(currentPassword)))
      throw new CustomError('provided wrong current password', 401);

    const connection = getEnvConnection();
    const userRepo = connection.getRepository(User);

    if (!User.passwordMatchWithPasswordConfirm(password, passwordConfirm))
      throw new CustomError('password and passwordConfirm do not match', 400);

    user.password = password;

    await validateEntity(user);
    await user.hashPassword();
    user.setPasswordChangedAt();

    await userRepo.save(user);

    createSendJWTToken(user, 200, req, res);
  };
}

//i know.., but it's simpler for know to just put it
//implement invesify in the future
export default new AuthController(
  container.get<Authentication>(TYPES.Authentication),
  container.get<Email>(TYPES.Email)
);
