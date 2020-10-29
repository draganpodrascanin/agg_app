import { EntityRepository, InsertResult, Repository } from 'typeorm';
import { User } from '../entity/User';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
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

  public findUserAndPopulate(id: string): Promise<User | undefined> {
    return this.findOne({ where: { id }, relations: ['cars'] });
  }

  //----------------------------------------------------------------------------------
  // findByName(firstName: string, lastName: string) {
  // 	return this.createQueryBuilder('user')
  // 		.where('user.firstName = :firstName', { firstName })
  // 		.andWhere('user.lastName = :lastName', { lastName })
  // 		.getMany();
  // }
}
