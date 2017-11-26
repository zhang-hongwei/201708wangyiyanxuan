import React from "react";
import "./dropDown.less"
export default class DropDown extends React.Component{
    render(){
        return(
            <ul className="drop-down">
                <li className="list">水杯</li>
                <li className="list">运动水杯</li>
                <li className="list">陶瓷水杯</li>
                <li className="list">陶瓷水杯</li>
                <li className="list">陶瓷水杯</li>
            </ul>
        )
    }
}