import React,{Component} from 'react';
import './index.less'
import { HashRouter as Router, Route, NavLink} from "react-router-dom"
import {connect} from 'react-redux'
import action from '../../../store/actions/list'
class Recommend extends Component {
    componentDidMount() {
        if(this.props.list.length== 0){
            this.props.getlists()
        }
    }
    render() {
        let ad=[
            require('../../../images/1.jpg'),
            require('../../../images/2.jpg')
        ]
        console.log(this.props.list[0]);
        return (
            <div className="content-main">
                <img className="content-img" src={ad[0]} alt="" />
                <span className="content-title">—冬季专区分类—</span>
                <ul>
                    {
                        this.props.list.map((item, index) => (
                        <li key={index=1}>
                            {
                                item.subCateList.map((item,index)=>(
                                    <NavLink to="/classifyof" key={item.id}>
                                <img src={item.bannerUrl} alt=""/>
                                    <span>{}</span>
                                    </NavLink>
                                ))
                            }

                        </li>
                        )
                        )
                    }

                </ul>
            </div>
        )
    }
}
export default connect(
    state => state.list,
    action
)(Recommend)