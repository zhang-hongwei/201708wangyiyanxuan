import React from "react";
import "./homeHeader.less"
export default class HomeHeader extends React.Component{
    render(){
        return(
            <div className="wy-header">
                <div className="line">
                <a href="/" className="logo"></a>
                <div className="header-search">
                    <i className="iconfont icon-sousuo"></i>
                    <span className="txt">搜索商品, 共10432款好物</span>
                </div>
                </div>
                <div className="header-tab">
                   <div className="tab-inner">
                       <div className="inner-list">
                           <div className=""></div>
                       </div>
                   </div>
                </div>
            </div>
        )
    }
}