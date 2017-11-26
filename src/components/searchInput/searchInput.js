import React, { Component } from 'react';
import './searchInput.less'
const host = 'http://localhost:3000';
export default class SearchInput extends Component {

   handleSearch=(e)=>{
       console.log(e.keyCode)
       let keyword = e.target.value
    function get(url) {
        // console.log(keyword)
        console.log("++")
           return fetch(host + url, {
                method: 'GET',
                credentials: "include",
                headers: {
                   "Accept": "application/json"
                },
           }).then(res => res.json())
       }

       function getCup(keyword) {
        
           get(`/cup?str=${str}&keyword=${keyword}`)
       }

    }
      


    render() {
        return (
       
                <div className="bd">
                    <div className="row active">
                        <form className="m-searchIptWrap searchIpt" role="search" action="/search">
                            <div className="m-ipt m-searchIpt">
                                <input type="search" onKeyUp={this.handleSearch} className="ipt" placeholder="输入内容" />
                                <i className="iconfont icon-sosuo"></i>
                            </div>
                        </form>
                        <span className="cancel">取消</span>
                    </div>
                </div>
            
        )
    }
}