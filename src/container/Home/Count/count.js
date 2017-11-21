import React from "react";
import "./count.less"
export default class Count extends React.Component{
    constructor(){
        super();
        this.tarTime=new Date('2017/11/23/21:33:40')
        this.state={
            tarTime:this.tarTime-new Date()
        }
    }
    componentDidMount(){
        this.timer=setInterval(()=>{
            this.setState({ tarTime:this.tarTime-new Date()})
        },1000)
    }
    render(){
        let spanTime=this.state.tarTime

        if(spanTime<1){
            clearInterval(this.timer)
            spanTime=0;
        }
        let hours = Math.floor(spanTime / (1000 * 60 * 60));//->计算当前MS差中包含多少个小时
        spanTime = spanTime - hours * 60 * 60 * 1000;//->总差MS值减去小时所占的值,剩下的值计算分钟和秒
        let minutes = Math.floor(spanTime / (1000 * 60));
        spanTime = spanTime - minutes * 1000 * 60;
        let seconds = Math.floor(spanTime / 1000);
        hours=hours<10?'0'+hours:hours
        minutes=minutes<10?'0'+minutes:minutes
        seconds=seconds<10?'0'+seconds:seconds
        return(
            <div>
                {/*{ hours}:{minutes}:{seconds}*/}
                    <span className="time">{hours}</span>:
                    <span className="time">{minutes}</span>:
                    <span className="time">{seconds}</span>
            </div>
        )
    }
}