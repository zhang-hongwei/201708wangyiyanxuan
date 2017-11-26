import * as types from "../action-type"
let initState = {
    list: []
}
export default function getList(state = initState, action) {
    if (action.type == types.FET_LISTS) {
        return {
            ...state,
            list: action.payload.list
        }
    } else {
        return state
    }
}

