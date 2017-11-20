/**
 * Created by xueln on 2017/11/19.
 */
import {push} from 'react-router-redux'
import * as types from '../action-type'
export default {
    login(msg){
        //点击登录 触发此函数 msg参数是表单信息 请求接口 登录失败停在该页，登录成功跳转到个人中心 接口个人信息存放在payload里，个人中心页挂载后，如取不到数据就重定向到登录页
        return function(dispatch,getState){

            dispatch({
                type:types.GET_USER,
                payload:{user:{username:'xuelina'}}
            });
            //dispatch(push('/profile'))
        }


    },
    register(msg){
        //点击注册，msg是表单信息，请求接口，注册失败停在此页，注册成功，跳到注册成功欢迎页
        return function(dispatch,getState){
            //dispatch(push('/login'))
        }
    }
}