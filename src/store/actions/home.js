import * as types from '../action-type'
import {fetchSliders} from "../../api/home"
export default {
    //获取轮播图数据
    getSliders(){
        return dispatch=>{
            fetchSliders().then(sliders=>{
                dispatch({
                    type:types.FETCH_SLIDERS,
                    payload:{sliders}
                })
            })
        }
    }
}