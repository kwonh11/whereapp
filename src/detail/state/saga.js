import { callApiDetailIntro } from '../../common/api';
import { actions, types } from './index';
import { fork, all, put, call, take } from 'redux-saga/effects';
import isInProgress from '../../common/isInProgressDate';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

// Card 또는 ListItem 클릭 시 Detail화면으로 이동하며 
// GoogleMap데이터를 포함한 상세정보를 불러온다.

export function* fetchAdditional(action) {
    while(true) {
        const {contentTypeId, contentId} = yield take(types.SET_DETAILS);
        yield put(actions.setLoading(true));
        try {
            const response = yield call(callApiDetailIntro, contentTypeId, contentId);
            yield put(actions.setAdditional({
                destination: {
                    lat: response.data.mapy,
                    lng: response.data.mapx
                },
                overview: response.data.overview,
                inProgress: isInProgress(response.eventstartdata, response.eventenddate),
                additional: Object.entries(response.data)
            }));
        } catch(err) {
            yield put(actions.setError(err))
        }
        yield put(actions.setLoading(false));
    }
};

export default function* watcher() {
    yield all([fork(fetchAdditional)]);
};