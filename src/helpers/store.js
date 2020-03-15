import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index';
import thunkMiddleware from 'redux-thunk';

const middleware = thunkMiddleware;
const store = createStore(rootReducer, applyMiddleware(middleware));

export default store;