import React from "react";
import "./tab.less"
import {NavLink} from "react-router-dom"
export default class Tab extends React.Component{
    render(){
        return(
            <div className="m-tabBar">
                <NavLink className="item" exact to="/">
                    <i className="iconfont icon-shouye4"></i>
                    <span>首页</span>
                </NavLink>
                <NavLink className="item" to="/identify">
                    <i className="iconfont icon-zfx "></i>
                    <span>识物</span>
                </NavLink>
                <NavLink className="item" to="/classify">
                    <i className="iconfont icon-fenlei3"></i>
                    <span>分类</span>
                </NavLink>
                <NavLink className="item" to="/cart">
                    <i className="iconfont icon-gwc"></i>
                    <span>购物车</span>
                </NavLink>
                <NavLink className="item" to="/profile">
                    <i className="iconfont icon-geren"></i>
                    <span>个人</span>
                </NavLink>
            </div>
        )
    }
}
