/**
 * Created by xueln on 2017/11/19.
 */
import React,{Component} from 'react';
import './index.less';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import actions from '../../store/actions/profile'
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
                <form onSubmit={this.login}>
                    <p>
                        <input type="text" value={this.state.username} onChange={this.setUsername} placeholder="请输入用户名" required/>
                        {this.state.username?<i className="iconfont icon-cuowu" onClick={this.delname}></i>:null}
                    </p>
                    <p>
                        <input type="text" value={this.state.psw} onChange={this.setPsw} placeholder="密码" required/>
                        {this.state.psw?<i className="iconfont icon-cuowu" onClick={this.delpsw}></i>:null}
                    </p>
                    <p className="tip"><i className="iconfont icon-cuowu"></i>错误</p>
                    <input type="submit" value="登录" className="btn" />
                </form>
                <p>
                    <Link to="/register"><span className="reg">注册账号</span></Link>
                    <Link to="/"><span className="forget">忘记密码</span></Link>
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