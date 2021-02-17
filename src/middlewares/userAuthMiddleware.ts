import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import getEnvConnection from '../utils/get-env-connection';
import { User } from '../entity/User';
import { CookiePayload } from '../interfaces/CookiePayload';
import CustomError from '../utils/CustomError';
import { UserServiceInterface } from '../interfaces/services/UserService';
import { TYPES } from '../types';
import { inject, injectable } from 'inversify';
import container from '../container.config';

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}

@injectable()
class AuthMiddleware {
  private _UserService;
  constructor(@inject(TYPES.UserService) userService: UserServiceInterface) {
    this._UserService = userService;
  }

  //middleware checks if you're logged in
  //if you are, sets user to res.locals
  //NOT FOR PROTECTING ROUTES
  public isLoggedIn = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    if (req.cookies.jwt) {
      const jwtdecoded = (await promisify(jwt.verify)(
        req.cookies.jwt,
        process.env.JWT_SECRET!
      )) as CookiePayload;

      //get user
      const connect = getEnvConnection();
      const userRepo = connect.getRepository(User);
      const user = await userRepo.findOne(jwtdecoded.id);

      //check if theres user
      if (!user) return next();

      //check if user changed password after JWT has been issued
      if (
        this._UserService.changedPasswordAfter(user, new Date(jwtdecoded.iat))
      )
        return next;

      //if everthing is ok add user tu res.locals
      const resUser = { ...user, password: undefined };
      req.user = user;
      res.locals.user = resUser;

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
    } else if (req.cookies.jwt) {
      token = req.cookies.jwt;
    }
    if (!token) return res.status(401).redirect('/userlogin');

    // 2) Verification token
    const decodedjwt = (await promisify(jwt.verify)(
      token,
      process.env.JWT_SECRET!
    )) as CookiePayload;

    const connect = getEnvConnection();
    const userRepo = connect.getRepository(User);

    // 3) Get user and Check if user still exists
    const user = await userRepo.findOne(decodedjwt.id);

    if (!user) return res.status(401).redirect('/userlogin');

    // 4) Check if user changed password after the token was issued
    if (this._UserService.changedPasswordAfter(user, new Date(decodedjwt.iat)))
      return res.status(401).redirect('/userlogin');

    // IF EVERYTHING OK, GRANT ACCESS TO PROTECTED ROUTE
    //set user to req and to locals
    req.user = user;
    res.locals.user = user;

    next();
  };

  //only after protect, or isLoggedIn middleware set currentUser id to param id so we can use existing controllers
  getMe = (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) throw new CustomError('not logged in', 400);

    req.params.id = req.user.id;

    next();
  };
}

export default new AuthMiddleware(
  container.get<UserServiceInterface>(TYPES.UserService)
);
