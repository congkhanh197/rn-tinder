import {
  addFavoritePeopleAction,
  retrieveFavoritePeopleDataAction,
} from '../favoriteAction';
import * as C from '../../constants';
describe('Test favorite people action', () => {
  test('should return add favorite people action', () => {
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
    const expected = {
      type: C.ADD_PERSON_FAVORITE,
      payload: payload,
    };
    expect(addFavoritePeopleAction(payload)).toStrictEqual(expected);
  });
  test('should return retrieve favorite people action', () => {
    const expected = {
      type: C.RETRIEVE_FAVORITE_PEOPLE_DATA,
    };
    expect(retrieveFavoritePeopleDataAction()).toStrictEqual(expected);
  });
});
