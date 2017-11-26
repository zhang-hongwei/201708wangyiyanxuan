import * as types from '../action-type'
import {fetchSliders,fetchProducts} from "../../api/home"
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
    },
    //获取首页详情页面数据
    getProducts(){
        /*return dispatch=>{
            fetchProducts().then(payload=>{
                dispatch({
                    type:types.FETCH_PRODUCTS,
                    payload:payload
                });
            })
        }*/
        console.log('mmmmmmmmm');
        return (dispatch,getState)=>{

            //派发一个对象，这个对象的payload是一个方法调用的返回值，这个返回值是一个promise，会等待promise完成，完成后会自动再次派发action，这个action的payload值会成为promise的resolve的值
            let {loading,hasMore,offset,limit}=getState().home.products
            // console.log({loading,hasMore})
            //只有当目前不是加载中，并且的确有跟多的数据的话，才会加载新的一个页面数据
            if(!loading&& hasMore){
                console.log(1);
                dispatch({
                    //派发一个action，把状态改为“加载中”
                    type:types.FETCH_PRODUCTS
                });
                dispatch({
                    type:types.FETCH_PRODUCTS_FINISH,
                    payload:fetchProducts(offset,limit)
                })
            }

        }

    }
}
