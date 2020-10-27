import {
  getUsersLocation,
  callApiGetAddress,
  callApiLocationBasedList,
  callAutoComplete,
  callApiGeocode,
} from "../api";
import { actions, types } from "../reducer/location";
import { actions as placeActions } from "../reducer/place";
import { put, call, delay, takeLatest } from "redux-saga/effects";

// 최초 접속시 user의 location을 얻고 reverse geocode하고 저장한다.
export function* fetchLocation() {
  yield put(actions.setError(""));
  try {
    // get location
    const usersLocation = yield call(getUsersLocation);
    yield put(actions.setOrigin(usersLocation)); // store에 user location 저장

    // reverse geocode
    const address = yield call(callApiGetAddress, usersLocation);
    yield put(actions.setAddress(address.data));
  } catch (err) {
    yield put(actions.setError(err));
    yield put(actions.setOrigin({}));
    yield put(actions.setAddress(""));
  }
}

// 최초 접속시 user의 location을 얻고 reverse geocode하고 저장한다.
// 위치기반 사용자 주변의 place list를 요청하고 store에 저장한다.
export function* fetchAreaBasedList(action) {
  const { origin, isHandledAddress } = action.payload;
  yield put(actions.setError(""));
  try {
    if (!isHandledAddress) {
      // getlocation 현재좌표
      const usersLocation = yield call(getUsersLocation);
      yield put(actions.setOrigin(usersLocation)); // store에 user location 저장
      // reverse geocode 좌표로 주소 변환
      const address = yield call(callApiGetAddress, usersLocation);
      yield put(actions.setAddress(address.data));
      
      yield put(placeActions.setPlaceListLoading(true));
      const placeList = yield call(callApiLocationBasedList, usersLocation);
      yield put(placeActions.setPlaceList(placeList.data.item));

    } else {

      yield put(placeActions.setPlaceListLoading(true));
      const placeList = yield call(callApiLocationBasedList, origin);
      yield put(placeActions.setPlaceList(placeList.data.item));

    }
  } catch (err) {
    yield put(actions.setError(err));
    yield put(actions.setOrigin({}));
    yield put(actions.setAddress(""));
  }
  yield delay(500);
  yield put(placeActions.setPlaceListLoading(false));
}

export function* fetchAutoComplete(action) {
  try {
    const address = action.payload;
    console.log(address);
    yield delay(500);
    const res = yield call(callAutoComplete, address);

    yield put(actions.predictionsSuccess(res.data));
  } catch (error) {
    yield put(actions.predictionsError(error));
  }
}

export function* fetchSearchAddress(action) {
  try {
    const address = action.payload;
    const locaiton = yield call(callApiGeocode, address);

    //좌표 변경
    yield put(actions.setOrigin(locaiton.data));

    //로딩 상태
    yield put(placeActions.setPlaceListLoading(true));

    //place 설정
    const placeList = yield call(callApiLocationBasedList, locaiton.data);

    yield put(placeActions.setPlaceList(placeList.data.item));
  } catch (error) {
    yield put(actions.searchAddressError(error));
  }
  yield delay(500);
  yield put(placeActions.setPlaceListLoading(false));
}

export default function* watcher() {
  yield takeLatest(types.REQUEST_AREA_BASED_LIST, fetchAreaBasedList);
  yield takeLatest(types.REQUEST_LOCATION, fetchLocation);
  yield takeLatest(types.PREDICTIONS_REQUEST, fetchAutoComplete);
  yield takeLatest(types.SEARCH_ADDRESS_REQUEST, fetchSearchAddress);
};
