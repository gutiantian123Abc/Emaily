import { combineReducers } from 'redux';
import authReducer from './autherReducer';

export default combineReducers({
    auth: authReducer
});