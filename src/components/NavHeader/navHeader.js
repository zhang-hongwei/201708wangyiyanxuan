import React from "react";
import {NavLink} from "react-router-dom";
import "./navHeader.less"
export default class NavHeader extends React.Component{
    render(){
        return(
            <div className="nav-header">
                <NavLink exact to="/">推荐</NavLink>
                <NavLink to="/details1">居家</NavLink>
            </div>
        )
    }
}