import React, { Component } from 'react';
import './searchInput.less'
export default class SearchInput extends Component {
    render() {
        return (
       
                <div className="bd">
                    <div className="row active">
                        <form className="m-searchIptWrap searchIpt" role="search" action="/search">
                            <div className="m-ipt m-searchIpt">
                                <input type="search" className="ipt" placeholder="松下制造商按摩椅券后直降375元" />
                                <i className="iconfont icon-sosuo"></i>
                            </div>
                        </form>
                        <span className="cancel">取消</span>
                    </div>
                </div>
            
        )
    }
}