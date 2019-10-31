import {getPersonInfoAction} from '../peopleInfoAction';
import * as C from '../../constants';

describe('Test people info action', () => {
  test('should return get person info action', () => {
    const expected = {
      type: C.GET_PERSON_INFO_REQUEST,
    };
    expect(getPersonInfoAction()).toStrictEqual(expected);
  });
});
