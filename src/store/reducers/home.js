
import * as types from "../action-type"

// export default function getSliders(state = initState, action) {
//     switch (action.type) {
//         case types.FETCH_SLIDERS:
//             return {
//                 ...state,
//                 sliders: action.payload.sliders
//             }
//         case types.FETCH_HOME:
//             return {
//                 ...state,
//                 home: action.payload.home
//             }
//         default:
//             return state;


let initState={
    sliders:[],
    products:{//存放课程的列表
        loading:"",//加载状态，默认是加载中
        hasMore:true,//后面是否有更多
        list:[],//存放的课程的数组
        offset:0,//偏移量
       limit:5 //每页的条数
    }
}
export default function (state=initState,action) {
    switch (action.type){
        case types.FETCH_SLIDERS:
            return {
                ...state,
                sliders:action.payload.sliders
            }
       /* case types.FETCH_PRODUCTS:
            return{
                ...state,
                products:{
                    ...state.products,
                    list:action.payload.list,
                    //loading:"加载中..."
                }
            }*/
        case types.FETCH_PRODUCTS:
            return{
                ...state,
                products:{
                    ...state.products,
                    loading:"加载中"
                }
            }
        case types.FETCH_PRODUCTS_FINISH:
            return{
                ...state,
                products:{
                    ...state.products,
                    loading:"",
                    hasMore:action.payload.hasMore,
                    //课程列表是不停的累加的，要取到原数组，然后和新数组合并
                    list:[...state.products.list,...action.payload.list],
                    offset:state.products.offset+action.payload.list.length,
                }
            }
        default:
       return state;

    }
}