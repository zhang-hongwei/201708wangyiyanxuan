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
            <div className="wrapper">
                <div className="mh">
                <div className="header">
                    <HomeHeader/>
                </div>
                <NavHeader/>
            </div>
                <div ref="content" className="content">
                    <div className="pic">
                        <img src="http://yanxuan.nosdn.127.net/98e3b6db1e11c9b416fbe1e73a3c0bbb.jpg?quality=85&thumbnail=750x0&imageView" alt=""/>
                    </div>
                    <div className="m-content">
                        <h3 className="m-hd">床品件套</h3>
                        <ul className="list">
                            {
                                this.props.products.list.map((item,index)=>(                               

                                    <li className="item" key={index} >
                                        <a className="good" href="javascript:;">
                                            <div className="hd">
                                                <div className="wraper">
                                                    <div className="m-lazyload">
                                                        <img src={item.wapBannerUrl} />
                                                    </div>
                                                </div>
                                                <div className="desc" >{item.frontDesc}</div>
                                            </div>
                                            <div className="tagWraper">
                                                <p class="status newItem">热卖</p>
                                            </div>
                                            <div className="name">{item.frontName}</div>
                                            <div className="newItemDesc"></div>
                                            <div className="price">
                                                <span>
                                                    <span>
                                                        <span>¥</span>
                                                        <span>79</span>
                                                    </span>
                                                </span>
                                            </div>
                                        </a>
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