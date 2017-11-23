import React,{Component} from 'react';
import './index.less'
export default class ClassifyofContent extends Component{
    render(){
        let qw=[
            require('../../../images/1.jpg'),
            require('../../../images/2.jpg')
        ]
        return (
            <div className="ClassifyofContent">
                <div className="class-title">
                    <ul className="class-ul">
                        <li>美食特惠</li>
                        <li>99元选9</li>
                        <li>88元选5</li>
                        <li>热卖爆品</li>
                        <li>999+好评</li>
                        <li>丁磊推荐</li>
                        <li>明星推荐</li>
                    </ul>
                </div>
                <div className="class-shping">
                    <span className="shping-title">年度囤美食的好时机</span>
                    <ul className="shping-ul">
                        <li><img src={qw[0]} alt=""/>
                        <span>黑凤梨 皮皮虾</span>
                            <p>
                                ￥18
                            </p>
                        </li>
                        <li><img src={qw[0]} alt=""/>
                            <span>黑凤梨 皮皮虾</span>
                            <p>
                                ￥18
                            </p>
                        </li>
                        <li><img src={qw[0]} alt=""/>
                            <span>黑凤梨 皮皮虾</span>
                            <p>
                                ￥18
                            </p>
                        </li>
                        <li><img src={qw[0]} alt=""/>
                            <span>黑凤梨 皮皮虾</span>
                            <p>
                                ￥18
                            </p>
                        </li>
                        <li><img src={qw[0]} alt=""/>
                            <span>黑凤梨 皮皮虾</span>
                            <p>
                                ￥18
                            </p>
                        </li>

                    </ul>
                </div>

            </div>
        )
    }
}
