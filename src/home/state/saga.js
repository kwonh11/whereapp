import { callApiBestList, getUsersLocation } from '../../common/api';
import { fork, all, put, call, take, delay } from 'redux-saga/effects';
import { actions, types } from './index';
import { actions as locaionActions } from '../../gnb/state'
import getDistance from '../../common/getDistance';

export function* fetchBestList(action) {
    while(true) {
        yield take(types.REQUEST_BEST_PLACE_LIST);
        yield put(actions.setError(""));
        const origin = yield call(getUsersLocation);
        yield put(locaionActions.setOrigin(origin));
        try{
            const bestList = yield call(callApiBestList);
            console.log(bestList.data);
            const list = yield bestList.data.map(place => {
                return {
                    dist: getDistance(origin.lat, origin.lng, place.mapy, place.mapx),
                    ...place
                }
            })
            yield put(actions.setBestPlaceList(list));
        } catch(err) {
            yield put(actions.setError(err));
        }
        yield delay(1000);
        yield put(actions.setLoading(false));
    }
};

export default function* watcher() {
    yield all([fork(fetchBestList)]);
};

