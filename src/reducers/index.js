import {getProducts} from './products.reducer'
import {toggleTheme} from './header.reducer'
import {toggleLogin} from './login.reducer';

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    products : getProducts,
    header : toggleTheme,
    login : toggleLogin,
});

export default rootReducer;