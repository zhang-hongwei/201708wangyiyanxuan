import {get} from "./index"
//获取轮播图数据
export function fetchSliders() {
    return get("/sliders");
}

//获取首页详情页面数据
/*export function fetchProducts() {
    return get("/products")
}*/

export  function fetchProducts (offset,limit) {
    return get(`/products?offset=${offset}&limit=${limit}`)
}

