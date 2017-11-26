import React from "react";
import "./app.less"

import {HashRouter as Router, Route, NavLink} from "react-router-dom"
import {ConnectedRouter} from 'react-router-redux'
import createHistory from 'history/createHashHistory'

import Home from "../Home/home";
import Identify from "../Identify/identify";
import Profile from "../Profile/index.js";
import Login from '../Login/index.js'
import Register from '../Register/index.js'
import RegSuc from '../RegSuc/index.js'
import Cart from "../Cart/cart";

import Classify from "../Classify/classify";
import Addr from '../Profile/Addr/index'
import AddrDetail from '../Profile/Addr/Detail/index'
import Forget from '../Forget/index'
import Classifyof from "../Classifyof/classifyof";
import Tab from "../../components/Tab/tab";

const history = createHistory();
export default class App extends React.Component {
    render() {
        const RouteWithSubRoutes = (route) => (
            <Route path={route.path} render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes}/>
            )}/>
        )

        return (
            <ConnectedRouter history={history}>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/identify" component={Identify}/>
                    <Route path="/classify" component={Classify}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/profile" component={Profile} />
                    
                    <Route exact path="/profile/addr" component={Addr} />
                    <Route exact path="/profile/addr/detail" component={AddrDetail} />

                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/regsuc" component={RegSuc}/>
                    <Route path="/forget" component={Forget}/>
                  
                    <Route path="/classifyof" component={Classifyof} />
                    <Tab/>
                </div>
            </ConnectedRouter>
        )
    }
}