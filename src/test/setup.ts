import testConnection from './test-connection';

beforeAll(async () => {
  return await testConnection.create();
});

beforeEach(async () => {
  testConnection.clear();
});

afterAll(async () => {
  return await testConnection.close();
});
