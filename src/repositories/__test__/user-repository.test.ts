import { User } from '../../entity/User';
import getEnvConnection from '../../utils/get-env-connection';
import { UserRepository } from '../UserRepository';

const createUserInDB = async () => {
  const repo = getEnvConnection().getRepository(User);
  const user = repo.create({
    email: 'valid@email.com',
    firstName: 'First',
    lastName: 'Last',
    password: '12345678',
    phoneNumber: 38765701308,
  });
  await repo.save(user);

  return user;
};

it(`createNewUser throws error 400 if provided with bad email`, async () => {
  const userRepo = getEnvConnection().getCustomRepository(UserRepository);

  try {
    const newUser = await userRepo.createNewUser({
      email: 'bademail',
      firstName: 'First',
      lastName: 'Last',
      password: '12345678',
      phoneNumber: 38765701308,
    });

    if (newUser) {
      fail('user persisted to db with bad email');
    }
  } catch (e) {
    expect(e.statusCode).toEqual(400);
  }
});

it('throws error 400 if password length is below 8char', async () => {
  const userRepo = getEnvConnection().getCustomRepository(UserRepository);

  try {
    await userRepo.createNewUser({
      email: 'valid@email.com',
      firstName: 'First',
      lastName: 'Last',
      password: '1234567',
      phoneNumber: 38765701308,
    });

    fail('validation needed to fail');
  } catch (e) {
    expect(e.statusCode).toEqual(400);
  }
});

it(`createNewUser creates new User in DB and returns it`, async () => {
  const userRepo = getEnvConnection().getCustomRepository(UserRepository);

  try {
    const newUser = await userRepo.createNewUser({
      email: 'valid@email.com',
      firstName: 'First',
      lastName: 'Last',
      password: '12345678',
      phoneNumber: 38765701308,
    });

    expect(newUser).toBeDefined();
    expect(newUser.email).toBe('valid@email.com');
    expect(newUser.firstName).toBe('First');

    const repo = getEnvConnection().getRepository(User);
    const dbUser = await repo.findOne(newUser.id);

    expect(dbUser).toBeDefined();
    expect(dbUser?.email).toEqual(newUser.email);
  } catch (e) {
    console.log(e);
    fail(e);
  }
});

it('findUserByEmail finds user by email', async () => {
  const user = await createUserInDB();
  // vvvvv
  const userRepo = getEnvConnection().getCustomRepository(UserRepository);
  const dbUser = await userRepo.findUserByEmail(user.email);

  expect(dbUser).toBeDefined();
});

it("findUserIfPasswordIsValid throws error 400 if email doesn't exists", async () => {
  const userRepo = getEnvConnection().getCustomRepository(UserRepository);
  try {
    await userRepo.findUserIfPasswordIsValid('email@none.com', 'password');
    fail('needs to return error');
  } catch (e) {
    expect(e.statusCode).toEqual(400);
  }
});

it('findUserIfPasswordIsValid throws error 400 if password is invalid', async () => {
  const userRepo = getEnvConnection().getCustomRepository(UserRepository);
  try {
    const user = await userRepo.createNewUser({
      email: 'valid@email.com',
      firstName: 'First',
      lastName: 'Last',
      password: 'password',
      phoneNumber: 38765701308,
    });

    await userRepo.findUserIfPasswordIsValid(user.email, 'invalid-password');
    fail('needs to return error');
  } catch (e) {
    expect(e.statusCode).toEqual(400);
  }
});
