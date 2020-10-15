import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import getEnvConnection from '../utils/get-env-connection';
import { User } from '../entity/User';
import { CookiePayload } from '../interfaces/CookiePayload';
import CustomError from '../utils/CustomError';

class AuthMiddleware {
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
      if (user.changedPasswordAfter(new Date(jwtdecoded.iat))) return next;

      //if everthing is ok add user tu res.locals
      res.locals.user = user;
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

    const connect = getEnvConnection();
    const userRepo = connect.getRepository(User);

    // 3) Get user and Check if user still exists
    const user = await userRepo.findOneOrFail(decodedjwt.id).catch((err) => {
      throw new CustomError(
        'user that belongs to this token no longer exist',
        401
      );
    });

    // 4) Check if user changed password after the token was issued
    if (user.changedPasswordAfter(new Date(decodedjwt.iat)))
      throw new CustomError(
        'User recently changed password! Please log in again.',
        401
      );

    // IF EVERYTHING OK, GRANT ACCESS TO PROTECTED ROUTE
    //set user to req and to locals
    req.user = user;
    res.locals.user = user;
    next();
  };

  /*
   * middleware check if user with his role have
   * access priviligeses for certain route
   * must be after protect middleware
   */
  // public restrictTo = (...roles: UserRole[]) => {
  // 	return (req: Request, res: Response, next: NextFunction) => {
  // 		if (!req.user)
  // 			throw new CustomError(
  // 				'restrict to is only possible on protected routes',
  // 				401
  // 			);

  // 		// roles ['admin','head-admin']. role='user'
  // 		if (!roles.includes(req.user.role)) {
  // 			throw new CustomError(
  // 				'You do not have permission to perform this action',
  // 				403
  // 			);
  // 		}

  // 		next();
  // 	};
  // };

  //only after protect, set currentUser id to param id so we can use existing controllers
  getMe = (req: Request, res: Response, next: NextFunction) => {
    if (!req.user)
      throw new CustomError('getMe middleware must be on protected route', 500);

    req.params.id = req.user.id;

    next();
  };
}

export default new AuthMiddleware();
