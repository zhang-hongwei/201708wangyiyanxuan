import React,{Component} from 'react';
import './index.less'
import Recommend from './Recommend';
import Winter from './Winter';
import Travel from './Travel';
import Homes from './Homes';
import Cupboard from './Cupboard';
import Fitting from './Fitting';
import Clothing from './Clothing';
import Electric from './Electric';
import Care from './Care';
import Groceries from './Groceries';
import Diet from './Diet';
import Baby from './Baby';
import Inclination from './Inclination';
import { HashRouter as Router, Route, NavLink} from "react-router-dom"
import {connect} from 'react-redux'
import action from '../../../store/actions/list'
let ad=[
    require('../../../images/1.jpg'),
    require('../../../images/2.jpg')
]
const host = 'http://localhost:3000';
export default class ClassContent extends Component{
    constructor() {
        super();
        this.state = {
            Index:0
        }
    }
    Clickchenge(res){
        this.setState({
            Index:res
        })
    }
    render() {
        console.log(this.state.Index);
        return (

            <div className="content">
                <div className="content-sidebar">
                    <ul onClick={()=>this.turn}>
                    {
                        this.props.list.map((item,index)=>(
                            <li onClick={()=>this.Clickchenge(index)} key={index}><NavLink to={`/classify/${item.id}`}>{item.name}</NavLink></li>
                        ))
                    }
                    </ul>
                </div>
                <div className="branch">
                    {
                        this.props.list.map((item,index)=>(
                            <div className={`content-main ${this.state.Index === index? 'blo' : ''}`} key={item.id}>
                                <img className="content-img" src={item.bannerUrl} alt="" />
                                <span className="content-title">—{item.name}分类—</span>
                                <ul>
                                {
                                    item.subCateList.map((item,index)=>(
                                            <li key={item.id}><NavLink to="/classifyof"><img src={item.bannerUrl} alt=""/><span>{item.name}</span></NavLink></li>
                                    ))
                                }
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}



