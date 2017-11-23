import React from "react";
import "./classify.less"
import ClassifyHeader from './ClassifyHeader/index'
import ClassContent from './ClassContent/index'
export default class Classify extends React.Component{
    render(){
        return(
            <div className="Classify">
                <ClassifyHeader/>
                <ClassContent/>
            </div>
        )
    }
}

