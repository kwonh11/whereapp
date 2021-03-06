import { call, delay, put, takeLatest } from "redux-saga/effects";
import { callApiBestList, callApiGetAddress, getUsersLocation } from "../api";
import getDistance from "../getDistance";
import { actions, types } from "../reducer/home";
import { actions as locationActions } from "../reducer/location";

export function* fetchBestList(action) {
  const { regionCode, isHandledAddress, origin } = action.payload;
  
  try {
    yield put(actions.setLoading(true));
    yield put(actions.setError(""));
    if (!isHandledAddress) {
      // get location
      const newOrigin = yield call(getUsersLocation);
      yield put(locationActions.setOrigin(newOrigin));
      // reverse geocode
      const response = yield call(callApiGetAddress, newOrigin);
      yield put(locationActions.setAddress(response.data));

      const bestList = yield call(callApiBestList, regionCode);
      const list = yield bestList.data.map((place) => {
        return {
          dist: getDistance(
            newOrigin.lat,
            newOrigin.lng,
            place.mapy,
            place.mapx
          ),
          ...place,
        };
      });
      yield put(actions.setBestPlaceList(list));
    } else {
      const bestList = yield call(callApiBestList, regionCode);
      const list = yield bestList.data.map((place) => {
        return {
          dist: getDistance(origin.lat, origin.lng, place.mapy, place.mapx),
          ...place,
        };
      });
      yield put(actions.setBestPlaceList(list));
    }
  } catch (err) {
    yield put(actions.setError(err));
  }
  yield delay(500);
  yield put(actions.setLoading(false));
}

export default function* watcher() {
  yield takeLatest(types.REQUEST_BEST_PLACE_LIST, fetchBestList);
}
