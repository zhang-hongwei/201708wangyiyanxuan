import show from '../../components/show/show';
import React, { Component } from 'react';
import Header from '../../components/header/header';
import './shop.less';
import Navs from '../../components/Navs/navs';
import Show from '../../components/show/show'
export default class extends Component {
    render() {
        return (
            <div className="z-shop">
                <Header></Header>
                <div className="z-wrap">
                    <div className="shoph">
                        <div className="iwrap"><img src={require('./img.png')} alt="" /></div>
                        <header className="header">
                            <div className="banner">Adidas制造商</div>
                            <div className="btn">上新提醒</div>
                        </header>
                        <div className="desc">
                            <div>严选找到为Adidas等品牌制造商，</div>
                            <div>选取优质原材料，与厂方一起设计，</div>
                            <div>为你提供好的理想的运动装备。</div>
                        </div>
                    </div>
                    <div className="m-sticky m-sticky-sticky m-sticky-mounted">
                        <div className="placeholder">
                        </div>
                       <Navs></Navs>
                    </div>
                    <div className="m-goodGrid">
                   <Show></Show>
                    </div>

                    <div className="m-ftWrap">
                        <div className="m-ft g-row">
                            <div className="bd">
                                <a className="goApp w-button">下载APP</a>
                                <a className="goWeb w-button">电脑版</a>
                            </div>
                                <p className="copyright">
                                    <span>网易公司版权所有 © 1997-</span>
                                    <span>2017</span>
                                    <br/>
                                    <span>食品经营许可证：JY13301080111719</span>
                                </p>
                        </div>
                    </div>

                 </div>
              </div>
                               
        )
    }
}