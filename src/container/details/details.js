import React, { Component } from 'react';
import './details.less'
import Header from '../../components/header/header'
export default class Details extends Component {
    render() {
        return (
            <div>
                 <Header></Header>
                 <div className="m-detail-con">
                    <div className="m-detail-slide-con">
                        <div className="m-slide">
                            <img src={require('./12.png')} alt=""/>
                        </div>
                    </div>
                    <div className="m-characteristic">
                        <div className="item">
                            <div className="left">
                                <img src={"http://yanxuan.nosdn.127.net/2810873bc879492cab8fa2ac79db5ec9.png"}/>
                            </div>
                            <div className="right">
                                <div className="text">耐温抗摔</div>
                                <div className="text">安全无毒</div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="left">
                                <img src={"http://yanxuan.nosdn.127.net/2dc86de37aed615e99db8a17e6d7ab11.png"} />
                            </div>
                            <div className="right">
                                <div className="text">两种滤网</div>
                                <div className="text">一杯多用</div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="left">
                                <img src={"http://yanxuan.nosdn.127.net/d282518590243688c2afc71aa77b177c.png"} />
                            </div>
                            <div className="right">
                                <div className="text">水量刻度</div>
                                <div className="text">减震提手</div>
                            </div>
                        </div>
                    </div>
                    <div className="dt-section-1">
                        <div className="m-detailBaseInfo">
                            <div className="content">
                                <div className="info">
                                    <div className="name">酷畅城市运动水杯 700ml</div>
                                    <div className="desc">新型材质 大容量广口畅饮</div>
                                    <div className="price">
                                        <span className="priceArea">
                                            <span className="currentPrice">
                                                <span>¥</span>
                                                <span>49</span>
                                            </span>
                                        </span>
                                    </div>
                                    <div className="tagList">
                                        <span></span>
                                        <div className="wrap">
                                            <li className="item">
                                                <span>
                                                    <a className="tag" href="/item/manufacturer?tagId=1001003&amp;page=1&amp;size=100">
                                                        <span>Adidas制造商</span>
                                                        <i className="u-icon u-icon-detailTagArrow"></i>
                                                    </a>
                                                </span>
                                            </li>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment">
                                    <div className="wrap">
                                        <div className="num">999+</div>
                                        <div className="com">用户评价</div>
                                        <div className="more">查看</div>
                                    </div>
                                </div>
                            </div>
                            <div className="specSelect">
                                <div className="m-listItem undefined ">
                                    <div className="inner ">
                                        <div className="inner ">
                                            <span className="it">请选择规格数量</span>
                                        </div>
                                    </div>
                                    <i className="icon u-icon u-address-right "></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="m-btnGroup">
                        <div className="inner">
                            <button className="w-button w-button-xxl w-button-noRadius btn btn-icon w-button-ghostWhite">
                                <i name="detail-kefu" className="u-icon u-icon-detail-kefu "></i>
                            </button>
                            <button className="w-button w-button-xxl w-button-noRadius btn btn-text w-button-ghostWhite">立即购买</button>
                            <button className="w-button w-button-xxl w-button-noRadius btn btn-text">加入购物车</button>
                        </div>
                    </div>
        
                </div>
            </div>
        )
    }
}