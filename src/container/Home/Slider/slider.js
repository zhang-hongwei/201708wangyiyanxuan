import React from "react";
import "./slider.less"
import ReactSwipe from 'react-swipe';
export default class Slider extends React.Component{
    constructor(){
        super();
        this.state={index:0}
    }
    render(){
        let sliderOptions={
            continuous:true,
            auto:1000,
            callback:(index)=>{
                this.setState({index});
            }
        }
        return(
                <div className="carousel-wrapper">
                    <ReactSwipe className="carousel" sliderOptions={sliderOptions}>
                        {
                            this.props.images.map((item,index)=>(
                            <li className="slider" key={index}>
                            <img src={item} alt=""/>
                            </li>
                            ))
                        }
                    </ReactSwipe>
                </div>
        )
    }
}