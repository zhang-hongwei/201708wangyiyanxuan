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
<<<<<<< HEAD
            auto:2000,
=======
            auto:500,
>>>>>>> 5ea68eb60985c5481fc6875cf95886796550f0d2
            callback:(index)=>{
                this.setState({index});
            }
        }
        return(
                <div className="carousel-wrapper">
                    <ReactSwipe className="carousel" swipeOptions={sliderOptions}>
                        {
                            this.props.sliders.map((item,index)=>(

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