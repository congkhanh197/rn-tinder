import peopleInfoReducer from '../peopleInfoReducer';
import * as C from '../../constants';

describe('Reducer people info', () => {
  const payload = {
    md5: 'md5',
    picture: 'picture',
    name: {
      title: 'mr',
      first: 'john',
      last: 'weak',
    },
    dob: '133151858',
    location: {
      street: 'hcm city',
    },
    phone: '0351256',
    password: 'testPassword',
  };
  test('should return init state', () => {
    const action = {
      type: 'testType',
      payload: null,
    };
    const initialState = {
      infos: [],
      loading: true,
      error: null,
    };
    expect(peopleInfoReducer(undefined, action)).toStrictEqual(initialState);
  });
  test('should change loading when get people request', () => {
    const action = {
      type: C.GET_PERSON_INFO_REQUEST,
      payload: null,
    };
    const state = {
      infos: [],
      loading: false,
      error: null,
    };
    const expected = {
      infos: [],
      loading: true,
      error: null,
    };
    expect(peopleInfoReducer(state, action)).toStrictEqual(expected);
  });
  test('should add people when get people request success', () => {
    const action = {
      type: C.GET_PERSON_INFO_SUCCESS,
      payload: payload,
    };
    const state = {
      infos: [],
      loading: false,
      error: null,
    };
    const expected = {
      infos: [payload],
      loading: false,
      error: null,
    };
    expect(peopleInfoReducer(state, action)).toStrictEqual(expected);
  });
  test('should add people when get people request failure', () => {
    const action = {
      type: C.GET_PERSON_INFO_FAILURE,
      payload: 'error',
    };
    const state = {
      infos: [],
      loading: false,
      error: null,
    };
    const expected = {
      infos: [],
      loading: false,
      error: 'error',
    };
    expect(peopleInfoReducer(state, action)).toStrictEqual(expected);
  });
});
