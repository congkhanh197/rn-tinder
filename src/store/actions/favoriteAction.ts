import * as C from "../constants";
export const addFavoritePeopleAction = payload => ({
  type: C.ADD_PERSON_FAVORITE,
  payload
});
export const retrieveFavoritePeopleDataAction = () => ({
  type: C.RETRIEVE_FAVORITE_PEOPLE_DATA
});
