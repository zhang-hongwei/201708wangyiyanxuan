import React from "react";
import "./searchHeader.less"

export default class SearchHeader extends React.Component{
   
    render(){
        return(
            <div className="search-header">
                <div className="m-line">
                    <i className="iconfont icon-sousuo2"></i>
                    <input id="inp"
                    className="m-search" type="text" placeholder="搜索商品, 共10432款好物"/>
                   <span
                    onClick={()=>this.props.data()}
                    className="search-cancel">取消</span>
                </div>
            </div>
        )
    }
}