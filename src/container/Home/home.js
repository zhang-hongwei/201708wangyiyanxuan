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
            <div className="wrapper">
                <div className="header">
               <HomeHeader/>
                </div>
                <div className="main-content">
                    <div className="m-slider">
                        <Slider sliders={IMAGES}/>
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
                    <div className="m-content">
                     <div className="m-hd">
                         <a className="more" href="/">
                             <span>品牌制造商直供</span>
                             <i className="iconfont icon-jiantou3"></i>
                         </a>
                     <ul className="list">
                         <li className="item">
                             <a href="/">
                                 <div>
                                  <h4>Adidas制造商</h4>
                                     <p>29元起</p>
                                     <i className="iconfont icon-shangxin"></i>
                                 </div>
                             </a>
                         </li>
                     </ul>
                     </div>
                    </div>
                </div>




            </div>
        )
    }
}
