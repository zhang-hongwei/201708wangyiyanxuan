<<<<<<< HEAD
import React,{Component} from 'react';
import './index.less'
import {connect} from 'react-redux'
import actions from '../../store/actions/profile'
@connect(state=>state.profile,actions)
export default class Profile extends Component{
    componentDidMount(){
        console.log(this.props)
        if(!this.props.user.username){//未登录
            this.props.history.push('/login')//跳到登录页

        }
    }
    esc=()=>{

    }
    render(){
        return (
            <div className="person">
                <div className="user-basic">
                    <i className="iconfont icon-morentouxiang"></i>
                    <div>
                        <p>{this.props.user.username}</p>
                        <p className="level">用户等级</p>
                    </div>
                </div>
                <ul className="user-have">
                    <li><i className="iconfont icon-morentouxiang"></i>我的订单</li>
                    <li><i className="iconfont icon-jiari"></i>周六一起拼</li>
                    <li><i className="iconfont icon-shouhou1"></i>售后服务</li>
                    <li><i className="iconfont icon-youhuiquan"></i>优惠券</li>
                    <li><i className="iconfont icon-hongbao"></i>我的红包</li>
                    <li><i className="iconfont icon-youxiangou"></i>优先购</li>
                    <li><i className="iconfont icon-lipinqia"></i>礼品卡</li>
                    <li><i className="iconfont icon-jifen3"></i>积分中心</li>
                    <li><i className="iconfont icon-huiyuanjulebu"></i>会员俱乐部</li>
                    <li><i className="iconfont icon-dizhi"></i>地址管理</li>
                    <li><i className="iconfont icon-zhanghaoanquan"></i>账号安全</li>
                    <li><i className="iconfont icon-iconfontzaixiankefu"></i>联系客服</li>
                    <li><i className="iconfont icon-bangzhuzhongxin"></i>帮助中心</li>
                    <li><i className="iconfont icon-yijianfankui"></i>意见反馈</li>
                </ul>
                <div className="logout" onClick={this.esc}>
                    退出登录
                </div>
            </div>
        )
    }
=======
import React,{Component} from 'react';
import './index.less'
import {connect} from 'react-redux'
import actions from '../../store/actions/profile'
import {Link} from 'react-router-dom'
@connect(state=>state.profile,actions)
export default class Profile extends Component{
    componentDidMount(){
        console.log(this.props)
        if(!this.props.user.username){//未登录
            this.props.history.push('/login')//跳到登录页

        }
    }
    esc=()=>{

    }
    render(){
        return (
            <div className="person">
                <div className="user-basic">
                    <i className="iconfont icon-morentouxiang"></i>
                    <div>
                        <p>{this.props.user.username}</p>
                        <p className="level">用户等级</p>
                    </div>
                </div>
                <ul className="user-have">
                    <li><i className="iconfont icon-morentouxiang"></i>我的订单</li>
                    <li><i className="iconfont icon-jiari"></i>周六一起拼</li>
                    <li><i className="iconfont icon-shouhou1"></i>售后服务</li>
                    <li><i className="iconfont icon-youhuiquan"></i>优惠券</li>
                    <li><i className="iconfont icon-hongbao"></i>我的红包</li>
                    <li><i className="iconfont icon-youxiangou"></i>优先购</li>
                    <li><i className="iconfont icon-lipinqia"></i>礼品卡</li>
                    <li><i className="iconfont icon-jifen3"></i>积分中心</li>
                    <li><i className="iconfont icon-huiyuanjulebu"></i>会员俱乐部</li>
                    <li><i className="iconfont icon-dizhi"></i><Link to="/profile/addr">地址管理</Link></li>
                    <li><i className="iconfont icon-zhanghaoanquan"></i>账号安全</li>
                    <li><i className="iconfont icon-iconfontzaixiankefu"></i>联系客服</li>
                    <li><i className="iconfont icon-bangzhuzhongxin"></i>帮助中心</li>
                    <li><i className="iconfont icon-yijianfankui"></i>意见反馈</li>
                </ul>
                <div className="logout" onClick={this.esc}>
                    退出登录
                </div>
            </div>
        )
    }
>>>>>>> dd754aa8dd506f47e96b81592bee34fce17bc36c
}