import React,{Component} from 'react';
import './index.less';
import {NavLink} from "react-router-dom"
export default class ClassifyofHeader extends Component{
    render(){
        return (
            <div className="ClassifyofHeader">
                    <NavLink to="/classify" className="span-left">⇦</NavLink><span className="span-min">推荐区</span>
                    <NavLink to="/search" className="iconfont icon-sousuo">
                    </NavLink>
            </div>
        )
    }
}
