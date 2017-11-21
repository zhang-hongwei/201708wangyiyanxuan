/**
 * Created by xueln on 2017/11/19.
 */
import * as types from '../action-type'
let initState={
    user:{}
};
export default function getProfile(state=initState,action){
    switch(action.type){
        case types.GET_USER:return {...state,...action.payload};

        default:return state;
    }
}