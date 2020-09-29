import reducer from '../detail/state';
import {createStore} from 'redux';

const store = createStore(reducer);
export default store;
