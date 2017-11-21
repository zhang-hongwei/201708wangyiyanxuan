/**
 * Created by xueln on 2017/11/21.
 */
import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import './index.less'
export default class Detail extends Component{
    constructor(){
        super()
        this.state={
            city:'请选择',
            region:'',
            level:1
        }
    }
    selectAddr=(e)=>{

        if(e.target.tagName=='DD'){
            this.setState({
                city:e.target.innerHTML,
                region:'区县',
                level:this.level+1
            })

        }
    }
    render(){
        const cities=[
            {city:"北京",region:['昌平区','朝阳区']},
            {city:"天津",region:['河西区','津南区']}
            ]
        return (
            <div className="addr-detail">
                <h2><Link to="/profile/addr">新建地址</Link><button>保存</button></h2>
                <ul>
                    <li><span>北京</span><span>昌平</span></li>
                    <li><input type="text"/></li>
                    <li><input type="text"/></li>
                    <li><input type="tel"/></li>
                    <li><button>设为默认地址</button></li>
                </ul>
                <div className="mask"></div>
                <div className="city">
                    <dl onClick={this.selectAddr}>
                        <dt><span>{this.state.city}</span><span>{this.state.region}</span> <button>确定</button></dt>
                        {
                            this.state.level==1?cities.map((item,index)=><dd key={index}>{item.city}</dd>):cities.find(item=>item.city==this.state.city)[0].region.map((item,index)=><dd key={index}>{item}</dd>)


                        }

                    </dl>
                </div>
            </div>
        )
    }
}