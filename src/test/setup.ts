import testConnection from './test-connection';

//it seems that there is multiple connections to db at the same time
//so one might delete entities while another is working
//try to find a fix in the future..

beforeAll(async () => {
  return await testConnection.create();
});

beforeEach(async () => {
  return await testConnection.clear();
});

afterAll(async () => {
  return await testConnection.close();
});
