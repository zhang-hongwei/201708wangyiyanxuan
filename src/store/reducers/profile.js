/**
 * Created by xueln on 2017/11/19.
 */
import * as types from '../action-type'
let initState={
    user:{},
    loginStatus:'',
    registerStatus:'',
    addr:[],
};
export default function getProfile(state=initState,action){
    switch(action.type){
        case types.GET_USER:return {...state,user:{...state.user,...action.payload}};
        case types.LOGIN_STATUS:return {...state,loginStatus:action.payload};
        case types.REGISTER_STATUS:return {...state,registerStatus:action.payload};
        case types.SAVE_ADDR:return {...state,addr:[...state.addr,action.payload]};
        default:return state;
    }
}