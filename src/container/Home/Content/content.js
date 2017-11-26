import Show from '../../../components/show/show';
import React, { Component } from 'react';
import './content.less';

export default class Content extends Component {
    render() {
        return (
            <div>
                <div className="m-content">
                    <header className="m-hd">厨房好物</header>
                   <Show></Show>
                </div>
            </div>
        )
    }
}