import { Request, Response, NextFunction } from 'express';
import CustomError from '../utils/CustomError';
import getEnvConnection from '../utils/get-env-connection';
import crypto from 'crypto';
import validateEntity from '../utils/validateEntity';
import { injectable, inject } from 'inversify';
import { TYPES } from '../types';
import container from '../container.config';
import { Email } from '../interfaces/services/Email';
import { AdminServiceInterface } from '../interfaces/services/AdminService';
import { Admin, AdminRoles } from '../entity/Admin';
import { AdminRepository } from '../repositories/AdminRepository';
import { Not } from 'typeorm';
import { phone } from 'faker';
import { throws } from 'assert';
import handlerFactory from './handlerFactory';
import { Entities } from '../entity/Entities';
import EmailService from '../services/email-service';

//extending Request object to take user if provided by middleware
declare global {
  namespace Express {
    interface Request {
      admin?: Admin;
    }
  }
}

@injectable()
class AdminAuthController {
  private _AdminAuthenticationService;

  constructor(@inject(TYPES.AdminService) Auth: AdminServiceInterface) {
    this._AdminAuthenticationService = Auth;
  }

  //===================================================================================================================

  public loginAdmin = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { username, password } = req.body;

    let user = await this._AdminAuthenticationService.findAdminIfPasswordIsValid(
      username,
      password
    );

    this._AdminAuthenticationService.createSendJWTToken(user, 200, req, res);
  };

  //===================================================================================================================
  //rewrite jwt cookie, effectivly logging user out
  public logoutAdmin = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    res.cookie('adminjwt', 'loggedout', {
      expires: new Date(0),
      httpOnly: true,
    });
    res.status(200).json({ status: 'success' });
  };

  //===================================================================================================================

  public forgotPassword = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { username } = req.body;
    const emailService = new EmailService();

    const adminRepo = getEnvConnection().getCustomRepository(AdminRepository);

    //find user with provided email
    const admin = await adminRepo.findAdminByUsername(username);
    if (!admin)
      throw new CustomError('Admin with this username not found', 404);

    //create passwordResetToken and passwordResetExpires on entity, get back token
    const createdToken = this._AdminAuthenticationService.createPasswordResetToken();

    //save user entity with passwordResetToken and passwordExpires to db
    admin.passwordResetToken = createdToken.hashedToken;
    admin.passwordResetExpires = createdToken.passwordResetExpires;

    await adminRepo.save(admin);

    //send EMAIL with token and link for password reset
    try {
      //req.protocol = (http/https), req.get('host) = ex. www.mysyite.com
      const resetURL = `${req.protocol}://${req.get('host')}/resetPassword/${
        createdToken.resetToken
      }`;

      await emailService.sendPasswordReset(admin.email, resetURL);

      res.status(200).json({
        status: 'success',
        message: 'Token sent to email!',
      });
    } catch (err) {
      admin.passwordResetToken = null;
      admin.passwordResetExpires = null;

      await adminRepo.save(admin);

      throw new CustomError(
        'There was an Error with sending email, please try again later',
        500
      );
    }
  };

  //===================================================================================================================

  public passwordReset = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { password, passwordConfirm } = req.body;
    const token = crypto
      .createHash('sha256')
      .update(req.params.token)
      .digest('hex');
    //---
    if (
      !this._AdminAuthenticationService.passwordMatchWithPasswordConfirm(
        password,
        passwordConfirm
      )
    ) {
      throw new CustomError("password and password confirm don't match", 400);
    }
    //---
    const adminRepo = getEnvConnection().getCustomRepository(AdminRepository);

    const admin = await adminRepo
      .findOneOrFail({ where: { passwordResetToken: token } })
      .catch((err) => {
        throw new CustomError(
          'token for password reset invalid, please request new password reset email',
          401
        );
      });

    //---
    if (
      this._AdminAuthenticationService.checkIfPasswordResetTokenExpired(admin)
    ) {
      throw new CustomError(
        'sorry time for password reset has expired, please try again',
        401
      );
    }
    //--- hash password and save admin
    let hashedPassword = await this._AdminAuthenticationService.hash(password);
    admin.password = hashedPassword;
    admin.passwordChangedAt = new Date(Date.now() - 1000);
    await adminRepo.save(admin);
    //---
    this._AdminAuthenticationService.createSendJWTToken(admin, 200, req, res);
  };

  // ============================================================================================
  /*
		check if provided current password is correct
		update password
		send new jwt cookie 
	*/

  public updatePassword = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { currentPassword, password, passwordConfirm } = req.body;
    if (!req.admin) {
      throw new CustomError('You must be logged in', 401);
    }

    const admin = req.admin;

    //check if current password is correct
    if (
      !(await this._AdminAuthenticationService.isCorrectPassword(
        currentPassword,
        admin
      ))
    )
      throw new CustomError('provided wrong current password', 401);

    const adminRepo = getEnvConnection().getCustomRepository(AdminRepository);

    if (
      !this._AdminAuthenticationService.passwordMatchWithPasswordConfirm(
        password,
        passwordConfirm
      )
    )
      throw new CustomError('password and passwordConfirm do not match', 400);

    admin.password = password;
    await validateEntity(admin);
    admin.password = await this._AdminAuthenticationService.hash(
      admin.password
    );

    admin.setPasswordChangedAt();

    await adminRepo.save(admin);

    this._AdminAuthenticationService.createSendJWTToken(admin, 200, req, res);
  };

  public getCurrentAdmin = (req: Request, res: Response) => {
    const admin = req.admin;

    if (!admin) {
      res.status(400).json({
        status: 'failed',
        message: 'you are not logged in',
      });
    }

    const response: any = { ...admin, password: undefined };

    res.status(200).json({
      status: 'success',
      data: response,
    });
  };

  public createAdmin = async (req: Request, res: Response) => {
    const {
      email,
      password,
      passwordConfirm,
      firstName,
      lastName,
      phoneNumber,
      username,
    } = req.body;

    if (
      !this._AdminAuthenticationService.passwordMatchWithPasswordConfirm(
        password,
        passwordConfirm
      )
    ) {
      throw new CustomError(
        'password and password confirm does not match',
        400
      );
    }

    const newUser = await this._AdminAuthenticationService.createNewAdmin({
      email,
      password,
      username,
      firstName,
      lastName,
      phoneNumber,
    });

    res.status(201).json({
      status: 'success',
      data: newUser,
    });
  };

  public getAll = async (req: Request, res: Response) => {
    if (!req.admin) throw new CustomError('Need to be logged in', 401);
    const repo = getEnvConnection().getCustomRepository(AdminRepository);

    let filter = {};
    if (req.admin.role !== AdminRoles.superAdmin)
      filter = { where: { role: Not(AdminRoles.superAdmin) } };

    const admins = await repo.find(filter);

    res.status(200).json({
      status: 'success',
      data: admins,
    });
  };

  public updateOne = async (req: Request, res: Response) => {
    const id = req.params.id;
    const {
      firstName,
      lastName,
      phoneNumber,
      email,
      username,
      role,
    } = req.body;
    const repo = getEnvConnection().getCustomRepository(AdminRepository);
    const admin = await repo.findOne(id);

    if (!admin) throw new CustomError('Admin with that ID not found', 404);

    if (firstName) admin.firstName = firstName;
    if (lastName) admin.lastName = lastName;
    if (phoneNumber) admin.phoneNumber = phoneNumber;
    if (email) admin.email = email;
    if (username) admin.username = username;
    if (role) admin.role = role;

    await repo.save(admin);

    res.status(200).json({
      status: 'success',
      data: admin,
    });
  };

  public updateAdminPassword = async (req: Request, res: Response) => {
    const id = req.params.id;
    const { password, passwordConfirm } = req.body;
    const repo = getEnvConnection().getCustomRepository(AdminRepository);

    //CHECK IF PASSWORD AND PASSWORD_CONFIRM MATCH
    if (
      !this._AdminAuthenticationService.passwordMatchWithPasswordConfirm(
        password,
        passwordConfirm
      )
    )
      throw new CustomError('password and passwordConfirm does not match', 400);

    //FIND ADMIN
    const admin = await repo.findOne(id);
    if (!admin) throw new CustomError('Admin with provided ID not found', 404);

    //SET NEW PASSWORD AND HASH IT
    admin.password = password;
    await validateEntity(admin);
    admin.password = await this._AdminAuthenticationService.hash(
      admin.password
    );

    admin.setPasswordChangedAt();

    await repo.save(admin);

    res.status(200).json({
      status: 'success',
      data: admin,
    });
  };

  public deleteOne = handlerFactory.deleteOne(Entities.Admin);
}

export default new AdminAuthController(
  container.get<AdminServiceInterface>(TYPES.AdminService)
);
