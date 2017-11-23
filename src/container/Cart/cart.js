import React from "react";
import "./cart.less"
export default class Cart extends React.Component{
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
                    <div className="shopping-cart">
                        <input type="radio" className="cart-check"/>
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
                    <div className="shopping-cart">
                        <input type="radio" className="cart-check"/>
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
                    <div className="shopping-cart">
                        <input type="radio" className="cart-check"/>
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
                    <div className="shopping-cart">
                        <input type="radio" className="cart-check"/>
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

                <div className="cart-love">
                    <span className="cart-like">猜你喜欢</span>
                    <ul className="cart-likes">
                        <li><img src={cd[0]} alt=""/>
                            <span>德式保温杯</span><p>￥119</p></li>
                        <li><img src={cd[0]} alt=""/>
                            <span>德式保温杯</span><p>￥119</p></li>
                        <li><img src={cd[0]} alt=""/>
                            <span>德式保温杯</span><p>￥119</p></li>
                        <li><img src={cd[0]} alt=""/>
                            <span>德式保温杯</span><p>￥119</p></li>
                        <li><img src={cd[0]} alt=""/>
                            <span>德式保温杯</span><p>￥119</p></li>
                        <li><img src={cd[0]} alt=""/>
                            <span>德式保温杯</span><p>￥119</p></li>
                    </ul>
                </div>

            </div>
        )
    }
}
