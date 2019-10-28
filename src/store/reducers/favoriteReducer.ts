import * as C from "../constants";
const initialState = {
  peopleList: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case C.ADD_PERSON_FAVORITE:
      return { ...state, peopleList: payload };

    default:
      return state;
  }
};
