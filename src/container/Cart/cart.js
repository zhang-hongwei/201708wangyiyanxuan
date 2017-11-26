import classify from '../Classify/classify';
import React from "react";
import './cart.less';
export default class Cart extends React.Component{
    constructor(){
        super();
        this.state=({xuan:false})
    }
    render(){
        let cd=[
            require('../../images/1.jpg'),
            require('../../images/2.jpg')
        ]
        return(
            <div className="cart">
                <div className="cart-header">购物车</div>
                <div className="cart-main">
                    <ul className="cart-ul">
                        <li><span>০30天无忧退换货</span></li>
                        <li><span>০48小时快速退款</span></li>
                        <li><span>০满88元免邮费</span></li>
                    </ul>
                    {/*<span className="cart-bg">去添加点什么吧</span>*/}
                    <div className="cart-order">
                    <div className="shopping-cart">
                            <i className="iconfont"></i>
                        <div className="cart-user">
                            <img src={cd[0]} alt=""/>
                            <div className="cart-goods">
                                <p className="cart-name">男式毛领飞行棉服夹克</p>
                                <p className="cart-color">咖啡色：S(165/84A)</p>

                                <div className="cart-Number">
                                    <i className="cart-Price">￥649.00</i>
                                    <div className="cart-q">
                                        <span>-</span>
                                        <span>1</span>
                                        <span>+</span>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                   
                    </div>
                </div>
                <div className="payment">
                    <div className="payment-left">
                <div className="xuan">
                <i className="iconfont"></i>
                <span>已选(0)</span>
                </div>
                    <span>￥0.00</span>
                </div>
                <span className="xiadan">下单</span>
                </div>
                
            </div>
        )
    }
}
