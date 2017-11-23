import React from "react";
import {NavLink} from "react-router-dom";
import "./navHeader.less"
export default class NavHeader extends React.Component{
    render(){
        return(
            <div className="tabs">
                <NavLink exact to="/">推荐</NavLink>
                <NavLink to="/details1">居家</NavLink>
                {/*<NavLink to="/details1">餐厨</NavLink>
                <NavLink to="/details1">酷件</NavLink>
                <NavLink to="/details1">服装</NavLink>
                <NavLink to="/details1">电器</NavLink>
                <NavLink to="/details1">洗护</NavLink>
                <NavLink to="/details1">杂货</NavLink>
                <NavLink to="/details1">饮食</NavLink>
                <NavLink to="/details1">婴童</NavLink>
                <NavLink to="/details1">志趣</NavLink>
                <NavLink to="/details1">推荐</NavLink>*/}
            </div>
        )
    }
}