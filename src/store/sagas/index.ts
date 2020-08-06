import { all, fork } from "redux-saga/effects";
import peopleInfoSaga from "./peopleInfoSaga";
import favoritePeopleSaga from "./favoritePeopleSaga";

function* rootSaga() {
  yield all([fork(peopleInfoSaga), fork(favoritePeopleSaga)]);
}

export default rootSaga;
