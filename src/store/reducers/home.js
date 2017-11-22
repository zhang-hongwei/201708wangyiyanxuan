import * as types from '../action-type';

let initState = {
   
    sliders: [],
   
}
export default function (state = initState, action) {
   
    switch (action.type) {      
        case types.GET_SLIDERS:
            return {
                ...state,
                sliders: action.payload.sliders
            }
       
        default:
            return state;
    } 
}