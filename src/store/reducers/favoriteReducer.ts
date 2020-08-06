import * as C from '../constants';
import {IPeopleResponse} from './peopleInfoReducer';
interface IFavoriteState {
  peopleList: IPeopleResponse[];
}
const initialState: IFavoriteState = {
  peopleList: [],
};

export default (state = initialState, action: {type: string; payload: any}) => {
  switch (action.type) {
    case C.ADD_PERSON_FAVORITE:
      return {...state, peopleList: action.payload};

    default:
      return state;
  }
};
