/**
 * Created by xueln on 2017/11/21.
 */
import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import './index.less'
export default class Addr extends Component{
    render(){
        return (
            <div className="addr">

                <h2><Link to="/profile">地址管理</Link></h2>
                <button><Link to="/profile/addr/detail">+新建地址</Link></button>
            </div>
        )
    }
}