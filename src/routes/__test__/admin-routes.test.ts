it('exists', () => {});
// import { getConnection } from 'typeorm';
// import { Admin } from '../../entity/Admin';
// import app from '../../app';
// import request, { Response } from 'supertest';

//SIGN UP POST /api/v1/admin returns 201 expected email,firstName,lastName,password,passwordConfirm

// it('returns error status 400 if password and passwordConfirm dont match', async () => {
//   await request(app)
//     .post('/api/v1/admin')
//     .send({
//       email: 'valid@email.com',
//       firstName: 'Valid',
//       lastName: 'Name',
//       username: 'username',
//       password: 'password',
//       phoneNumber: '12345678',
//       passwordConfirm: 'password2',
//     })
//     .expect(400);
// });

// it('returns error status 400 if email is invalid', async () => {
//   await request(app)
//     .post('/api/v1/admin')
//     .send({
//       email: 'invalidemail',
//       firstName: 'Valid',
//       lastName: 'Name',
//       username: 'username',
//       password: 'password',
//       phoneNumber: '12345678',
//       passwordConfirm: 'password',
//     })
//     .expect(400);
// });

// it('returns error status 400 if password have less than 8 char.', async () => {
//   await request(app)
//     .post('/api/v1/admin')
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

// it('returns status 400 if admin with the same email already exists', async () => {
//   const connect = getConnection('test');
//   const adminRep = connect.getRepository(Admin);
//   console.log('1=============================================================');
//   const newAdmin = adminRep.create({
//     email: 'valid@email.com',
//     firstName: 'First',
//     lastName: 'last',
//     username: 'username',
//     password: 'password',
//     phoneNumber: '12345678',
//   });

//   const res = await adminRep.save(newAdmin);

//   await request(app)
//     .post('/api/v1/admin')
//     .send({
//       email: res.email,
//       firstName: 'First',
//       lastName: 'last',
//       username: 'username2',
//       password: 'password',
//       passwordConfirm: 'password',
//       phoneNumber: '12345678',
//     })
//     .expect(400);
//   console.log('1=============================================================');
// });

// it('returns status 400 if admin with the same username already exists', async () => {
//   const connect = getConnection('test');

//   const adminRep = connect.getRepository(Admin);
//   console.log('2=============================================================');
//   const newAdmin = adminRep.create({
//     email: 'valid@email.com',
//     firstName: 'First',
//     lastName: 'last',
//     username: 'username',
//     password: 'password',
//     phoneNumber: '12345678',
//   });

//   const res = await adminRep.save(newAdmin);

//   await request(app)
//     .post('/api/v1/admin')
//     .send({
//       email: 'valid2@email.com',
//       firstName: 'First',
//       lastName: 'last',
//       username: res.username,
//       password: 'password',
//       passwordConfirm: 'password',
//       phoneNumber: '12345678',
//     })
//     .expect(400);
//   console.log('2=============================================================');
// });

// it('create new user SIGNUP POST /api/v1/admin returns 201', async () => {
//   const res = (await request(app)
//     .post('/api/v1/admin')
//     .send({
//       email: 'valid@email.com',
//       firstName: 'First',
//       lastName: 'last',
//       username: 'username',
//       phoneNumber: '012345678',
//       password: 'password',
//       passwordConfirm: 'password',
//     })
//     .expect(201)) as Response;

//   const connect = getConnection('test');
//   const adminRep = connect.getRepository(Admin);
//   const dbAdmin = await adminRep.findOne();

//   expect(dbAdmin).toBeDefined();
//   expect(res.body.data.user.email).toEqual('valid@email.com');
// });

// //LOGIN POST on /api/v1/admin/login exprected email,password

// it('returns 400 if provided with wrong email', async () => {
//   await request(app)
//     .post('/api/v1/admin/login')
//     .send({
//       email: 'invalid@email.com',
//       password: 'password',
//     })
//     .expect(400);
// });

// it('returns 400 if provided with wrong password', async () => {
//   const res = await request(app)
//     .post('/api/v1/admin')
//     .send({
//       email: 'valid@email.com',
//       firstName: 'First',
//       lastName: 'last',
//       username: 'username',
//       phoneNumber: '012345678',
//       password: 'password',
//       passwordConfirm: 'password',
//     })
//     .expect(201);

//   await request(app)
//     .post('/api/v1/admin/login')
//     .send({
//       email: res.body.data.user.email,
//       password: 'password2',
//     })
//     .expect(400);
// });

// it('returns 200 if provided with right email and password', async () => {
//   const res = await request(app).post('/api/v1/admin').send({
//     email: 'valid@email.com',
//     firstName: 'First',
//     lastName: 'last',
//     username: 'username',
//     password: 'password',
//     passwordConfirm: 'password',
//     phoneNumber: '012345678',
//   });

//   await request(app)
//     .post('/api/v1/admin/login')
//     .send({
//       username: res.body.data.user.username,
//       password: 'password',
//     })
//     .expect(200);
// });

// // //LOGOUT POST /api/v1/admin/logout

// it('clears the cookie after signing out', async () => {
//   const response = await request(app)
//     .post('/api/v1/admin/logout')
//     .send({})
//     .expect(200);
//   //cookie cleared

//   expect(response.get('Set-Cookie')[0]).toEqual(
//     'adminjwt=loggedout; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly'
//   );
// });

// //update my password PATCH /api/v1/admin/updatePassword exprected {currentPassword, password, passwordConfirm}
// it('returns 401 if current password is incorrect', async () => {
//   const response = await request(app)
//     .post('/api/v1/admin')
//     .send({
//       email: 'valid@email.com',
//       firstName: 'First',
//       lastName: 'last',
//       username: 'username',
//       password: 'password',
//       passwordConfirm: 'password',
//       phoneNumber: '012345678',
//     })
//     .expect(201);

//   const cookie = response.get('Set-Cookie')[0];

//   await request(app)
//     .patch(`/api/v1/admin/updatePassword`)
//     .send({
//       currentPassword: 'not current password',
//       password: 'password2',
//       passwordConfirm: 'password2',
//     })
//     .set('Cookie', cookie)
//     .expect(401);
// });

// // it('returns 400 if password and passwordConfirm do not match', async () => {
// //   const response = await request(app)
// //     .post('/api/v1/admin')
// //     .send({
// //       email: 'valid@email.com',
// //       firstName: 'First',
// //       lastName: 'last',
// //       username: 'username',
// //       password: 'password',
// //       passwordConfirm: 'password',
// //       phoneNumber: '012345678',
// //     })
// //     .expect(201);

// //   const user = response.body.data.user;
// //   const cookie = response.get('Set-Cookie')[0];

// //   await request(app)
// //     .patch(`/api/v1/admin/updatePassword`)
// //     .send({
// //       currentPassword: 'password',
// //       password: 'password2',
// //       passwordConfirm: 'password3',
// //     })
// //     .set('Cookie', cookie)
// //     .expect(400);
// // });

// // it('returns 200 everything provided, and password is changed', async () => {
// //   const response = await request(app)
// //     .post('/api/v1/admin')
// //     .send({
// //       email: 'valid@email.com',
// //       firstName: 'First',
// //       lastName: 'last',
// //       username: 'username',
// //       password: 'password',
// //       passwordConfirm: 'password',
// //       phoneNumber: '012345678',
// //     })
// //     .expect(201);

// //   const user = response.body.data.user;
// //   const cookie = response.get('Set-Cookie')[0];
// //   const timeBeforePasswordUpdate = new Date(Date.now() - 1000);

// //   await request(app)
// //     .patch(`/api/v1/admin/updatePassword`)
// //     .send({
// //       currentPassword: 'password',
// //       password: 'password2',
// //       passwordConfirm: 'password2',
// //     })
// //     .set('Cookie', cookie)
// //     .expect(200);

// //   const res = await request(app)
// //     .post('/api/v1/admin/login')
// //     .send({
// //       email: user.email,
// //       password: 'password2',
// //     })
// //     .expect(200);

// //   expect(res.body.data.user.passwordChangedAt).toBeDefined();

// //   //check if passwordChangedAt is correct date
// //   const setCorrectTimeToPasswordChangedAt =
// //     new Date(res.body.data.user.passwordChangedAt) > timeBeforePasswordUpdate;
// //   expect(setCorrectTimeToPasswordChangedAt).toBe(true);

// //   expect(res.get('Set-Cookie')).toBeDefined();
// // });
