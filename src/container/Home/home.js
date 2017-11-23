import React from "react";
import "./home.less"
import HomeHeader from "./HomeHeader/homeHeader";
import Slider from "./Slider/slider";
import Swiper from "./Swiper/swiper";
import Count from "./Count/count";
import {connect} from "react-redux"
import actions from "../../store/actions/home"
import { NavLink } from "_react-router-dom@4.2.2@react-router-dom";
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
 class Home extends React.Component {
    componentDidMount(){
        if(this.props.sliders.length===0){
            let a=this.props.getSliders()
            console.log(a);
        }


    }
    render() {
        



        return (
            <div className="wrapper">
               <div className="mh">
                    <div className="header">
                        <HomeHeader/>
                    </div>
                  <ul className="tabs">
                      <li>推荐</li>
                      <li>居家</li>
                      <li>餐厨</li>
                      <li>酷件</li>
                      <li>服装</li>
                      <li>电器</li>
                      <li>洗护</li>
                      <li>杂货</li>
                      <li>饮食</li>
                      <li>婴童</li>
                      <li>志趣</li>
                  </ul>
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
                    <div className="m-content4">
                    <h3 className="m-hd">居家好物</h3>
                    <ul className="products">
                        <li className="list">
                            <div className="item">
                                <img src="http://yanxuan.nosdn.127.net/480abaed735b79e1768fd9878ef76cc4.png?imageView&quality=65&thumbnail=330x330"
                                     alt="" />
                                <p>双层子母被，四季皆可使用</p>
                            </div>
                            <div className="tagWraper">
                                <p className="status anniversary">爆品</p>
                                <p className="status gradientPrice">满赠</p>
                            </div>
                            <div className="desc">升级款双宫茧桑蚕丝被 子母被</div>
                            <p className="price">￥1230</p>
                        </li>
                        <li className="list">
                            <div className="item">
                                <img src="http://yanxuan.nosdn.127.net/480abaed735b79e1768fd9878ef76cc4.png?imageView&quality=65&thumbnail=330x330"
                                     alt="" />
                                <p>双层子母被，四季皆可使用</p>
                            </div>
                            <div className="tagWraper">
                                <p className="status anniversary">爆品</p>
                                <p className="status gradientPrice">满赠</p>
                            </div>
                            <div className="desc">升级款双宫茧桑蚕丝被 子母被</div>
                            <p className="price">￥1230</p>
                        </li>
                        <li className="list">
                            <div className="item">
                                <img src="http://yanxuan.nosdn.127.net/480abaed735b79e1768fd9878ef76cc4.png?imageView&quality=65&thumbnail=330x330"
                                     alt="" />
                                <p>双层子母被，四季皆可使用</p>
                            </div>
                            <div className="tagWraper">
                                <p className="status anniversary">爆品</p>
                                <p className="status gradientPrice">满赠</p>
                            </div>
                            <div className="desc">升级款双宫茧桑蚕丝被 子母被</div>
                            <p className="price">￥1230</p>
                        </li>
                        <li className="list">
                            <div className="item">
                                <img src="http://yanxuan.nosdn.127.net/480abaed735b79e1768fd9878ef76cc4.png?imageView&quality=65&thumbnail=330x330"
                                     alt="" />
                                <p>双层子母被，四季皆可使用</p>
                            </div>
                            <div className="tagWraper">
                                <p className="status anniversary">爆品</p>
                                <p className="status gradientPrice">满赠</p>
                            </div>
                            <div className="desc">升级款双宫茧桑蚕丝被 子母被</div>
                            <p className="price">￥1230</p>
                        </li>
                        <li className="list">
                            <div className="item">
                                <img src="http://yanxuan.nosdn.127.net/480abaed735b79e1768fd9878ef76cc4.png?imageView&quality=65&thumbnail=330x330"
                                     alt="" />
                                <p>双层子母被，四季皆可使用</p>
                            </div>
                            <div className="tagWraper">
                                <p className="status anniversary">爆品</p>
                                <p className="status gradientPrice">满赠</p>
                            </div>
                            <div className="desc">升级款双宫茧桑蚕丝被 子母被</div>
                            <p className="price">￥1230</p>
                        </li>
                        <li className="list">
                            <div className="item item-more">
                                <span>更多电器好物</span>
                                <i className="iconfont icon-jiantou3"></i>
                            </div>
                        </li>
                    </ul>
                </div>
                    <div className="m-content5">
                        <h3 className="m-hd">厨房好物</h3>
                        <ul className="products">
                            <li className="list">
                                <div className="item">
                                    <img src="http://yanxuan.nosdn.127.net/480abaed735b79e1768fd9878ef76cc4.png?imageView&quality=65&thumbnail=330x330"
                                         alt="" />
                                    <p>双层子母被，四季皆可使用</p>
                                </div>
                                <div className="tagWraper">
                                    <p className="status anniversary">爆品</p>
                                    <p className="status gradientPrice">满赠</p>
                                </div>
                                <div className="desc">升级款双宫茧桑蚕丝被 子母被</div>
                                <p className="price">￥1230</p>
                            </li>
                            <li className="list">
                                <div className="item">
                                    <img src="http://yanxuan.nosdn.127.net/480abaed735b79e1768fd9878ef76cc4.png?imageView&quality=65&thumbnail=330x330"
                                         alt="" />
                                    <p>双层子母被，四季皆可使用</p>
                                </div>
                                <div className="tagWraper">
                                    <p className="status anniversary">爆品</p>
                                    <p className="status gradientPrice">满赠</p>
                                </div>
                                <div className="desc">升级款双宫茧桑蚕丝被 子母被</div>
                                <p className="price">￥1230</p>
                            </li>
                            <li className="list">
                                <div className="item">
                                    <img src="http://yanxuan.nosdn.127.net/480abaed735b79e1768fd9878ef76cc4.png?imageView&quality=65&thumbnail=330x330"
                                         alt="" />
                                    <p>双层子母被，四季皆可使用</p>
                                </div>
                                <div className="tagWraper">
                                    <p className="status anniversary">爆品</p>
                                    <p className="status gradientPrice">满赠</p>
                                </div>
                                <div className="desc">升级款双宫茧桑蚕丝被 子母被</div>
                                <p className="price">￥1230</p>
                            </li>
                            <li className="list">
                                <div className="item">
                                    <img src="http://yanxuan.nosdn.127.net/480abaed735b79e1768fd9878ef76cc4.png?imageView&quality=65&thumbnail=330x330"
                                         alt="" />
                                    <p>双层子母被，四季皆可使用</p>
                                </div>
                                <div className="tagWraper">
                                    <p className="status anniversary">爆品</p>
                                    <p className="status gradientPrice">满赠</p>
                                </div>
                                <div className="desc">升级款双宫茧桑蚕丝被 子母被</div>
                                <p className="price">￥1230</p>
                            </li>
                            <li className="list">
                                <div className="item">
                                    <img src="http://yanxuan.nosdn.127.net/480abaed735b79e1768fd9878ef76cc4.png?imageView&quality=65&thumbnail=330x330"
                                         alt="" />
                                    <p>双层子母被，四季皆可使用</p>
                                </div>
                                <div className="tagWraper">
                                    <p className="status anniversary">爆品</p>
                                    <p className="status gradientPrice">满赠</p>
                                </div>
                                <div className="desc">升级款双宫茧桑蚕丝被 子母被</div>
                                <p className="price">￥1230</p>
                            </li>
                            <li className="list">
                                <div className="item item-more">
                                    <span>更多厨房好物</span>
                                    <i className="iconfont icon-jiantou3"></i>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="m-content6">
                        <h3 className="m-hd">酷件好物</h3>
                        <ul className="products">
                            <li className="list">
                                <div className="item">
                                    <img src="http://yanxuan.nosdn.127.net/480abaed735b79e1768fd9878ef76cc4.png?imageView&quality=65&thumbnail=330x330"
                                         alt="" />
                                    <p>双层子母被，四季皆可使用</p>
                                </div>
                                <div className="tagWraper">
                                    <p className="status anniversary">爆品</p>
                                    <p className="status gradientPrice">满赠</p>
                                </div>
                                <div className="desc">升级款双宫茧桑蚕丝被 子母被</div>
                                <p className="price">￥1230</p>
                            </li>
                            <li className="list">
                                <div className="item">
                                    <img src="http://yanxuan.nosdn.127.net/480abaed735b79e1768fd9878ef76cc4.png?imageView&quality=65&thumbnail=330x330"
                                         alt="" />
                                    <p>双层子母被，四季皆可使用</p>
                                </div>
                                <div className="tagWraper">
                                    <p className="status anniversary">爆品</p>
                                    <p className="status gradientPrice">满赠</p>
                                </div>
                                <div className="desc">升级款双宫茧桑蚕丝被 子母被</div>
                                <p className="price">￥1230</p>
                            </li>
                            <li className="list">
                                <div className="item">
                                    <img src="http://yanxuan.nosdn.127.net/480abaed735b79e1768fd9878ef76cc4.png?imageView&quality=65&thumbnail=330x330"
                                         alt="" />
                                    <p>双层子母被，四季皆可使用</p>
                                </div>
                                <div className="tagWraper">
                                    <p className="status anniversary">爆品</p>
                                    <p className="status gradientPrice">满赠</p>
                                </div>
                                <div className="desc">升级款双宫茧桑蚕丝被 子母被</div>
                                <p className="price">￥1230</p>
                            </li>
                            <li className="list">
                                <div className="item">
                                    <img src="http://yanxuan.nosdn.127.net/480abaed735b79e1768fd9878ef76cc4.png?imageView&quality=65&thumbnail=330x330"
                                         alt="" />
                                    <p>双层子母被，四季皆可使用</p>
                                </div>
                                <div className="tagWraper">
                                    <p className="status anniversary">爆品</p>
                                    <p className="status gradientPrice">满赠</p>
                                </div>
                                <div className="desc">升级款双宫茧桑蚕丝被 子母被</div>
                                <p className="price">￥1230</p>
                            </li>
                            <li className="list">
                                <div className="item">
                                    <img src="http://yanxuan.nosdn.127.net/480abaed735b79e1768fd9878ef76cc4.png?imageView&quality=65&thumbnail=330x330"
                                         alt="" />
                                    <p>双层子母被，四季皆可使用</p>
                                </div>
                                <div className="tagWraper">
                                    <p className="status anniversary">爆品</p>
                                    <p className="status gradientPrice">满赠</p>
                                </div>
                                <div className="desc">升级款双宫茧桑蚕丝被 子母被</div>
                                <p className="price">￥1230</p>
                            </li>
                            <li className="list">
                                <div className="item item-more">
                                    <span>更多酷件好物</span>
                                    <i className="iconfont icon-jiantou3"></i>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="m-content7">
                        <h3 className="m-hd">饮食好物</h3>
                        <ul className="products">
                            <li className="list">
                                <div className="item">
                                    <img src="http://yanxuan.nosdn.127.net/480abaed735b79e1768fd9878ef76cc4.png?imageView&quality=65&thumbnail=330x330"
                                         alt="" />
                                    <p>双层子母被，四季皆可使用</p>
                                </div>
                                <div className="tagWraper">
                                    <p className="status anniversary">爆品</p>
                                    <p className="status gradientPrice">满赠</p>
                                </div>
                                <div className="desc">升级款双宫茧桑蚕丝被 子母被</div>
                                <p className="price">￥1230</p>
                            </li>
                            <li className="list">
                                <div className="item">
                                    <img src="http://yanxuan.nosdn.127.net/480abaed735b79e1768fd9878ef76cc4.png?imageView&quality=65&thumbnail=330x330"
                                         alt="" />
                                    <p>双层子母被，四季皆可使用</p>
                                </div>
                                <div className="tagWraper">
                                    <p className="status anniversary">爆品</p>
                                    <p className="status gradientPrice">满赠</p>
                                </div>
                                <div className="desc">升级款双宫茧桑蚕丝被 子母被</div>
                                <p className="price">￥1230</p>
                            </li>
                            <li className="list">
                                <div className="item">
                                    <img src="http://yanxuan.nosdn.127.net/480abaed735b79e1768fd9878ef76cc4.png?imageView&quality=65&thumbnail=330x330"
                                         alt="" />
                                    <p>双层子母被，四季皆可使用</p>
                                </div>
                                <div className="tagWraper">
                                    <p className="status anniversary">爆品</p>
                                    <p className="status gradientPrice">满赠</p>
                                </div>
                                <div className="desc">升级款双宫茧桑蚕丝被 子母被</div>
                                <p className="price">￥1230</p>
                            </li>
                            <li className="list">
                                <div className="item">
                                    <img src="http://yanxuan.nosdn.127.net/480abaed735b79e1768fd9878ef76cc4.png?imageView&quality=65&thumbnail=330x330"
                                         alt="" />
                                    <p>双层子母被，四季皆可使用</p>
                                </div>
                                <div className="tagWraper">
                                    <p className="status anniversary">爆品</p>
                                    <p className="status gradientPrice">满赠</p>
                                </div>
                                <div className="desc">升级款双宫茧桑蚕丝被 子母被</div>
                                <p className="price">￥1230</p>
                            </li>
                            <li className="list">
                                <div className="item">
                                    <img src="http://yanxuan.nosdn.127.net/480abaed735b79e1768fd9878ef76cc4.png?imageView&quality=65&thumbnail=330x330"
                                         alt="" />
                                    <p>双层子母被，四季皆可使用</p>
                                </div>
                                <div className="tagWraper">
                                    <p className="status anniversary">爆品</p>
                                    <p className="status gradientPrice">满赠</p>
                                </div>
                                <div className="desc">升级款双宫茧桑蚕丝被 子母被</div>
                                <p className="price">￥1230</p>
                            </li>
                            <li className="list">
                                <div className="item item-more">
                                    <span>更多饮食好物</span>
                                    <i className="iconfont icon-jiantou3"></i>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect(
    state=>state.home,
    actions
)(Home)