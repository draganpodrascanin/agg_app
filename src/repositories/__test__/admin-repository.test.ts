it('exists', () => {});
// import { Admin } from '../../entity/Admin';
// import getEnvConnection from '../../utils/get-env-connection';
// import { AdminRepository } from '../AdminRepository';

// const createUserInDB = async () => {
//   const repo = getEnvConnection().getRepository(Admin);
//   const admin = repo.create({
//     username: 'valid',
//     firstName: 'first',
//     lastName: 'Last',
//     email: 'valid2@email.com',
//     password: '12345678',
//     phoneNumber: '38765701308',
//   });
//   await repo.save(admin);

//   return admin;
// };

// it('findUserByEmail finds admin by username', async () => {
//   const admin = await createUserInDB();
//   // vvvvv
//   const adminRepo = getEnvConnection().getCustomRepository(AdminRepository);
//   const dbUser = await adminRepo.findAdminByUsername(admin.username);

//   expect(dbUser).toBeDefined();
// });

// it('findUserByEmail finds admin by id', async () => {
//   const admin = await createUserInDB();
//   // vvvvv
//   const adminRepo = getEnvConnection().getCustomRepository(AdminRepository);
//   const dbUser = await adminRepo.findAdminById(admin.id);

//   expect(dbUser).toBeDefined();
// });
