/**
 * Created by xueln on 2017/11/20.
 */
import React,{Component} from 'react';
import './index.less';
import {Link} from 'react-router-dom'
export default class RegSuc extends Component{
    constructor(){
        super();
        this.state={
            time:8
        }
    }
    componentDidMount(){
        console.log(this.state.time)


            this.timer=setInterval(()=>{
                if(this.state.time>0){
                    this.setState({
                        time:this.state.time-1
                    })
                }else{
                    this.props.history.push('/login')
                }

            },1000)


    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    render(){
        return (
            <div className="regsuc">
                <ul>
                    <li><i className="iconfont icon-duigou"></i></li>
                    <li><h1>恭喜你,</h1></li>
                    <li>谁已经注册成功</li>
                    <li className="jump"><span>{this.state.time}</span>s后自动<Link to="/login">返回登录页面</Link></li>
                </ul>
            </div>
        )
    }
}