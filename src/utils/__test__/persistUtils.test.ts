import {retrieveData, storeData} from '../persistUtils';

jest.mock('@react-native-community/async-storage', () => ({
  setItem: jest
    .fn()
    .mockReturnValueOnce(() => Promise.resolve(true))
    .mockImplementationOnce(() => Promise.reject()),
  getItem: jest
    .fn()
    .mockReturnValueOnce(() => Promise.resolve('testData'))
    .mockImplementationOnce(() => Promise.reject('error')),
}));

describe('Test persist utils', () => {
  test('should call save data', () => {
    expect(storeData('testKey', 'testString')).resolves.toBe(true);
  });
  test('should call save data and take error', () => {
    expect(storeData('testKey', 'testString')).rejects.toBe(undefined);
  });
  test('should call get data', async () => {
    expect(retrieveData('testKey')).resolves.toBe('testData')
  });
  test('should call get data and take error', async () => {
    expect(retrieveData('testKey')).rejects.toBe('error');
  });
});
