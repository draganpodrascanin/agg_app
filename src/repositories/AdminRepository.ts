import { EntityRepository, Repository } from 'typeorm';
import { Admin } from '../entity/Admin';

@EntityRepository(Admin)
export class AdminRepository extends Repository<Admin> {
  //----------------------------------------------------------------------------------

  public findAdminById(id: string): Promise<Admin | undefined> {
    return this.createQueryBuilder('admin')
      .where('admin.id = :id', { id })
      .andWhere('admin.active = 1')
      .getOne();
  }

  //----------------------------------------------------------------------------------

  public findAdminByUsername(username: string): Promise<Admin | undefined> {
    return this.createQueryBuilder('admin')
      .where('admin.username = :username', { username })
      .andWhere('admin.active = 1')
      .getOne();
  }
}
