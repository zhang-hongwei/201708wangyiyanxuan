import React from "react";
import "./home.less"
import HomeHeader from "./HomeHeader/homeHeader";
import Slider from "./Slider/slider";
import Swiper from "./Swiper/swiper";
import Count from "./Count/count";

let IMAGES = [
    require("../../images/1.jpg"),
    require("../../images/2.jpg"),
    require("../../images/3.jpg"),
    require("../../images/4.jpg"),

]
let PIC = [
    require("../../images/5.jpg"),
    require("../../images/5.jpg"),
    require("../../images/5.jpg"),
    require("../../images/5.jpg"),
    require("../../images/5.jpg"),
    require("../../images/5.jpg"),
    require("../../images/5.jpg")
]
console.log(IMAGES);
export default class Home extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <div className="header">
                    <HomeHeader/>
                </div>
                <ul className="m-tabs">
                    <li>推荐</li>
                    <li>推荐</li>
                    <li>推荐</li>
                    <li>推荐</li>
                    <li>推荐</li>
                    <li>推荐</li>
                    <li>推荐</li>
                    <li>推荐</li>
                    <li>推荐</li>
                    <li>推荐</li>
                    <li>推荐</li>
                </ul>
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
                    <div className="m-content1">
                        <div className="m-hd">
                            <a className="more" href="/">
                                <span>品牌制造商直供</span>
                                <i className="iconfont icon-jiantou3"></i>
                            </a>
                        </div>
                        <ul className="list">
                            <li className="item">
                                <a href="/">
                                    <div className="cnt">
                                        <p>Adidas制造商</p>
                                        <p className="price">29元起</p>
                                        <i className="iconfont icon-shangxin"></i>
                                    </div>
                                    <img
                                        src="http://yanxuan.nosdn.127.net/2fc924ae44eb0a37dda18690368851af.png?imageView&thumbnail=355x0&quality=65"
                                        alt=""/>
                                </a>
                            </li>
                            <li className="item">
                                <a href="/">
                                    <div className="cnt">
                                        <p>Adidas制造商</p>
                                        <p className="price">29元起</p>
                                        <i className="iconfont icon-shangxin"></i>
                                    </div>
                                    <img
                                        src="http://yanxuan.nosdn.127.net/2fc924ae44eb0a37dda18690368851af.png?imageView&thumbnail=355x0&quality=65"
                                        alt=""/>
                                </a>
                            </li>
                            <li className="item">
                                <a href="/">
                                    <div className="cnt">
                                        <p>Adidas制造商</p>
                                        <p className="price">29元起</p>
                                        <i className="iconfont icon-shangxin"></i>
                                    </div>
                                    <img
                                        src="http://yanxuan.nosdn.127.net/2fc924ae44eb0a37dda18690368851af.png?imageView&thumbnail=355x0&quality=65"
                                        alt=""/>
                                </a>
                            </li>
                            <li className="item">
                                <a href="/">
                                    <div className="cnt">
                                        <p>Adidas制造商</p>
                                        <p className="price">29元起</p>
                                        <i className="iconfont icon-shangxin"></i>
                                    </div>
                                    <img
                                        src="http://yanxuan.nosdn.127.net/2fc924ae44eb0a37dda18690368851af.png?imageView&thumbnail=355x0&quality=65"
                                        alt=""/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="m-content2">
                        <div className="m-hd">
                            <a className="more" href="/">
                                <span>周一周四 · 新品首发</span>
                                <div className="all">
                                    <span>查看全部</span>
                                    <i className="iconfont icon-arrow-right1"></i>
                                </div>
                            </a>
                        </div>
                        <div className="m-grid">
                            <div>
                                <Swiper swiper={PIC}/>
                            </div>
                        </div>
                    </div>
                    <div className="m-content3">
                        <a href="/">
                            <div className="activity">
                                <div className="item-left">
                                    <p className="title">严选限时选购</p>
                                    <Count/>
                                    <div className="next">
                                        <span>下一场</span>
                                        <span>18:00</span>
                                        <span>开始</span>
                                    </div>
                                </div>
                                <div className="item-right">
                                    <img
                                        src="http://yanxuan.nosdn.127.net/2b53cb18ae4773aaec4466d46746971f.png?imageView&quality=65&thumbnail=330x330"
                                        alt=""/>
                                    <span className="price">
                                        <span>￥200</span>
                                        <span>￥105</span>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="m-content4">
                        <p className="m-hd">居家好物</p>
                        <ul className="products">
                            <li className="list">
                                <div className="item">
                                <img src="http://yanxuan.nosdn.127.net/480abaed735b79e1768fd9878ef76cc4.png?imageView&quality=65&thumbnail=330x330"
                                    alt=""/>
                                <p>双层子母被，四季皆可使用</p>
                                </div>
                                <div className="tagWraper">
                                    <p className="status anniversary">爆品</p>
                                    <p className="status gradientPrice">满赠</p>
                                </div>
                                <div className="desc">升级款双宫茧桑蚕丝被 子母被</div>
                                <p>￥1230</p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
