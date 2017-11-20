import React,{Component} from "react";
import ReactDOM  from "react-dom"
//import App from "./container/App/app";
import img from '../server/mock/sliders';
let Img = {a:require('./2.jpg')}
import {ajax} from './util/index.js'


const urlPrefix = 'http://localhost:3000'
class App extends Component{
   constructor(){
       super()
       this.state={
           img:[]
       }
   }


componentDidMount(){

    ajax({
        method: 'GET',
        url: `${urlPrefix}/sliders`,
    }).then((value) => {

     this.setState({
        img:value
     })

    }).catch((err) => {
    })

}



    render(){
        return (
        
          <div><img src={this.state.img[1]} alt=""/></div>
        )
    }
}


ReactDOM.render(<App/>,document.querySelector("#root"))