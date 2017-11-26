import React, { Component } from "react";
import ReactDOM from "react-dom"
import App from "./container/App/app";
import { Provider } from 'react-redux';
import store from './store/index'

window.st = store

 ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"))

// ReactDOM.render(<Show/>, document.querySelector("#root"))


