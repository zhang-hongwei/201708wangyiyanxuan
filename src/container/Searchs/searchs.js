import React from "react";
import "./searchs.less"
import SearchHeader from "../../components/SearchHeader/searchHeader";
import DropDown from "../DropDown/dropDown";

export default class Searchs extends React.Component {
    render() {
        return (
            <div className="search-details">
              <SearchHeader/>
                {/*<DropDown/>*/}
                <div className="search-content">
                    <div className="history">
                        <p className="history-txt">历史记录</p>
                        <i className="iconfont icon-shanchu"></i>
                    </div>
                    <div className="search-hot">
                        <p className="history-txt">热门搜索</p>
                        <div className="search-desc">
                        <a className="search-key" href="/">11月好物专享特惠</a>
                        <a className="search-key" href="/">围巾</a>
                        <a className="search-key" href="/">围巾</a>
                            <a className="search-key" href="/">围巾</a>
                        <a className="search-key" href="/">围巾</a>
                            <a className="search-key" href="/">11月好物专享特惠</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
