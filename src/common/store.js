import locationReducer from '../gnb/state';
import detailReducer from '../detail/state';
import placeReducer from '../place/state';
import homeReducer from '../home/state';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import locationSaga from '../gnb/state/saga';
import detailSaga from '../detail/state/saga';
import homeSaga from '../home/state/saga';
import { all } from 'redux-saga/effects';

function* rootSaga() {
    yield all([locationSaga(), detailSaga(), homeSaga()]);
}
const reducer = combineReducers({
    location: locationReducer,
    detail: detailReducer,
    place: placeReducer,
    home: homeReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));
export default store;
sagaMiddleware.run(rootSaga);