import * as C from "../constants";

const getPersonInfoAction = payload => ({
  type: C.GET_PERSON_INFO_REQUEST,
  payload
});

export { getPersonInfoAction };
