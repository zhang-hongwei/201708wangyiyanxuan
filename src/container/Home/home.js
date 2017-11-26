import React from "react";
import './home.less';
import HomeHeader from "./HomeHeader/homeHeader";
import Slider from "./Slider/slider";
import Swiper from "./Swiper/swiper";
import Count from "./Count/count";
import {connect} from "react-redux"
import actions from "../../store/actions/home"

import NavHeader from "../../components/NavHeader/navHeader";
import Content from './Content/content'
import { NavLink } from "react-router-dom";


let PIC = [
    require("../../images/5.jpg"),
    require("../../images/5.jpg"),
    require("../../images/5.jpg"),
    require("../../images/5.jpg"),
    require("../../images/5.jpg"),
    require("../../images/5.jpg"),
    require("../../images/5.jpg")
]
 class Home extends React.Component {
    componentDidMount(){
        if(this.props.sliders.length===0){
            let a=this.props.getSliders()
            console.log(a);
        }
        
        this.props.getHome()
       

    }
    render() {
        

        return (
            <div className="wrapper">
               <div className="mh">
                    <div className="header">
                        <HomeHeader/>
                    </div>
                   <NavHeader/>
               </div>
                <div className="main-content">
                    <div className="m-slider">
                        <Slider sliders={this.props.sliders}/>
                        <div className="m-service">
                            <ul className="service-items">
                                <li className="service-item">
                                    <i className="iconfont icon-xuanzhong"></i>
                                    <span>网易自营品牌</span>
                                </li>
                                <li className="service-item">
                                    <i className="iconfont icon-xuanzhong"></i>
                                    <span>30天无忧退货</span>
                                </li>
                                <li className="service-item">
                                    <i className="iconfont icon-xuanzhong"></i>
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
                      <div className="m-ft">
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
                                            alt="" />
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
                                            alt="" />
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
                                            alt="" />
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
                                            alt="" />
                                    </a>
                                </li>
                         </ul>
                      </div>
                    </div>
                    <div className="m-content2">
                        <div className="m-hd">
                            <a className="more" href="/">
                                <span>周一周四 · 新品首发</span>
                                <div className="all">
                                    <span>查看全部</span>
                                    <i className="iconfont icon-gengduo"></i>
                                </div>
                            </a>
                        </div>
                        <div className="m-grid">
                            <div className="w">
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
                    <Content></Content>
                    <Content></Content>
                    <Content></Content>
                    <Content></Content>                
                </div>
            </div>
        )
    }
}
export default connect(
    state=>state.home,
    actions
)(Home)