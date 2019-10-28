import { call, put, takeLatest } from "redux-saga/effects";
import * as C from "../constants";
import Api from "../../api";

function* getPeopleInfo(action) {
  try {
    const response = yield call(Api.getPeopleInfo);
    yield put({
      type: C.GET_PERSON_INFO_SUCCESS,
      payload: response.data.results[0].user
    });
  } catch (e) {
    yield put({
      type: C.GET_PERSON_INFO_FAILURE,
      payload: e
    });
  }
}

function* peopleInfoSaga() {
  yield takeLatest(C.GET_PERSON_INFO_REQUEST, getPeopleInfo);
}

export default peopleInfoSaga;
