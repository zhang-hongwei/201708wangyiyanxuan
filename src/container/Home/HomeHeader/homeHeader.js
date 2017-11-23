import React from "react";
import "./homeHeader.less"

export default class HomeHeader extends React.Component {
    render() {
        return (
            <div>
                <div className="m-header">
                    <div className="line">
                        <a href="/" className="logo"></a>
                        <input className="search" type="text" placeholder="搜索商品, 共10432款好物"/>
                        <i className="iconfont icon-sousuo"></i>
                    </div>
                </div>
                {/*<ul className="m-tabs">
                    <li>推荐</li>
                    <li>推荐</li>
                    <li>推荐</li>
                    <li>推荐</li>
                    <li>推荐</li>
                    <li>推荐</li>
                    <li>推荐</li>
                    <li>推荐</li>
                    <li>推荐</li>
                    <li>推荐</li>
                    <li>推荐</li>
                </ul>*/}
            </div>
        )
    }

}