import React from "react";
import "./tab.less"
import {NavLink} from "react-router-dom"
export default class Tab extends React.Component{
    render(){
        return(
            <div className="tabs">
                <NavLink exact to="/">
                    <i className="iconfont icon-shouye"></i>
                    <span>首页</span>
                </NavLink>
                <NavLink to="/identify">
                    <i className="iconfont icon-nixiangyaozhao"></i>
                    <span>识物</span>
                </NavLink>
                <NavLink to="/classify">
                    <i className="iconfont icon-fenlei2"></i>
                    <span>分类</span>
                </NavLink>
                <NavLink to="/cart">
                    <i className="iconfont icon-gouwuche"></i>
                    <span>购物车</span>
                </NavLink>
                <NavLink to="/profile">
                    <i className="iconfont icon-geren"></i>
                    <span>个人</span>
                </NavLink>
            </div>
        )
    }
}
