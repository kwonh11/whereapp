import { callApiBestList, callApiGetAddress, getUsersLocation } from "../api";
import { fork, all, put, call, take, delay } from "redux-saga/effects";
import { actions, types } from "../reducer/home";
import { actions as locationActions } from "../reducer/location";
import { actions as placeActions, types as placeTypes } from "../reducer/place";
import getDistance from "../getDistance";

export function* fetchBestList(action) {
  while (true) {
    yield take(types.REQUEST_BEST_PLACE_LIST);
    yield put(actions.setError(""));

    // get location
    const origin = yield call(getUsersLocation);
    yield put(locationActions.setOrigin(origin));

    // reverse geocode
    const address = yield call(callApiGetAddress, origin);
    yield put(locationActions.setAddress(address.data));

    try {
      const bestList = yield call(callApiBestList);
      const list = yield bestList.data.map((place) => {
        return {
          dist: getDistance(origin.lat, origin.lng, place.mapy, place.mapx),
          ...place,
        };
      });
      yield put(actions.setBestPlaceList(list));
    } catch (err) {
      yield put(actions.setError(err));
    }
    yield delay(500);
    yield put(actions.setLoading(false));
  }
}

export function* setCategoryCode(action) {
  while (true) {
    const { categoryCode } = yield take(types.REQUEST_CATEGORY_CODE);
    yield put(actions.setError(""));
    yield put(placeActions.setPlaceListCategoryCode(categoryCode));
    try {
      yield put(locationActions.requestAreaBasedList());
    } catch (error) {
      put(actions.setError(error));
    }
  }
}

export default function* watcher() {
  yield all([fork(fetchBestList), fork(setCategoryCode)]);
}
