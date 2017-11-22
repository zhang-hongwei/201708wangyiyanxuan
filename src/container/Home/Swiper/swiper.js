import React from "react";
import ReactSwipe from "react-swipe"
import "./swiper.less"
export default class Swiper extends React.Component {
    constructor() {
        super();
        this.state = {index: 0}
    }

    render() {
        let swiperOptions = {
            //continuous: true,
            //auto: 2000,
            callback: (index) => {
                this.setState({index});
            }
        }
        return (
            <div className="carousel-wrapper">
                <ReactSwipe className="carousel" swipeOptions={swiperOptions}>
                    {
                        this.props.swiper.map((item, index) => (

                            <li className="swiper" key={index}>
                                <div className="item">
                                <img src={item} alt=""/>
                                <div className="outer">
                                    <div className="tagWraper">
                                    <p className="status anniversary">爆品</p>
                                    <p className="status gradientPrice">满赠</p>
                                </div>
                                    <div className="title">一等精选鸭绒,柔暖蓬松</div>
                                    <div className="desc">女式超轻便携羽绒服</div>
                                    <div>
                                        <span className="price">￥649</span>
                                    </div>
                                </div>
                                </div>
                                <div className="item">
                                    <img src={item} alt=""/>
                                    <div className="outer">
                                        <div className="tagWraper">
                                            <p className="status anniversary">爆品</p>
                                            <p className="status gradientPrice">满赠</p>
                                        </div>
                                        <div className="title">一等精选鸭绒，柔暖蓬松</div>
                                        <div className="desc">女式超轻便携羽绒服</div>
                                        <div>
                                            <span className="price">￥649</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ReactSwipe>
            </div>
        )
    }
}