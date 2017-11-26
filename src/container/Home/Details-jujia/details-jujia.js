import React from "react";
import "./details-jujia.less"
import HomeHeader from "../../../components/HomeHeader/homeHeader";
import NavHeader from "../../../components/NavHeader/navHeader";
import {connect} from "react-redux"
import actions from "../../../store/actions/home"
import {upPull} from "../../../util/home"
class Details1 extends React.Component{
    componentDidMount(){
      this.props.getProducts();
      upPull(this.refs.content,this.props.getProducts);
    }
    render(){
        return(
            <div className="li-wrapper">
                <div className="mh">
                <div className="header">
                    <HomeHeader/>
                </div>
                <NavHeader/>
            </div>
                <div ref="content" className="content">
                    <div className="pic">
                        <img src="/" alt=""/>
                    </div>
                    <div className="m-content">
                        <h3 className="m-hd">床品件套</h3>
                        <ul className="products">
                            {
                                this.props.products.list.map((item,index)=>(
                                    <li className="list" key={index}>
                                        <div className="item">
                                            <img className="omg" src={item.wapBannerUrl} alt="" />
                                            <p>{item.frontDesc}</p>
                                        </div>
                                        <div className="tagWraper">
                                            <p className="status anniversary">爆品</p>
                                            <p className="status gradientPrice">满赠</p>
                                        </div>
                                        <div className="desc">{item.frontName}</div>
                                        <p className="price">￥1230</p>
                                    </li>
                                    
                                ))
                            }
                          {/*  <li className="list">
                                <div className="item">
                                    <img src="http://yanxuan.nosdn.127.net/f7a369d446c68dd56e7f1e6220f65900.jpg?imageView&quality=65&thumbnail=330x330"
                                         alt="" />
                                    <p>双层子母被，四季皆可使用</p>
                                </div>
                                <div className="tagWraper">
                                    <p className="status anniversary">爆品</p>
                                    <p className="status gradientPrice">满赠</p>
                                </div>
                                <div className="desc">升级款双宫茧桑蚕丝被 子母被</div>
                                <p className="price">￥1230</p>
                            </li>
                            <li className="list">
                                <div className="item">
                                    <img src="http://yanxuan.nosdn.127.net/f7a369d446c68dd56e7f1e6220f65900.jpg?imageView&quality=65&thumbnail=330x330"
                                         alt="" />
                                    <p>双层子母被，四季皆可使用</p>
                                </div>
                                <div className="tagWraper">
                                    <p className="status anniversary">爆品</p>
                                    <p className="status gradientPrice">满赠</p>
                                </div>
                                <div className="desc">升级款双宫茧桑蚕丝被 子母被</div>
                                <p className="price">￥1230</p>
                            </li>*/}
                        </ul>
                        <div className="load-status">加载更多</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect(
    state=>state.home,
  actions
)(Details1)