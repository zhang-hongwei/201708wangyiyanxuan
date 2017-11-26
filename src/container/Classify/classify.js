import React from "react";
import "./classify.less"
import ClassifyHeader from './ClassifyHeader/index'
import ClassContent from './ClassContent/index'
import {connect} from "react-redux"
import action from '../../store/actions/list'
class Classify extends React.Component{
    componentDidMount() {
        if(this.props.list.length== 0){
            this.props.getlists()
        }   
    }
    
    render(){
        return(
            <div className="Classify">
                <ClassifyHeader/>
                <ClassContent
                    list={this.props.list}
                />
            </div>
        )
    }
}
export default connect(
    state => state.list,
    action
)(Classify)

