it('exists', () => {});
// import { User } from '../../entity/User';
// import getEnvConnection from '../../utils/get-env-connection';
// import { UserRepository } from '../UserRepository';

// const createUserInDB = async () => {
//   const repo = getEnvConnection().getRepository(User);
//   const user = repo.create({
//     email: 'valid2@email.com',
//     firstName: 'First',
//     lastName: 'Last',
//     password: '12345678',
//     phoneNumber: '38765701308',
//   });
//   await repo.save(user);

//   return user;
// };

// it('findUserByEmail finds user by email', async () => {
//   const user = await createUserInDB();
//   // vvvvv
//   const userRepo = getEnvConnection().getCustomRepository(UserRepository);
//   const dbUser = await userRepo.findUserByEmail(user.email);

//   expect(dbUser).toBeDefined();
// });

// it('findUserByEmail finds user by id', async () => {
//   const user = await createUserInDB();
//   // vvvvv
//   const userRepo = getEnvConnection().getCustomRepository(UserRepository);
//   const dbUser = await userRepo.findUserById(user.id);

//   expect(dbUser).toBeDefined();
// });
