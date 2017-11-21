/**
 * Created by xueln on 2017/11/19.
 */
import React,{Component} from 'react';
import './index.less';

import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import actions from '../../store/actions/profile';

import {ajax} from '../../util/index.js';
const urlPrefix = 'http://localhost:3000';
@connect(null,actions)
export default class Login extends Component{
    constructor(){
        super();
        this.state={
            username:'',
            psw:""
        }
    }
    setUsername=(e)=>{
        this.setState({
            username:e.target.value
        })
    }
    setPsw=(e)=>{
        this.setState({
            psw:e.target.value
        })
    }
    componentDidMount(){
     

    }
    login=(e)=>{
        e.preventDefault()
        let msg={username:this.user.value,psw:this.psw.value}
        console.log(msg)
        this.props.login(msg)
    }
    delname=()=>{
        this.setState({
            username:''
        })
    }
    delpsw=()=>{
        this.setState({
            psw:''
        })
    }
    render(){
        return (
            <div className="login" >
                <div className="move">
                    <h2>网易严选</h2>
                    <TransitionGroup className="show">
                        <CSSTransition timeout={1000} classNames="fade">
                            <img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1511231651&di=790b3d8d115755dc04d4712e36900d92&src=http://imgsrc.baidu.com/imgad/pic/item/7af40ad162d9f2d32af18ecba3ec8a136327cc36.jpg"/>
                        </CSSTransition>
                        <CSSTransition timeout={1000} classNames="fade">
                            <img src="http://img003.hc360.cn/hb/MTQ2MjI2OTMwMDc2NTEwNzI5MjgzMDk=.jpg"/>
                        </CSSTransition>
                    </TransitionGroup>
                </div>
                <form onSubmit={this.login}>
                    <p>
                        <input type="text" value={this.state.username} onChange={this.setUsername} placeholder="请输入用户名" required/>
                        {this.state.username?<i className="iconfont icon-cuowu" onClick={this.delname}></i>:null}
                    </p>
                    <p>
                        <input type="text" value={this.state.psw} onChange={this.setPsw} placeholder="密码" required/>
                        {this.state.psw?<i className="iconfont icon-cuowu" onClick={this.delpsw}></i>:null}
                    </p>
                    <p className="tip"><i className="iconfont icon-cuowu"></i>账号或密码错误</p>
                    <input type="submit" value="登录" className="btn" />
                </form>
                <p>
                    <Link to="/register"><span className="reg">注册账号</span></Link>
                    <Link to="/forget"><span className="forget-psw">忘记密码</span></Link>
                </p>
                <ul className="platform">
                    <li><i className="iconfont icon-weixin"></i>微信</li>
                    <li><i className="iconfont icon-qq"></i>QQ</li>
                    <li><i className="iconfont icon-sina"></i>微博</li>
                </ul>
            </div>
        )
    }
}