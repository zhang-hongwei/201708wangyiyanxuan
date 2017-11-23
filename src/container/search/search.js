import React,{Component} from 'react';
import './search.less';
import {NavLink} from "react-router-dom"
export default class Search extends Component{
    componentDidMount(){
        this.TextInput.focus();
    }
    render(){
        return (
            <div className="search">
                <div className="search-header">
                    <input ref={input=>this.TextInput=input} className="inp" type="text" placeholder="超好吃爆款网红" />
                    <NavLink to="/classify" className="cancel">取消</NavLink>
                </div>
                <div className="searchs">
                    <div className="recent-search">
                        <span>最近搜索</span>
                        <a>抢全场满400减800</a>
                        <a>抢全场满400减800</a>
                        <a>抢全场满400减800</a>
                        <a>抢全场满400减800</a>
                        <a>抢全场满400减800</a>
                        <a>抢全场满400减800</a>
                        <a>抢全场满400减800</a>
                        <a>抢全场满400减800</a>
                        <a>抢全场满400减800</a>
                        <a>抢全场满400减800</a>
                        <a>抢全场满400减800</a>
                        <a>抢全场满400减800</a>
                    </div>
                    <div className="hot-search">
                        <span>热门搜索</span>
                        <a className="ra">抢全场满400减800</a>
                        <a className="ra">抢全场满400减800</a>
                        <a className="ra">抢全800</a>
                        <a className="ra">抢</a>
                        <a>抢全场满400减800</a><a>抢全场满400减800</a>
                        <a>抢全场满400减800</a>
                        <a>抢全场满400减800</a>
                        <a>抢全场满400减800</a>
                    </div>
            </div>
            </div>
        )
    }
}
