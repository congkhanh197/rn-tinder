import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
import * as C from "../constants";
import { storeData, retrieveData } from "../../utils/persistUtils";

function* retrieveFavoritePeopleData(action) {
  try {
    const data = yield call(retrieveData, C.FAVORITE_DATA);
    const favoriteData = JSON.parse(data)[C.FAVORITE_DATA];

    yield put({
      type: C.ADD_PERSON_FAVORITE,
      payload: favoriteData || []
    });
  } catch (e) {
    console.log(e);
  }
}
function* saveFavoritePeopleData(action) {
  try {
    yield call(
      storeData,
      C.FAVORITE_DATA,
      JSON.stringify({ [C.FAVORITE_DATA]: action.payload })
    );
  } catch (e) {
    console.log(e);
  }
}

function* peopleInfoSaga() {
  yield takeLatest(
    C.RETRIEVE_FAVORITE_PEOPLE_DATA,
    retrieveFavoritePeopleData
  );
  yield takeEvery(C.ADD_PERSON_FAVORITE, saveFavoritePeopleData);
}

export default peopleInfoSaga;
