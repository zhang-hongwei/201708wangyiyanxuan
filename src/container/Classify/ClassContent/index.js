import React,{Component} from 'react';
import './index.less'
//import ClassifyID from '../ClassifyID/index';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom"
let ad=[
    require('../../../images/1.jpg'),
    require('../../../images/2.jpg')
]
export default class ClassContent extends Component{
    render(){
        return (
            <div className="content">
                <div className="content-sidebar">
                    <ul id="qwe" ref={chenge=>this.ulcheng=chenge}>
                        <li><NavLink exact to="/classify">推荐区</NavLink></li>
                        <li><NavLink to="/classify/2">冬季专区</NavLink></li>
                        <li><NavLink to="/classify/3">出行专区</NavLink></li>
                        <li><NavLink to="/classify/4">居家</NavLink></li>
                        <li><NavLink to="/classify/5">橱柜</NavLink></li>
                        <li><NavLink to="/classify/6">配件</NavLink></li>
                        <li><NavLink to="/classify/7">服装</NavLink></li>
                        <li><NavLink to="/classify/8">电器</NavLink></li>
                        <li><NavLink to="/classify/9">洗护</NavLink></li>
                        <li><NavLink to="/classify/10">杂货</NavLink></li>
                        <li><NavLink to="/classify/11">饮食</NavLink></li>
                        <li><NavLink to="/classify/12">婴童</NavLink></li>
                        <li><NavLink to="/classify/13">志趣</NavLink></li>
                    </ul>
                </div>
                <div className="branch">
                    <Route exact path="/classify" component={Classify}/>
                    <Route exact path="/classify/2" component={Classify2}/>
                    <Route exact path="/classify/3" component={Classify3}/>
                    <Route exact path="/classify/4" component={Classify4}/>
                    <Route exact path="/classify/5" component={Classify5}/>
                    <Route exact path="/classify/6" component={Classify6}/>
                    <Route exact path="/classify/7" component={Classify7}/>
                    <Route exact path="/classify/8" component={Classify8}/>
                    <Route exact path="/classify/9" component={Classify9}/>
                    <Route exact path="/classify/10" component={Classify10}/>
                    <Route exact path="/classify/11" component={Classify11}/>
                    <Route exact path="/classify/12" component={Classify12}/>
                    <Route exact path="/classify/13" component={Classify13}/>
                </div>
            </div>
        )
    }
}

class Classify extends Component{
    render(){
        return (
            <div className="content-main">
                <img className="content-img" src={ad[0]} alt=""/>
                <span className="content-title">—推荐区分类—</span>
                <ul>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                </ul>
            </div>
        )
    }
}
class Classify2 extends Component{
    render(){
        return (
            <div className="content-main">
                <img className="content-img" src={ad[0]} alt=""/>
                <span className="content-title">—冬季专区分类—</span>
                <ul>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                </ul>
            </div>
        )
    }
}
class Classify3 extends Component{
    render(){
        return (
            <div className="content-main">
                <img className="content-img" src={ad[0]} alt=""/>
                <span className="content-title">—出行专区分类—</span>
                <ul>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                </ul>
            </div>
        )
    }
}
class Classify4 extends Component{
    render(){
        return (
            <div className="content-main">
                <img className="content-img" src={ad[0]} alt=""/>
                <span className="content-title">—居家专区分类—</span>
                <ul>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                </ul>
            </div>
        )
    }
}
class Classify5 extends Component{
    render(){
        return (
            <div className="content-main">
                <img className="content-img" src={ad[0]} alt=""/>
                <span className="content-title">—橱柜专区分类—</span>
                <ul>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                </ul>
            </div>
        )
    }
}
class Classify6 extends Component{
    render(){
        return (
            <div className="content-main">
                <img className="content-img" src={ad[0]} alt=""/>
                <span className="content-title">—配件专区分类—</span>
                <ul>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                </ul>
            </div>
        )
    }
}
class Classify7 extends Component{
    render(){
        return (
            <div className="content-main">
                <img className="content-img" src={ad[0]} alt=""/>
                <span className="content-title">—服装专区分类—</span>
                <ul>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                </ul>
            </div>
        )
    }
}
class Classify8 extends Component{
    render(){
        return (
            <div className="content-main">
                <img className="content-img" src={ad[0]} alt=""/>
                <span className="content-title">—电器专区分类—</span>
                <ul>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                </ul>
            </div>
        )
    }
}
class Classify9 extends Component{
    render(){
        return (
            <div className="content-main">
                <img className="content-img" src={ad[0]} alt=""/>
                <span className="content-title">—洗护专区分类—</span>
                <ul>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                </ul>
            </div>
        )
    }
}
class Classify10 extends Component{
    render(){
        return (
            <div className="content-main">
                <img className="content-img" src={ad[0]} alt=""/>
                <span className="content-title">—杂货专区分类—</span>
                <ul>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>




                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                </ul>
            </div>
        )
    }
}
class Classify11 extends Component{
    render(){
        return (
            <div className="content-main">
                <img className="content-img" src={ad[0]} alt=""/>
                <span className="content-title">—饮食专区分类—</span>
                <ul>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                </ul>
            </div>
        )
    }
}
class Classify12 extends Component{
    render(){
        return (
            <div className="content-main">
                <img className="content-img" src={ad[0]} alt=""/>
                <span className="content-title">—婴童专区分类—</span>
                <ul>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                </ul>
            </div>
        )
    }
}
class Classify13 extends Component{
    render(){
        return (
            <div className="content-main">
                <img className="content-img" src={ad[0]} alt=""/>
                <span className="content-title">—志趣专区分类—</span>
                <ul>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                    <li><NavLink to="/classifyof"><img src={ad[1]} alt=""/><span>冬季美食</span></NavLink></li>
                </ul>
            </div>
        )
    }
}

