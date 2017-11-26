import React from "react";
import "./tab.less"
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import actions from '../../store/actions/profile'
@connect(null, actions)
export default class Tab extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [
                { title: '识物', link: 'identify', class: 'icon-zfx' },
                { title: '分类', link: 'classify', class: 'icon-fenlei3' },
                { title: '购物车', link: 'cart', class: 'icon-gwc' },
                { title: '个人', link: 'login', class: 'icon-geren' }
            ],

            currentIndex: 0
        }
    }

    componentWillMount() {
        let str = window.location.href.split('/#/')[1];
        this.state.data.forEach((item, index) => {
            if (item.link === str || str === 'login') {
                this.setState({ currentIndex: index + 1 });
            }
            console.log(str);
        });
    }

    componentDidMount() {
        this.props.validate();
    }

    handleClick(index) {
        
        this.setState({
            currentIndex: index
        })
    }

    render() {
        return (
            <div className="m-tabBar">
                <NavLink 
                className={`item ${!this.state.currentIndex ? 'cur' : ''}`} 
                onClick={() => this.handleClick(0)} 
                exact 
                to="/">
                    <i className="iconfont icon-shouye4"></i>
                    <span>首页</span>
                </NavLink>
                {
                    this.state.data.map((item, index) => (
                        <NavLink
                            onClick={() => this.handleClick(index + 1)}
                            to={`/${item.link}`}
                            className={`item ${this.state.currentIndex === index + 1 ? 'cur' : ''}`}
                            key={index}
                        >
                            <i className={`iconfont ${item.class}`}></i>
                            <span>{item.title}</span>
                        </NavLink>
                    ))
                }
            </div>
        )
    }
}
