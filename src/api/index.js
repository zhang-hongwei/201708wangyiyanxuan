/**
 * Created by xueln on 2017/11/21.
 */
const host='http://localhost:3000';
export function post(url,data){
    return fetch(host+url,{
        method:'POST',
        credentials:"include",
        headers:{
            "Accept":"application/json",
            "Content-Type":'application/json'
        },
        body:JSON.stringify(data)
    }).then(res=>res.json())
}
<<<<<<< HEAD

export function get(url){
    //这里会返回一个promise,resolve之后会传入响应体，就是轮播图数组
    //浏览器原生支持fetch方法，它的用法类似于 $.ajax
    return fetch(host+url,{
        method:'GET',//请求的方法名
        //客户跨域请求服务器的要携带cookie
        credentials:"include",
        headers:{//请求头
            //需要服务器返回JSON格式的数据
            "Accept":"application/json"
        }
        //res是一个响应对象，调用json方法可获取JSON格式的响应体
    }).then(res=>res.json());
=======
export function get(url){
    return fetch(host+url,{method:'GET',credentials:"include",headers:{
        "Accept":"application/json"

    }}).then(res=>res.json())
>>>>>>> 423110a7a17a9f6d4a7a7091d5f53246288abe4c
}