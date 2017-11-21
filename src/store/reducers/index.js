/**
 * Created by xueln on 2017/11/19.
 */
import {combineReducers} from 'redux';
import profile from './profile'
import { routerReducer } from 'react-router-redux'
export default combineReducers({
    profile,
    router:routerReducer
})