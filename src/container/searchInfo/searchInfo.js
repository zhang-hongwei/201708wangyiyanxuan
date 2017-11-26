
import Search from '../search/search';
import React, { Component } from 'react';
import SearchInput from '../../components/searchInput/searchInput'
import Navs from '../../components/Navs/navs'
import Show from '../../components/show/show'
import './searchInfo.less'
export default class searchInfo extends Component {
    render() {
        return (
            <div className="searchInfon">
               <div style={{height:"72px"}}>
                    <div className="m-hd">
                        <div className="m-topBar search">
                            <SearchInput></SearchInput>
                            <Navs className="nav"></Navs>
                        </div>
                    </div>
               </div>
                <div class="m-searchResult">
                    <div class="m-goodGrid">
                        <Show></Show>
                    </div>
                </div>                       
            </div>
        )
    }
}