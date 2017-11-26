import React from "react";
import "./homeHeader.less"
import {NavLink} from "react-router-dom"
export default class HomeHeader extends React.Component {
    render() {
        return (
                <NavLink className="m-header" to="/searchs">
                    <div className="m-line">
                        <h1 href="/" className="logo"></h1>
                        <input className="m-search" type="text" placeholder="搜索商品, 共10432款好物"/>
                        <i className="iconfont icon-sousuo"></i>
                    </div>
                </NavLink>
        )
    }

}