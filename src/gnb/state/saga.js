import { getUsersLocation, callApiGetAddress, callApiLocationBasedList } from '../../common/api';
import { actions, types } from './index';
import { actions as detailActions, types as detailTypes } from '../../detail/state';
import { actions as placeActions, types as placeTypes } from '../../place/state';
import { fork, all, put, call, take } from 'redux-saga/effects';


const delay = (ms) => new Promise(res => setTimeout(res, ms));

export function* fetchLocation(action) {
    while(true) {
        yield take(types.REQUEST_LOCATION);
        yield put(actions.setError(""));
        try {
            // getlocation
            const usersLocation = yield call(getUsersLocation);
            if(usersLocation) yield put(actions.setOrigin(usersLocation));    // store에 user location 저장
            
            // reverse geocode
            const address = yield call(callApiGetAddress, usersLocation);
            if(address.data) {
                yield put(actions.setAddress(address.data));
            }
        } catch(err) {
            yield put(actions.setError(err));
            yield put(actions.setOrigin({}));
            yield put(actions.setAddress(""));
        }
    }
}

export function* fetchAreaBasedList(action) {
    while(true) {
        yield take(types.REQUEST_AREA_BASED_LIST);
        yield put(actions.setError(""));
        yield put(detailActions.setLoading(true));
        try {

            // getlocation
            const usersLocation = yield call(getUsersLocation);
            if(usersLocation) yield put(actions.setOrigin(usersLocation));    // store에 user location 저장
            
            // reverse geocode
            const address = yield call(callApiGetAddress, usersLocation);
            if(address.data) {
                // redux에서 history관리하고 place 주소로 이동 시킴
                yield put(actions.setAddress(address.data));
                yield put(placeActions.setPlaceListLoading(true));
                const placeList = yield call(callApiLocationBasedList, usersLocation);
                if(placeList) yield put(placeActions.setPlaceList(placeList.data.item));
            }

        } catch(err) {
            yield put(actions.setError(err));
            yield put(actions.setOrigin({}));
            yield put(actions.setAddress(""));
        }
        
        yield put(placeActions.setPlaceListLoading(false));
        yield put(detailActions.setLoading(false));

    };
};


export default function* watcher() {
    yield all([fork(fetchAreaBasedList), fork(fetchLocation)]);
};

