import React from "react";
import "./app.less"

import {HashRouter as Router, Route, NavLink} from "react-router-dom"
import {ConnectedRouter} from 'react-router-redux'
import createHistory from 'history/createHashHistory'

>>>>>>> 3ca98801e6c3707d4e58fbbdba4eb5838c956dff
import Home from "../Home/home";
import Identify from "../Identify/identify";
import Profile from "../Profile/index.js";
import Login from '../Login/index.js'
import Register from '../Register/index.js'
import RegSuc from '../RegSuc/index.js'
import Cart from "../Cart/cart";
import Classify from "../Classify/classify";
import Search from "../Search/search";
import Classifyof from "../Classifyof/classifyof";
import Tab from "../../components/Tab/tab";
<<<<<<< HEAD
export default class App extends React.Component{
    render(){
        return(
            <Router>
            <div>
               <Route exact path="/" component={Home}/>
               <Route  path="/identify" component={Identify}/>
               <Route  path="/classify" component={Classify}/>
               <Route  path="/search" component={Search}/>
               <Route  path="/classifyof" component={Classifyof}/>
               <Route  path="/cart" component={Cart}/>
               <Route  path="/profile" component={Profile}/>
                <Tab/>
            </div>
            </Router>
=======
import Forget from '../Forget/index'
import Addr from '../Profile/Addr/index'
import AddrDetail from '../Profile/Addr/Detail/index'
import Search from '../search/search'

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
                    <Route path="/identify" component={Identify}/>
                    <Route path="/classify" component={Classify}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/profile" component={Profile} exact>
                    </Route>
                    <Route path="/profile/addr" component={Addr} exact></Route>
                    <Route path="/profile/addr/detail" component={AddrDetail}></Route>

                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/regsuc" component={RegSuc}/>
                    <Route path="/forget" component={Forget}/>
                    <Route path="/search" component={Search} />
                    <Tab/>
                </div>
            </ConnectedRouter>
>>>>>>> 3ca98801e6c3707d4e58fbbdba4eb5838c956dff
        )
    }
}