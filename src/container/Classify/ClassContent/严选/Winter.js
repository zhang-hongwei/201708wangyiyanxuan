import React,{Component} from 'react';
import './index.less'
import { HashRouter as Router, Route, NavLink} from "react-router-dom"
import {connect} from 'react-redux'
import action from '../../../store/actions/list'
    let ad=[
        require('../../../images/1.jpg'),
        require('../../../images/2.jpg')
    ]
export default class Winter extends Component {
    render() {
        console.log(123)
        return (
            <div className="content-main">
                <img className="content-img" src={ad[0]} alt="" />
                <span className="content-title">—冬季专区分类—</span>
                <ul>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt="" /><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt="" /><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt="" /><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt="" /><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt="" /><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt="" /><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt="" /><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt="" /><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt="" /><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt="" /><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt="" /><span>冬季美食</span></NavLink></li>
                </ul>
            </div>
        )
    }
}