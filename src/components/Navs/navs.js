import React, { Component } from 'react';
import './navs.less'
export default class Nav extends Component {
    render() {
        return (
            
                <div className="m-filter" >
                    <ul className="conditions">
                        <li className="item">
                            <div className="condition active" >
                                <div className="txt">综合</div>
                            </div>
                        </li>
                        <li className="item">
                            <div className="condition descAsc">
                                <div className="txt">上新</div>
                            </div>
                        </li>
                        <li className="item">
                            <div className="condition descAsc">
                                <div className="txt">价格</div>
                            </div>
                        </li>
                        <li className="item">
                            <div className="condition">
                                <div className="txt">分类</div>
                            </div>
                        </li>
                    </ul>
                    <div className="mask f-hidden">
                    </div>
                </div>
          
        )
    }
}