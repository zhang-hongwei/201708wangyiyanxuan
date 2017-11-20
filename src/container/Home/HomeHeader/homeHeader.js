import React from "react";
import "./homeHeader.less"
export default class HomeHeader extends React.Component{
    render(){
        return(
            <div className="m-header">
                <div className="line">
                <a href="/" className="logo"></a>
                <div className="header-search">
                    <i className="iconfont icon-sousuo"></i>
                    <span className="txt">搜索商品, 共10432款好物</span>
                </div>
                </div>
                {/*<div className="m-tabs">
                   <div className="inner">
                       <div className="list">
                           <div className="tab">
                               <span className="txt1">推荐</span>
                           </div>
                           <div className="tab">
                               <span className="txt1">居家</span>
                           </div>
                           <div className="tab">
                               <span className="txt1">餐厨</span>
                           </div>
                           <div className="tab">
                               <span className="txt1">配件</span>
                           </div>
                           <div className="tab">
                               <span className="txt1">服装</span>
                           </div>
                           <div className="tab">
                               <span className="txt1">电器</span>
                           </div>
                           <div className="tab">
                               <span className="txt1">洗护</span>
                           </div>
                           <div className="tab">
                               <span className="txt1">杂货</span>
                           </div>
                           <div className="tab">
                               <span className="txt1">饮食</span>
                           </div>
                           <div className="tab">
                               <span className="txt1">婴童</span>
                           </div>
                           <div className="tab">
                               <span className="txt1">志趣</span>
                           </div>
                       </div>
                   </div>
                </div>*/}
            </div>
        )
    }
}