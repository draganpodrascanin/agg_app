it('exists', () => {});
// import { getConnection } from 'typeorm';
// import { User } from '../../entity/User';
// import app from '../../app';
// import request, { Response } from 'supertest';

// //SIGN UP POST /api/v1/users returns 201 expected email,firstName,lastName,password,passwordConfirm

// it('returns error status 400 if password and passwordConfirm dont match', async () => {
//   await request(app)
//     .post('/api/v1/users')
//     .send({
//       email: 'valid@email.com',
//       firstName: 'Valid',
//       lastName: 'Name',
//       password: 'password',
//       phoneNumber: '12345678',
//       passwordConfirm: 'password2',
//     })
//     .expect(400);
// });

// it('returns error status 400 if email is invalid', async () => {
//   await request(app)
//     .post('/api/v1/users')
//     .send({
//       email: 'invalidemail',
//       firstName: 'Valid',
//       lastName: 'Name',
//       password: 'password',
//       phoneNumber: '12345678',
//       passwordConfirm: 'password',
//     })
//     .expect(400);
// });

// it('returns error status 400 if password have less than 8 char.', async () => {
//   await request(app)
//     .post('/api/v1/users')
//     .send({
//       email: 'valid@email.com',
//       firstName: 'Valid',
//       lastName: 'Name',
//       phoneNumber: '12345678',
//       password: 'less',
//       passwordConfirm: 'less',
//     })
//     .expect(400);
// });

// it('returns status 400 if user with the same email already exists', async () => {
//   const connect = getConnection('test');
//   const userRep = connect.getRepository(User);
//   console.log('=============================================================');
//   const newUser = await request(app).post('/api/v1/users').send({
//     email: 'valid@email.com',
//     firstName: 'First',
//     lastName: 'last',
//     password: 'password',
//     passwordConfirm: 'password',
//     phoneNumber: '12345678',
//   });
//   console.log('newUserFirst', newUser.body.data.user);

//   await request(app)
//     .post('/api/v1/users')
//     .send({
//       email: newUser.body.data.user.email,
//       firstName: 'First',
//       lastName: 'last',
//       password: 'password',
//       passwordConfirm: 'password',
//       phoneNumber: '12345678',
//     })
//     .expect(400);

//   userRep.find();
//   console.log('=============================================================');
// });

// it('create new user SIGNUP POST /api/v1/users returns 201', async () => {
//   const res = (await request(app)
//     .post('/api/v1/users')
//     .send({
//       email: 'valid@email.com',
//       firstName: 'First',
//       lastName: 'last',
//       phoneNumber: '012345678',
//       password: 'password',
//       passwordConfirm: 'password',
//     })
//     .expect(201)) as Response;

//   const connect = getConnection('test');
//   const userRep = connect.getRepository(User);
//   const dbUser = await userRep.findOne();

//   expect(dbUser).toBeDefined();
//   expect(res.body.data.user.email).toEqual('valid@email.com');
// });

// //LOGIN POST on /api/v1/users/login exprected email,password

// it('returns 400 if provided with wrong email', async () => {
//   await request(app)
//     .post('/api/v1/users/login')
//     .send({
//       email: 'invalid@email.com',
//       password: 'password',
//     })
//     .expect(400);
// });

// it('returns 400 if provided with wrong password', async () => {
//   const res = await request(app)
//     .post('/api/v1/users')
//     .send({
//       email: 'valid@email.com',
//       firstName: 'First',
//       lastName: 'last',
//       phoneNumber: '012345678',
//       password: 'password',
//       passwordConfirm: 'password',
//     })
//     .expect(201);

//   await request(app)
//     .post('/api/v1/users/login')
//     .send({
//       email: res.body.data.user.email,
//       password: 'password2',
//     })
//     .expect(400);
// });

// it('returns 200 if provided with right email and password', async () => {
//   const res = await request(app).post('/api/v1/users').send({
//     email: 'valid@email.com',
//     firstName: 'First',
//     lastName: 'last',
//     password: 'password',
//     passwordConfirm: 'password',
//     phoneNumber: '012345678',
//   });

//   await request(app)
//     .post('/api/v1/users/login')
//     .send({
//       email: res.body.data.user.email,
//       password: 'password',
//     })
//     .expect(200);
// });

// //LOGOUT POST /api/v1/users/logout

// it('clears the cookie after signing out', async () => {
//   const response = await request(app)
//     .post('/api/v1/users/logout')
//     .send({})
//     .expect(200);
//   //cookie cleared
//   expect(response.get('Set-Cookie')[0]).toEqual(
//     'jwt=loggedout; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly'
//   );
// });

// //update my password PATCH /api/v1/users/:id exprected {currentPassword, password, passwordConfirm}
// it('returns 401 if current password is incorrect', async () => {
//   const response = await request(app)
//     .post('/api/v1/users')
//     .send({
//       email: 'valid@email.com',
//       firstName: 'First',
//       lastName: 'last',
//       password: 'password',
//       passwordConfirm: 'password',
//       phoneNumber: '012345678',
//     })
//     .expect(201);

//   const user = response.body.data.user;
//   const cookie = response.get('Set-Cookie')[0];

//   await request(app)
//     .patch(`/api/v1/users/updatePassword`)
//     .send({
//       currentPassword: 'not current password',
//       password: 'password2',
//       passwordConfirm: 'password2',
//     })
//     .set('Cookie', cookie)
//     .expect(401);
// });

// it('returns 400 if password and passwordConfirm do not match', async () => {
//   const response = await request(app)
//     .post('/api/v1/users')
//     .send({
//       email: 'valid@email.com',
//       firstName: 'First',
//       lastName: 'last',
//       password: 'password',
//       passwordConfirm: 'password',
//       phoneNumber: '012345678',
//     })
//     .expect(201);

//   const user = response.body.data.user;
//   const cookie = response.get('Set-Cookie')[0];

//   await request(app)
//     .patch(`/api/v1/users/updatePassword`)
//     .send({
//       currentPassword: 'password',
//       password: 'password2',
//       passwordConfirm: 'password3',
//     })
//     .set('Cookie', cookie)
//     .expect(400);
// });

// it('returns 200 everything provided, and password is changed', async () => {
//   const response = await request(app)
//     .post('/api/v1/users')
//     .send({
//       email: 'valid@email.com',
//       firstName: 'First',
//       lastName: 'last',
//       password: 'password',
//       passwordConfirm: 'password',
//       phoneNumber: '012345678',
//     })
//     .expect(201);

//   const user = response.body.data.user;
//   const cookie = response.get('Set-Cookie')[0];
//   const timeBeforePasswordUpdate = new Date(Date.now() - 1000);

//   await request(app)
//     .patch(`/api/v1/users/updatePassword`)
//     .send({
//       currentPassword: 'password',
//       password: 'password2',
//       passwordConfirm: 'password2',
//     })
//     .set('Cookie', cookie)
//     .expect(200);

//   const res = await request(app)
//     .post('/api/v1/users/login')
//     .send({
//       email: user.email,
//       password: 'password2',
//     })
//     .expect(200);

//   expect(res.body.data.user.passwordChangedAt).toBeDefined();

//   //check if passwordChangedAt is correct date
//   const setCorrectTimeToPasswordChangedAt =
//     new Date(res.body.data.user.passwordChangedAt) > timeBeforePasswordUpdate;
//   expect(setCorrectTimeToPasswordChangedAt).toBe(true);

//   expect(res.get('Set-Cookie')).toBeDefined();
// });
