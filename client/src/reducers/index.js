import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { reducer as formReducers } from 'redux-form';
import streamReducers from './streamReducers';

export default combineReducers({
    auth: authReducer,
    form: formReducers,
    streams: streamReducers
})