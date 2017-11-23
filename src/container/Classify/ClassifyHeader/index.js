import React,{Component} from 'react';
import './index.less';
import {NavLink} from "react-router-dom"
export default class ClassifyHeader extends Component{
    render(){
        return (
                <div  className="ClassifyHeader">
                    <NavLink to="/search" className="home-header">
                        <i className="iconfont icon-sousuo"></i>
                        <span className="txt">搜索商品, 共10432款好物</span>
                </NavLink>

            </div>
        )
    }
}
