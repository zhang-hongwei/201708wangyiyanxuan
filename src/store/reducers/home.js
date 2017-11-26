import * as types from "../action-type"
let initState = {
    sliders: [],
    home:[]
}
export default function getSliders(state = initState, action) {
    switch (action.type) {
        case types.FETCH_SLIDERS:
            return {
                ...state,
                sliders: action.payload.sliders
            }
        case types.FETCH_HOME:
            return {
                ...state,
                home: action.payload.home
            }
        default:
            return state;
    }
}