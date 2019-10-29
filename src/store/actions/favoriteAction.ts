import * as C from '../constants';
import {IPeopleResponse} from '../reducers/peopleInfoReducer';
export const addFavoritePeopleAction = (payload: IPeopleResponse) => ({
  type: C.ADD_PERSON_FAVORITE,
  payload,
});
export const retrieveFavoritePeopleDataAction = () => ({
  type: C.RETRIEVE_FAVORITE_PEOPLE_DATA,
});
