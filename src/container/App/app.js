import React from "react";
import "./app.less"
import {HashRouter as Router, Route, NavLink} from "react-router-dom"
import Home from "../Home/home";
import Identify from "../Identify/identify";
import Profile from "../Profile/profile";
import Cart from "../Cart/cart";
import Classify from "../Classify/classify";
import Tab from "../../components/Tab/tab";
export default class App extends React.Component{
    render(){
        return(
            <Router>
            <div>
               <Route exact path="/" component={Home}/>
               <Route  path="/identify" component={Identify}/>
               <Route  path="/classify" component={Classify}/>
               <Route  path="/cart" component={Cart}/>
               <Route  path="/profile" component={Profile}/>
                <Tab/>
            </div>
            </Router>
        )
    }
}