import React from "react";
import "./tab.less"
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import actions from '../../store/actions/profile'
@connect(null, actions)
export default class Tab extends React.Component {

    render() {
        return (
            <div className="m-tabBar">
                <NavLink 
                className="item" 
                
                to="/">
                    <i className="iconfont icon-shouye4"></i>
                    <span>首页</span>
                </NavLink>
               
                <NavLink className="item" to="/classify">
                    <i className="iconfont icon-fenlei3"></i>
                    <span>分类</span>
                </NavLink>
                <NavLink className="item" to="/cart">
                    <i className="iconfont icon-gouwuche"></i>
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
