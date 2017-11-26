import React from "react";
import "./searchs.less"
import SearchHeader from "../../components/SearchHeader/searchHeader";
import DropDown from "../DropDown/dropDown";
import {get} from '../../api/index';
import List from './list/list'

const host = 'http://localhost:3000';
export default class Searchs extends React.Component {

constructor(){
    super()
  this.state={
      data:[],
      data1:[]
  }
}
    handleInp = (e) => {      
      var _this = this
        let str = e.target.value;
        if(e.target.id=='inp'){
            function get(url) {
                return fetch(host + url, {
                    method: 'GET', credentials: "include", headers: {
                        "Accept": "application/json"
                    }
                }).then(res => res.json()).then(data => {
                      console.log(data)
                     _this.setState({
                         data:data
                     })
                })
            }
            get(`/searchinp?str=${str}`);
           
        }else{
            return
        }   
    } 

    handleClick=(e)=>{
let keyword=e.target.innerHTML

        var _this = this
        let str = e.target.value;
        if (e.target.tagName == 'LI') {
            function get(url) {
                return fetch(host + url, {
                    method: 'GET', credentials: "include", headers: {
                        "Accept": "application/json"
                    }
                }).then(res => res.json()).then(data => {
                    console.log(data)
                    _this.setState({
                        data1: data
                    })
                })
            }
            get(`/cupinfo?keyword=${keyword}`);
        } else {
            return
        }  

}

handleNull=()=>{
    this.setState({
        data:[]
    })
}

    render() {
       
        return (
            <div onKeyUp={this.handleInp}
            onClick={this.handleClick}
            className="search-details">
                 <SearchHeader data={this.handleNull}/>

                {/*<DropDown/>*/}
                {console.log(this.state.data1)}
                
                <div className="datainfo">
                    <ul>
                        {
                            this.state.data.length > 0 ? this.state.data.map((item, index) => (
                                <li key={index}>{item}</li>
                            )) : null
                        }
                    </ul>
                </div>

               
                  
                  
            </div>
        )
    }
}
