/**
 * Created by xueln on 2017/11/21.
 */
import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import './index.less'
import {connect} from 'react-redux';
import actions from '../../../../store/actions/profile'
class SelectAddr extends Component{
    constructor(){
        super()
        this.state={
            city:'请选择',
            region:'',
            level:1,
            selected:false
        }
    }
    selectAddr=(e)=>{

        if(e.target.tagName=='DD'){
            if(this.state.level==1){
                this.setState({
                    city:e.target.innerHTML,
                    region:'区县',
                    level:this.state.level+1
                })
            }else if(this.state.level==2){
                this.setState({
                    region:e.target.innerHTML
                })
            }}



    }
    setAddr=()=>{
        this.setState({
            selected:true
        })
        let data={city:this.state.city,region:this.state.region}
        this.props.getAddr(data)
    }
    render(){
        const cities=[
            {city:"北京",region:['昌平区','朝阳区']},
            {city:"天津",region:['河西区','津南区']}
        ]
        return <div className="mask" style={{display:this.state.selected?'none':'block'}}>
            <div className="city">
                <dl onClick={this.selectAddr}>
                    <dt>
                        <span className={this.state.level==1?'city-name active':'city-name'}>{this.state.city}</span>
                        <span className={this.state.level==2?'region active':'region'}>{this.state.region}</span>
                        <button onClick={this.setAddr}>确定</button>
                    </dt>
                    {
                        this.state.level==1?cities.map((item,index)=><dd key={index}>{item.city}</dd>):cities.find(item=>item.city==this.state.city).region.map((item,index)=><dd key={index}>{item}</dd>)


                    }

                </dl>
            </div>
        </div>
    }
}
@connect(null,actions)
export default class Detail extends Component{
    constructor(){
        super();
        this.state={
            city:'',
            region:''
        }
    }
    getAddr=(data)=>{
        this.setState(data)
    }
    saveAddr=()=>{
        let data={
            city:this.city.value,
            road:this.road.value,
            name:this.name.value,
            tel:this.tel.value
        }
        this.props.saveAddr(data)
    }
    render(){

        return (
            <div className="addr-detail">
                <h2><Link to="/profile/addr">新建地址<button onClick={this.saveAddr}>保存</button></Link></h2>
                <form>
                    <ul className="addr-list">
                        <li><input type="text" ref={input=>this.city=input} placeholder="省市、区县、城市" required value={this.state.city+this.state.region}/></li>
                        <li><input type="text" ref={input=>this.road=input} required placeholder="详细地址，如街道、楼牌号等"/></li>
                        <li><input type="text" ref={input=>this.name=input} required placeholder="姓名"/></li>
                        <li><input type="tel" ref={input=>this.tel=input} required placeholder="手机号码"/></li>
                        <li><input type="checkbox"/>设为默认地址</li>
                    </ul>
                </form>
                <SelectAddr getAddr={this.getAddr}/>


            </div>
        )
    }
}