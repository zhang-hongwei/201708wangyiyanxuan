import React, { Component } from 'react';
import Header from '../../components/header/header';
import './shop.less';
export default class extends Component {
    render() {
        return (
            <div className="z-shop">
                <Header></Header>
                <div className="z-wrap">
                    <div className="shoph">
                        <div className="iwrap"><img src={require('./img.png')} alt="" /></div>
                        <header className="header">
                            <div className="banner">Adidas制造商</div>
                            <div className="btn">上新提醒</div>
                        </header>
                        <div className="desc">
                            <div>严选找到为Adidas等品牌制造商，</div>
                            <div>选取优质原材料，与厂方一起设计，</div>
                            <div>为你提供好的理想的运动装备。</div>
                        </div>
                    </div>
                    <div className="m-sticky m-sticky-sticky m-sticky-mounted">
                        <div className="placeholder">
                        </div>
                        <div className="inner">
                            <div className="m-filter" >
                                <ul className="conditions">
                                    <li className="item">
                                        <div className="condition active" >
                                            <div className="txt">综合</div>
                                        </div>
                                    </li>
                                    <li className="item">
                                        <div class="condition descAsc">
                                            <div class="txt">上新</div>
                                        </div>
                                    </li>
                                    <li className="item">
                                        <div class="condition descAsc">
                                            <div class="txt">价格</div>
                                        </div>
                                    </li>
                                    <li className="item">
                                        <div class="condition">
                                            <div class="txt">分类</div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="mask f-hidden">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="m-goodGrid">
                        <ul className="list" > 
                            <li className="item" >
                                <a className="good" href="javascript:;">
                                    <div className="hd">
                                        <div className="wraper">
                                            <div className="m-lazyload">
                                                <img src={require('./wz.png')} />
                                            </div>
                                        </div>
                                        <div className="desc" >超大吸汗量 柔软护脚</div>
                                    </div>
                                    <div className="tagWraper">
                                        <p class="status newItem">新品</p>
                                    </div>
                                    <div className="name">9双装 囤货装 运动组合袜（儿童）</div>
                                    <div className="newItemDesc">超大吸汗量 柔软护脚</div>
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
                            <li className="item" >
                                <a className="good" href="javascript:;">
                                    <div className="hd">
                                        <div className="wraper">
                                            <div className="m-lazyload">
                                                <img src={require('./wz.png')} />
                                            </div>
                                        </div>
                                        <div className="desc" >超大吸汗量 柔软护脚</div>
                                    </div>
                                    <div className="tagWraper">
                                        <p class="status newItem">新品</p>
                                    </div>
                                    <div className="name">9双装 囤货装 运动组合袜（儿童）</div>
                                    <div className="newItemDesc">超大吸汗量 柔软护脚</div>
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
                            <li className="item" >
                                <a className="good" href="javascript:;">
                                    <div className="hd">
                                        <div className="wraper">
                                            <div className="m-lazyload">
                                                <img src={require('./wz.png')} />
                                            </div>
                                        </div>
                                        <div className="desc" >超大吸汗量 柔软护脚</div>
                                    </div>
                                    <div className="tagWraper">
                                        <p class="status newItem">新品</p>
                                    </div>
                                    <div className="name">9双装 囤货装 运动组合袜（儿童）</div>
                                    <div className="newItemDesc">超大吸汗量 柔软护脚</div>
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
                            <li className="item" >
                                <a className="good" href="javascript:;">
                                    <div className="hd">
                                        <div className="wraper">
                                            <div className="m-lazyload">
                                                <img src={require('./wz.png')} />
                                            </div>
                                        </div>
                                        <div className="desc" >超大吸汗量 柔软护脚</div>
                                    </div>
                                    <div className="tagWraper">
                                        <p class="status newItem">新品</p>
                                    </div>
                                    <div className="name">9双装 囤货装 运动组合袜（儿童）</div>
                                    <div className="newItemDesc">超大吸汗量 柔软护脚</div>
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
                            <li className="item" >
                                <a className="good" href="javascript:;">
                                    <div className="hd">
                                        <div className="wraper">
                                            <div className="m-lazyload">
                                                <img src={require('./wz.png')} />
                                            </div>
                                        </div>
                                        <div className="desc" >超大吸汗量 柔软护脚</div>
                                    </div>
                                    <div className="tagWraper">
                                        <p class="status newItem">新品</p>
                                    </div>
                                    <div className="name">9双装 囤货装 运动组合袜（儿童）</div>
                                    <div className="newItemDesc">超大吸汗量 柔软护脚</div>
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
                            <li className="item" >
                                <a className="good" href="javascript:;">
                                    <div className="hd">
                                        <div className="wraper">
                                            <div className="m-lazyload">
                                                <img src={require('./wz.png')} />
                                            </div>
                                        </div>
                                        <div className="desc" >超大吸汗量 柔软护脚</div>
                                    </div>
                                    <div className="tagWraper">
                                        <p class="status newItem">新品</p>
                                    </div>
                                    <div className="name">9双装 囤货装 运动组合袜（儿童）</div>
                                    <div className="newItemDesc">超大吸汗量 柔软护脚</div>
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
                            <li className="item" >
                                <a className="good" href="javascript:;">
                                    <div className="hd">
                                        <div className="wraper">
                                            <div className="m-lazyload">
                                                <img src={require('./wz.png')} />
                                            </div>
                                        </div>
                                        <div className="desc" >超大吸汗量 柔软护脚</div>
                                    </div>
                                    <div className="tagWraper">
                                        <p class="status newItem">新品</p>
                                    </div>
                                    <div className="name">9双装 囤货装 运动组合袜（儿童）</div>
                                    <div className="newItemDesc">超大吸汗量 柔软护脚</div>
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
                            <li className="item" >
                                <a className="good" href="javascript:;">
                                    <div className="hd">
                                        <div className="wraper">
                                            <div className="m-lazyload">
                                                <img src={require('./wz.png')} />
                                            </div>
                                        </div>
                                        <div className="desc" >超大吸汗量 柔软护脚</div>
                                    </div>
                                    <div className="tagWraper">
                                        <p class="status newItem">新品</p>
                                    </div>
                                    <div className="name">9双装 囤货装 运动组合袜（儿童）</div>
                                    <div className="newItemDesc">超大吸汗量 柔软护脚</div>
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
                            <li className="item" >
                                <a className="good" href="javascript:;">
                                    <div className="hd">
                                        <div className="wraper">
                                            <div className="m-lazyload">
                                                <img src={require('./wz.png')} />
                                            </div>
                                        </div>
                                        <div className="desc" >超大吸汗量 柔软护脚</div>
                                    </div>
                                    <div className="tagWraper">
                                        <p class="status newItem">新品</p>
                                    </div>
                                    <div className="name">9双装 囤货装 运动组合袜（儿童）</div>
                                    <div className="newItemDesc">超大吸汗量 柔软护脚</div>
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

                    <div class="m-ftWrap">
                        <div class="m-ft g-row">
                            <div class="bd">
                                <a class="goApp w-button">下载APP</a>
                                <a class="goWeb w-button">电脑版</a>
                            </div>
                                <p class="copyright">
                                    <span>网易公司版权所有 © 1997-</span>
                                    <span>2017</span>
                                    <br/>
                                    <span>食品经营许可证：JY13301080111719</span>
                                </p>
                        </div>
                    </div>

                 </div>
              </div>
                               
        )
    }
}