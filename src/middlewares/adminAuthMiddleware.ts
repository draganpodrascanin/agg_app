//---import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import getEnvConnection from '../utils/get-env-connection';
import { User } from '../entity/User';
import { CookiePayload } from '../interfaces/CookiePayload';
import CustomError from '../utils/CustomError';
import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import AuthenticationService from '../services/auth-service';
import { TYPES } from '../types';
import { AdminServiceInterface } from '../interfaces/services/AdminService';
import container from '../container.config';
import { AdminRepository } from '../repositories/AdminRepository';
import { Admin, AdminRoles } from '../entity/Admin';

declare global {
  namespace Express {
    interface Request {
      admin?: Admin;
    }
  }
}

@injectable()
class AuthMiddleware {
  //middleware checks if you're logged in
  //if you are, sets user to res.locals
  //NOT FOR PROTECTING ROUTES

  private _AdminService;

  constructor(@inject(TYPES.AdminService) adminService: AdminServiceInterface) {
    this._AdminService = adminService;
  }

  public isLoggedIn = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    if (req.cookies.adminjwt) {
      const jwtdecoded = (await promisify(jwt.verify)(
        req.cookies.adminjwt,
        process.env.JWT_SECRET!
      )) as CookiePayload;

      //get user

      const adminRepo = getEnvConnection().getCustomRepository(AdminRepository);

      const admin = await adminRepo.findAdminById(jwtdecoded.id);

      //check if theres user
      if (!admin) return next();

      //check if user changed password after JWT has been issued
      if (this._AdminService.changedPasswordAfter(admin, new Date(Date.now())))
        return next;

      //if everthing is ok add user tu res.locals
      res.locals.admin = admin;
      return next();
    }

    next();
  };

  //middleware for PROTECTING ROUTES
  public protect = async (req: Request, res: Response, next: NextFunction) => {
    // 1) Getting token and check if it's there
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    } else if (req.cookies.adminjwt) {
      token = req.cookies.adminjwt;
    }
    if (!token)
      throw new CustomError(
        'You are not logged in! Please log in to get access.',
        401
      );
    // 2) Verification token
    const decodedjwt = (await promisify(jwt.verify)(
      token,
      process.env.JWT_SECRET!
    )) as CookiePayload;

    const adminRepo = getEnvConnection().getCustomRepository(AdminRepository);

    // 3) Get user and Check if user still exists
    const admin = await adminRepo.findOneOrFail(decodedjwt.id).catch((err) => {
      throw new CustomError(
        'user that belongs to this token no longer exist',
        401
      );
    });

    // 4) Check if user changed password after the token was issued
    if (
      this._AdminService.changedPasswordAfter(admin, new Date(decodedjwt.iat))
    )
      throw new CustomError(
        'User recently changed password! Please log in again.',
        401
      );

    // IF EVERYTHING OK, GRANT ACCESS TO PROTECTED ROUTE
    //set user to req and to locals
    req.admin = admin;
    res.locals.admin = admin;
    next();
  };

  /*
   * middleware check if user with his role have
   * access priviligeses for certain route
   * must be after protect middleware
   */
  public restrictTo = (...roles: AdminRoles[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
      if (!req.admin)
        throw new CustomError(
          'restrict to is only possible on protected routes',
          401
        );

      // roles ['admin','head-admin']. role='admin'
      if (!roles.includes(req.admin.role)) {
        throw new CustomError(
          'You do not have permission to perform this action',
          403
        );
      }

      next();
    };
  };

  //only after protect, set currentUser id to param id so we can use existing controllers
  getMe = (req: Request, res: Response, next: NextFunction) => {
    if (!req.admin)
      throw new CustomError('getMe middleware must be on protected route', 500);

    req.params.id = req.admin.id;

    next();
  };
}

export default new AuthMiddleware(
  container.get<AdminServiceInterface>(TYPES.AdminService)
);
