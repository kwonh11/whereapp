import { callApiLocationBasedList } from "../api";
import { actions, types } from "../reducer/place";
import { put, call, delay, takeLatest, select } from "redux-saga/effects";

export function* fetchFilter(action) {
  const { name, value } = action.payload;
  const { categoryCode, arrange, dist } = yield select((state) => state.place);
  const { origin } = yield select((state) => state.location);

  let params = {};

  try {
    if (name === "arrange") {
      params = {
        location: origin,
        arrange: value,
        dist,
        categoryCode,
      };
      yield put(actions.setArrange(value));
    } else {
      params = {
        location: origin,
        dist: value,
        arrange,
        categoryCode,
      };
      yield put(actions.setDist(value));
    }
    yield put(actions.setPlaceListLoading(true));
    const placeList = yield call(callApiLocationBasedList, params);
    yield put(actions.setPlaceList(placeList.data.item));
  } catch (error) {}
  yield delay(500);
  yield put(actions.setPlaceListLoading(false));
}

export default function* watcher() {
  yield takeLatest(types.SET_FILTER, fetchFilter);
}
