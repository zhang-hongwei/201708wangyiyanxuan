import React from "react";
import "./home.less"
import HomeHeader from "./HomeHeader/homeHeader";
import Slider from "./Slider/slider";
let IMAGES=[
    require("../../images/1.jpg"),
    require("../../images/2.jpg"),
    require("../../images/3.jpg"),
    require("../../images/4.jpg"),

]
console.log(IMAGES);
export default class Home extends React.Component{
    render(){
        return(
            <div>
                <div className="header">
               <HomeHeader/>
                </div>
                <div className="main-content">
                    <Slider images={IMAGES}/>
                    <div className="m-service">
                        <ul className="service-items">
                            <li className="service-item">
                                <i className="iconfont icon-duihao"></i>
                                <span>网易自营品牌</span>
                            </li>
                            <li className="service-item">
                                <i className="iconfont icon-duihao"></i>
                                <span>30天无忧退货</span>
                            </li>
                            <li className="service-item">
                                <i className="iconfont icon-duihao"></i>
                                <span>48小时快速退款</span>
                            </li>
                        </ul>
                    </div>
                </div>




            </div>
        )
    }
}
