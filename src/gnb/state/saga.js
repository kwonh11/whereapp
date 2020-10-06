import { getUsersLocation, callApiGetAddress, callApiLocationBasedList } from '../../common/api';
import { actions, types } from './index';
import { actions as detailActions } from '../../detail/state';
import { actions as placeActions } from '../../place/state';
import { fork, all, put, call, take, delay } from 'redux-saga/effects';


// 최초 접속시 user의 location을 얻고 reverse geocode하고 저장한다.
export function* fetchLocation(action) {
    while(true) {
        yield take(types.REQUEST_LOCATION);
        yield put(actions.setError(""));
        try {
            // get location
            const usersLocation = yield call(getUsersLocation);
            yield put(actions.setOrigin(usersLocation));    // store에 user location 저장
            
            // reverse geocode
            const address = yield call(callApiGetAddress, usersLocation);
            yield put(actions.setAddress(address.data));

        } catch(err) {
            yield put(actions.setError(err));
            yield put(actions.setOrigin({}));
            yield put(actions.setAddress(""));
        }
    }
}

// 최초 접속시 user의 location을 얻고 reverse geocode하고 저장한다.
// 위치기반 사용자 주변의 place list를 요청하고 store에 저장한다.
export function* fetchAreaBasedList(action) {
    while(true) {
        yield take(types.REQUEST_AREA_BASED_LIST);
        yield put(actions.setError(""));
        try {

            // getlocation
            const usersLocation = yield call(getUsersLocation);
            yield put(actions.setOrigin(usersLocation));    // store에 user location 저장
            
            // reverse geocode
            const address = yield call(callApiGetAddress, usersLocation);
            yield put(actions.setAddress(address.data));
            
            yield put(placeActions.setPlaceListLoading(true));
            const placeList = yield call(callApiLocationBasedList, usersLocation);
            yield put(placeActions.setPlaceList(placeList.data.item));

        } catch(err) {
            yield put(actions.setError(err));
            yield put(actions.setOrigin({}));
            yield put(actions.setAddress(""));
        }
        yield delay(500);
        yield put(placeActions.setPlaceListLoading(false));
    };
};


export default function* watcher() {
    yield all([fork(fetchAreaBasedList), fork(fetchLocation)]);
};

