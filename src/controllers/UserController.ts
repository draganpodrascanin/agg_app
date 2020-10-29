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

/*
 *Example of handler factory in action
 */
@injectable()
class UserController {
  private _UserService;

  constructor(@inject(TYPES.UserService) userService: UserServiceInterface) {
    this._UserService = userService;
  }

  public getAll = handlerFactory.getAll(Entities.User);
  public updateOne = handlerFactory.updateOne(Entities.User, [
    'email',
    'firstName',
    'lastName',
    'phoneNumber',
  ]);
  public deleteOne = handlerFactory.deletOne(Entities.User);

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
