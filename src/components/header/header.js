import React, { Component } from 'react';
import './header.less'
import {Link} from 'react-router-dom';
export default class Header extends Component {
    render() {
        return (
            <div className="z-hd">
                <div className="m-hd">
                    <a to="/" className="iconfont icon-shouye4"></a>
                    <a to="/" className="iconzi" >
                     
                    </a>
                   <div className="right">
                        <a to="/search" className="iconfont icon-search"></a>
                        <a to="/search" className="iconfont icon-gwc"></a>
                   </div>
                </div>                 
            </div>
        )
    }
}