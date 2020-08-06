import favoriteReducer from '../favoriteReducer';
import * as C from '../../constants';
describe('test favorite reducer', () => {
  test('should return init state', () => {
    const state = {
      peopleList: [],
    };
    const action = {
      type: 'testType',
      payload: null,
    };
    expect(favoriteReducer(undefined, action)).toStrictEqual(state);
  });
  test('should add people to state', () => {
    const state = {
      peopleList: [],
    };
    const action = {
      type: C.ADD_PERSON_FAVORITE,
      payload: [{test:'test'}],
    };
    const expected = {
        peopleList:[{test:'test'}]
    }
    expect(favoriteReducer(state, action)).toStrictEqual(expected);
  });
});
