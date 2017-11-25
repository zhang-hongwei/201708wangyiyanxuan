import React, { Component } from 'react';
import './searchInput.less'
const host = 'http://localhost:3000';
export default class SearchInput extends Component {

   handleSearch=(e)=>{
 
       let keyword = e.target.value
    function get(url) {
        console.log(keyword)
           return fetch(host + url, {
                method: 'POST',
                credentials: "include",
                headers: {
                   "Accept": "application/json"
                },
                data:{
                    keyword:keyword
                }


           }).then(res => res.json())
       }
       get('/search')

    
   }

    render() {
        return (
       
                <div className="bd">
                    <div className="row active">
                        <form className="m-searchIptWrap searchIpt" role="search" action="/search">
                            <div className="m-ipt m-searchIpt">
                                <input type="search" onKeyDown={this.handleSearch} className="ipt" placeholder="输入内容" />
                                <i className="iconfont icon-sosuo"></i>
                            </div>
                        </form>
                        <span className="cancel">取消</span>
                    </div>
                </div>
            
        )
    }
}