import React,{Component} from 'react';
import './index.less';
import ClassifyofHeader from './ClassifyofHeader/index';
import ClassifyofContent from './ClassifyofContent/index'
export default class Classifyof extends Component{
    render(){
        return (
            <div>
                <ClassifyofHeader/>
                <ClassifyofContent/>
            </div>
        )
    }
}
