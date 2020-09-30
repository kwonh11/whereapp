import locationReducer from '../gnb/state';
import detailReducer from '../detail/state';
import {combineReducers, createStore} from 'redux';

const reducer = combineReducers({
    location: locationReducer,
    detail: detailReducer
});
const store = createStore(reducer);
export default store;
