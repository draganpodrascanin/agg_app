import handlerFactory from './handlerFactory';
import { Entities } from '../entity/Entities';
import { Request, Response } from 'express';
import container from '../container.config';
import { UserServiceInterface } from '../interfaces/services/UserService';
import { TYPES } from '../types';
import { inject, injectable } from 'inversify';
import getEnvConnection from '../utils/get-env-connection';
import { User } from '../entity/User';
import { UserRepository } from '../repositories/UserRepository';
import CustomError from '../utils/CustomError';
import { Like } from 'typeorm';
import { ETIME } from 'constants';

/*
 *Example of handler factory in action
 */
@injectable()
class UserController {
  private _UserService;

  constructor(@inject(TYPES.UserService) userService: UserServiceInterface) {
    this._UserService = userService;
  }

  public updateOne = handlerFactory.updateOne(Entities.User, [
    'email',
    'firstName',
    'lastName',
    'phoneNumber',
  ]);
  public deleteOne = handlerFactory.deleteOne(Entities.User);
  public getCount = handlerFactory.count(Entities.User);

  public createUser = async (req: Request, res: Response) => {
    const { firstName, lastName, password, passwordConfirm, email } = req.body;
    let phoneNumber: string = req.body.phoneNumber;

    if (phoneNumber.startsWith('0')) {
      let arrPhone = phoneNumber.split('0');
      phoneNumber = `+387${arrPhone[1]}`;
    }

    if (
      !this._UserService.passwordMatchWithPasswordConfirm(
        password,
        passwordConfirm
      )
    ) {
      throw new CustomError("Passwords don't match", 400);
    }

    const user: any = await this._UserService.createNewUser({
      email,
      firstName,
      lastName,
      password,
      phoneNumber,
    });
    user.password = undefined;

    res.status(201).json({
      status: 'success',
      data: user,
    });
  };

  /**
   * accept query strings
   *
   * @param page
   * @param limit
   * @param search
   */

  public getMany = async (req: Request, res: Response) => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 12;
    const offset = (page - 1) * limit;
    const search = req.query.search;
    const repo = getEnvConnection().getCustomRepository(UserRepository);

    let query = repo.createQueryBuilder(Entities.User);

    if (search) {
      query = query
        .where(
          `CONCAT(${Entities.User}.firstName, ' ', ${Entities.User}.lastName) LIKE '%${search}%'`
        )
        .orWhere(`${Entities.User}.phoneNumber LIKE '%${search}%'`);
    }

    const response = await query
      .leftJoinAndSelect(`${Entities.User}.cars`, `${Entities.Car}`)
      .skip(offset)
      .take(limit)
      .orderBy(`${Entities.User}.createdAt`, 'DESC')
      .getMany();

    const users = response.map((user) => {
      return {
        ...user,
        password: undefined,
        passwordResetToken: undefined,
        passwordResetExpires: undefined,
        passwordChangedAt: undefined,
      };
    });

    const count = repo.createQueryBuilder(Entities.User);

    if (search) {
      count
        .where(
          `CONCAT(${Entities.User}.firstName, ' ', ${Entities.User}.lastName) LIKE '%${search}%'`
        )
        .orWhere(`${Entities.User}.phoneNumber LIKE '%${search}%'`);
    }
    const resCount = await count.getCount();

    res.status(200).json({
      status: 'success',
      count: response.length,
      countAllThatMatch: resCount,
      data: users,
    });
  };

  public createOne = async (req: Request, res: Response) => {
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

    const data = { ...newUser, password: undefined };

    res.status(200).json({
      status: 'success',
      data,
    });
  };

  public getOne = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!id) {
      throw new CustomError('need to provide user id in params', 400);
    }

    const userRepo = getEnvConnection().getCustomRepository(UserRepository);
    const user = await userRepo.findUserAndPopulate(id);

    if (!user) {
      throw new CustomError('no user with provided id', 404);
    }

    res.status(200).json({
      status: 'success',
      data: user,
    });
  };

  public resetUsersPassword = async (req: Request, res: Response) => {
    const { id } = req.body;
    const userRepo = getEnvConnection().getCustomRepository(UserRepository);
    const user = await userRepo.findUserById(id);

    if (!user) {
      throw new CustomError('No user with that id', 400);
    }

    const resUser = await this._UserService.resetUsersPassword(user);

    const resData = { ...resUser, password: undefined };

    res.status(200).json({
      status: 'success',
      data: resData,
    });
  };
}

export default new UserController(
  container.get<UserServiceInterface>(TYPES.UserService)
);
