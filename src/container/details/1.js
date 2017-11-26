
import './content.less';

export default class Content extends Component {
    render() {
        return (
            <div>
                <div className="m-content">
                    <header className="m-hd">厨房好物</header>
                    <ul className="list" >
                        <li className="item" >
                            <a className="good" href="javascript:;">
                                <div className="hd">
                                    <div className="wraper">
                                        <div className="m-lazyload">
                                            <img src={require('./wz.png')} />
                                        </div>
                                    </div>
                                    <div className="desc" ></div>
                                </div>
                                <div className="tagWraper">
                                    <p class="status newItem"></p>
                                </div>
                                <div className="name"></div>
                                <div className="newItemDesc"></div>
                                <div className="price">
                                    <span>
                                        <span>
                                            <span>¥</span>
                                            <span>79</span>
                                        </span>
                                    </span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}