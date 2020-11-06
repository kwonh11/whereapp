import { callApiLocationBasedList } from "../api";
import { actions, types } from "../reducer/place";
import { put, call, delay, takeLatest, select } from "redux-saga/effects";

export function* fetchFilter(action) {
  const { name, value } = action.payload;
  const { categoryCode, arrange, dist } = yield select((state) => state.place);
  const { origin } = yield select((state) => state.location);

  let params = { location: origin, arrange, dist, categoryCode };
  params = { ...params, [name]: value };

  try {
    if (name === "arrange") {
      yield put(actions.setArrange(value));
    } else {
      yield put(actions.setDist(value));
    }
    yield put(actions.setPlaceListLoading(true));
    const placeList = yield call(callApiLocationBasedList, params);
    yield put(actions.setPlaceList(placeList.data));
  } catch (error) {}
  yield delay(500);
  yield put(actions.setPlaceListLoading(false));
}

export function* fetchPlaceList(action) {
  const { arrange, dist } = yield select((state) => state.place);
  const { origin } = yield select((state) => state.location);
  let params = {
    location: origin,
    arrange,
    dist,
    categoryCode: action.categoryCode,
  };

  try {
    yield put(actions.setPlaceListLoading(true));
    const placeList = yield call(callApiLocationBasedList, params);
    yield put(actions.setPlaceList(placeList.data));
  } catch (error) {}
  yield delay(500);
  yield put(actions.setPlaceListLoading(false));
}

export default function* watcher() {
  yield takeLatest(types.SET_FILTER, fetchFilter);
  // yield takeLatest(types.SET_PLACELIST_CATEGORY_CODE, fetchPlaceList);
}
