import * as C from '../constants';

export interface IPeopleResponse {
  md5: string;
  picture: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  dob: string;
  location: {
    street: string;
  };
  phone: string;
  password: string;
}

interface IPeopleState {
  infos: IPeopleResponse[];
  loading: boolean;
  error: any;
}
const initialState: IPeopleState = {
  infos: [],
  loading: true,
  error: null,
};

const peopleInfoReducer = (
  state = initialState,
  action: {type: string; payload: any},
) => {
  switch (action.type) {
    case C.GET_PERSON_INFO_REQUEST:
      return {...state, loading: true, infos: [], error: null};
    case C.GET_PERSON_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        infos: [action.payload],
      };
    case C.GET_PERSON_INFO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default peopleInfoReducer;
