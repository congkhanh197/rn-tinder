import Api from '../index';
jest.mock('axios', () => ({
  get: jest.fn(() => new Promise(resolve => resolve('test'))),
}));
describe('Test api', () => {
  test('should call api', async () => {
    const response = await Api.getPeopleInfo();
    expect(response).toBe('test');
  });
});
