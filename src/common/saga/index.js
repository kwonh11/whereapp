import { all, fork } from "redux-saga/effects";

import userSaga from "./user";
import locationSaga from "./location";
import homeSaga from "./home";
import detailSaga from "./detail";

export default function* rootSaga() {
  yield all([
    fork(userSaga),
    fork(locationSaga),
    fork(homeSaga),
    fork(detailSaga),
  ]);
}
