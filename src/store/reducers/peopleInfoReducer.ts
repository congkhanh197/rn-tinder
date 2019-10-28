import * as C from "../constants";

const initialState = {
  infos: [],
  loading: true,
  error: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case C.GET_PERSON_INFO_REQUEST:
      return { ...state, loading: true };
    case C.GET_PERSON_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        infos: [...state.infos, payload]
      };
    case C.GET_PERSON_INFO_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload
      };
    default:
      return state;
  }
};
