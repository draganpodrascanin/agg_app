// You can make custom repositories like this
import { EntityRepository, InsertResult, Repository } from 'typeorm';
import { User } from '../entity/User';
import UserInterface from '../interfaces/entities/User';
import CustomError from '../utils/CustomError';
import AuthenticationService from '../services/auth-service';
import validateEntity from '../utils/validateEntity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  //services cannot be injected becouse TYPE_ORM instantiate this class
  private _AuthenticationService: AuthenticationService = new AuthenticationService();

  //hash password, create user, insert to db
  public async createNewUser(user: UserInterface): Promise<User> {
    const { email, firstName, lastName, phoneNumber } = user;

    if (!email || !user.password || !firstName || !lastName || !phoneNumber) {
      throw new CustomError(
        'email, first name, last name, password and phone number are required (not optional)',
        400
      );
    }

    const newUser = new User();
    newUser.password = user.password;
    newUser.email = email;
    newUser.firstName = firstName;
    newUser.lastName = lastName;
    newUser.phoneNumber = phoneNumber;

    await validateEntity(newUser);

    newUser.password = await this._AuthenticationService.hash(user.password);

    return this.save(newUser);
  }

  //----------------------------------------------------------------------------------

  public findUserById(id: string): Promise<User | undefined> {
    return this.createQueryBuilder('user')
      .where('user.id = :id', { id })
      .andWhere('user.active = 1')
      .getOne();
  }

  //----------------------------------------------------------------------------------

  public findUserByEmail(email: string): Promise<User | undefined> {
    return this.createQueryBuilder('user')
      .where('user.email = :email', { email })
      .andWhere('user.active = 1')
      .getOne();
  }

  //----------------------------------------------------------------------------------

  public async findUserIfPasswordIsValid(
    email: string,
    password: string
  ): Promise<User> {
    const user = await this.findUserByEmail(email);

    if (!user) {
      throw new CustomError('User does not exisst', 400);
    }

    if (
      !(await this._AuthenticationService.isCorrectPassword(password, user))
    ) {
      throw new CustomError('Wrong password', 400);
    }

    return user;
  }

  //----------------------------------------------------------------------------------

  // findByName(firstName: string, lastName: string) {
  // 	return this.createQueryBuilder('user')
  // 		.where('user.firstName = :firstName', { firstName })
  // 		.andWhere('user.lastName = :lastName', { lastName })
  // 		.getMany();
  // }
}
