import locationReducer from '../gnb/state';
import detailReducer from '../detail/state';
import placeReducer from '../place/state';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import locationSaga from '../gnb/state/saga';

const reducer = combineReducers({
    location: locationReducer,
    detail: detailReducer,
    place: placeReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));
export default store;
sagaMiddleware.run(locationSaga);