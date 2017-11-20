import React from "react";
import "./app.less"
import {HashRouter as Router, Route, NavLink} from "react-router-dom"
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createHashHistory'

import Home from "../Home/home";
import Identify from "../Identify/identify";
import Profile from "../Profile/index.js";
import Login from '../Login/index.js'
import Register from '../Register/index.js'
import RegSuc from '../RegSuc/index.js'
import Cart from "../Cart/cart";
import Classify from "../Classify/classify";
import Tab from "../../components/Tab/tab";

const history = createHistory();
export default class App extends React.Component{
    render(){
        return(
            <ConnectedRouter history={history}>
            <div>
               <Route exact path="/" component={Home}/>
               <Route  path="/identify" component={Identify}/>
               <Route  path="/classify" component={Classify}/>
               <Route  path="/cart" component={Cart}/>
               <Route  path="/profile" component={Profile}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/regsuc" component={RegSuc}/>
                <Tab/>
            </div>
            </ConnectedRouter>
        )
    }
}