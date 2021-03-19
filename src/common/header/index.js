import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as actionCreator from './store/actionCreator'
import LogoUrl from '../../static/images/logo.svg'
import {
    HeaderWrapper,
    HeaderCenter,
    NavGate,
    NavgateContent,
    NavgateItem,
    NavgateIcon,
    LogoArea,
    NavArea,
    NavMore,
    MorePanel,
    MoreContent,
    MoreFooter,
    CustomerArea,
    SearchBox,
    SearchInput
} from './style'

class Header extends Component {
    render() {
        const { showMore,switchIcon, titles, showSearchBox, handleMoreDisplay, handleBoxDisplay, handleSwitch } = this.props
        return (
            <HeaderWrapper>
                <HeaderCenter>
                    <LogoArea>
                        <NavGate>
                            { switchIcon ? <div className="line-split" onClick={() => {handleSwitch(false)}}></div> : <div className="line-close" onClick={() => {handleSwitch(true)}}></div> }
                            {
                                !switchIcon ? <NavgateContent>
                                <NavgateItem>
                                    <li>首頁</li>
                                    <li>港聞</li>
                                    <li>娛樂</li>
                                    <li>生活</li>
                                    <li>觀點</li>
                                    <li>國際</li>
                                    <li>經濟</li>
                                    <li>體育</li>
                                    <li>女生</li>
                                    <li>科技玩物</li>
                                    <li>熱話</li>
                                    <li>社區</li>
                                    <li>好食玩飛</li>
                                    <li>中國</li>
                                    <li>藝文格物</li>
                                    <li>影像</li>
                                </NavgateItem>
                                <NavgateIcon>
                                    <li>
                                        <img src="https://cdn.hk01.com/rcfg/images/items/thumbnails/e074dfef-a99f-41f9-8a6a-e11d59c90e8d.png" alt=""/>
                                        <span>會員資訊</span>
                                    </li>
                                    <li>
                                        <img src="https://cdn.hk01.com/rcfg/images/items/thumbnails/d48c8e30-1247-11e9-ae14-23ee281b07fe.png" alt="" />
                                        <span>01心意</span>
                                    </li>
                                    <li>
                                        <img src="https://cdn.hk01.com/rcfg/images/items/thumbnails/7d23ad4f-d6c1-4396-9419-92617c7e2abd.png" alt="" />
                                        <span>01空間</span>
                                    </li>
                                    <li>
                                        <img src="https://cdn.hk01.com/rcfg/images/items/thumbnails/7a82a2b0-eff7-44db-af45-755d087b26ef.png" alt="" />
                                        <span>e肚仔</span>
                                    </li>
                                    <li>
                                        <img src="https://cdn.hk01.com/rcfg/images/items/thumbnails/15f2fa60-4e35-11ea-acda-9db6a7e621ae.png" alt="" />
                                        <span>一網打盡</span>
                                    </li>
                                    <li>
                                        <img src="https://cdn.hk01.com/rcfg/images/items/thumbnails/81288470-61e6-11ea-aa12-c7586603637c.png" alt="" />
                                        <span>齊動</span>
                                    </li>
                                    <li>
                                        <img src="https://cdn.hk01.com/rcfg/images/items/thumbnails/0618fdd0-9b0e-11ea-b87e-1b70062b70a2.png" alt="" />
                                        <span>搵醫生</span>
                                    </li>
                                    <li>
                                        <img src="https://cdn.hk01.com/rcfg/images/items/thumbnails/7fcf9701-9371-11ea-b87e-1b70062b70a2.png" alt="" />
                                        <span>01訂閱</span>
                                    </li>
                                    <li>
                                        <img src="https://cdn.hk01.com/rcfg/images/items/thumbnails/6ff713e6-2c91-4a21-8b7d-2eb86cd769ad.png" alt="" />
                                        <span>開講</span>
                                    </li>
                                    <li>
                                        <img src="https://cdn.hk01.com/rcfg/images/items/thumbnails/a7f17400-47f5-11ea-b31e-970ff0667878.png" alt="" />
                                        <span>肺炎疫情</span>
                                    </li>
                                    <li>
                                        <img src="https://cdn.hk01.com/rcfg/images/items/thumbnails/d8fd24fc-8c34-44c3-9f38-ee386bc3fe12.png" alt="" />
                                        <span>巨子 ICON</span>
                                    </li>
                                </NavgateIcon>
                                <MoreFooter>
                                    <ul>
                                        <li>01缐報</li>
                                        <li>關於我們</li>
                                        <li>01招標</li>
                                        <li>廣告查詢</li>
                                        <li>01App</li>
                                        <li>常見問題</li>
                                        <li>聯絡我們</li>
                                        <li>私隱聲明</li>
                                        <li>條款及細則</li>
                                    </ul>
                                    <div>
                                        <a href="/">
                                            <i className="iconfont">&#xe627;</i>
                                        </a>
                                        <a href="/">
                                            <i className="iconfont">&#xeab4;</i>
                                        </a>
                                        <a href="/">
                                            <i className="iconfont">&#xe607;</i>
                                        </a>
                                        <a href="/">
                                            <i className="iconfont">&#xe61d;</i>
                                        </a>
                                        <span>香港01有限公司 版權所有  ©  2021</span>
                                    </div>
                                </MoreFooter>
                            </NavgateContent> : null
                            }
                        </NavGate>
                        <Link to="/">
                            <img src={LogoUrl} alt="logo"/>
                        </Link>
                    </LogoArea>
                    <NavArea>
                        <ul>
                            {this.getHeaderTitle(titles)}
                        </ul>
                        <NavMore>
                            <span onClick={()=> {handleMoreDisplay()}}>更多<i className={showMore ? 'active' : ''}></i></span>
                        </NavMore>
                    </NavArea>
                    <MorePanel className={showMore ? 'panel-active' : ''} onMouseLeave={()=> {handleMoreDisplay(false)}}>
                        <MoreContent>
                            <div>
                                {this.getSubclassItem(titles)}
                            </div>
                        </MoreContent>
                        <MoreFooter>
                            <ul>
                                <li>01缐報</li>
                                <li>關於我們</li>
                                <li>01招標</li>
                                <li>廣告查詢</li>
                                <li>01App</li>
                                <li>常見問題</li>
                                <li>聯絡我們</li>
                                <li>私隱聲明</li>
                                <li>條款及細則</li>
                            </ul>
                            <div>
                                <a href="/">
                                    <i className="iconfont">&#xe627;</i>
                                </a>
                                <a href="/">
                                    <i className="iconfont">&#xeab4;</i>
                                </a>
                                <a href="/">
                                    <i className="iconfont">&#xe607;</i>
                                </a>
                                <a href="/">
                                    <i className="iconfont">&#xe61d;</i>
                                </a>
                                <span>香港01有限公司 版權所有  ©  2021</span>
                            </div>
                        </MoreFooter>
                    </MorePanel>
                    <CustomerArea>
                        <div>
                            <i className={showSearchBox ? 'iconfont active' : 'iconfont'} onClick={() => {handleBoxDisplay()}}>&#xe624;</i>
                            {this.getSearchBox(showSearchBox, handleBoxDisplay)}
                        </div>
                        <div>
                            <i className="iconfont">&#xe636;</i>
                            <span>服務</span>
                        </div>
                        <div>
                            <Link to="/login">
                                <i className="iconfont">&#xe685;</i>
                                <span>登入</span>
                            </Link>
                        </div>
                    </CustomerArea>
                </HeaderCenter>
            </HeaderWrapper>
        )
    }

    componentDidMount() {
        this.props.handleTitlesInfo()
    }

    getSubclassItem(titles) {
        let lists = []
        if (titles.length > 0) {
            lists = titles.map(item => {
                return (
                    <dl key={item.id}>
                        <dt><Link to={'/channel/' + item.id}>{item.title}</Link></dt>
                        {
                            item.list.map(k => {
                                return (
                                    <dd key={k.subclass}><Link to={'/channel/' + item.id+ '/' + k.channel}>{k.subclass}</Link></dd>
                                )
                            })
                        }
                    </dl>
                )
            })
        } 
        return lists
    }

    getHeaderTitle(titles) {
        let subjects = []
        if (titles.length > 0) {
            for (let i = 0; i < 13; i++) {
                subjects.push(<li key={titles[i]['id']}><Link to={'/channel/' + titles[i]['id']} >{titles[i]['title']}</Link></li>)
            }
        }
        return subjects
    }

    getSearchBox(showFlag, handleBoxDisplay) {
        if (showFlag) {
            return (
                <SearchBox onMouseLeave={()=> {handleBoxDisplay(false)}}>
                    <SearchInput placeholder="搜索香港01"/>
                    <div>
                        <h1>熱門搜尋：</h1>
                        <div>
                            <a href="/">新冠肺炎</a>
                            <a href="/">新冠疫苗</a>
                            <a href="/">港版國安法</a>
                            <a href="/">2021財政預算案</a>
                            <a href="/">安心出行app</a>
                            <a href="/">强制檢測</a>
                            <a href="/">BNO 英國國民（海外）護照</a>
                            <a href="/">梅根</a>
                            <a href="/">袁國勇</a>
                            <a href="/">半島城邦</a>
                        </div>
                    </div>
                </SearchBox>
)
        } else {
            return ''
        }
    }

}

const mapState = state => {
    return {
        showMore: state.getIn(['header', 'showMore']),
        showSearchBox: state.getIn(['header', 'showSearchBox']),
        titles: state.getIn(['header', 'titles']).toJS(),
        switchIcon: state.getIn(['header', 'switchIcon'])
    }
}

const mapDispatch = dispatch => {
    return {
        handleMoreDisplay(flag) {
            dispatch(actionCreator.getMoreAction(flag ? flag : ''))
        },
        handleBoxDisplay(flag) {
            dispatch(actionCreator.getSearchBoxAction(flag ? flag : ''))
        },
        handleTitlesInfo() {
            dispatch(actionCreator.getTitlesInfo())
        },
        handleSwitch(flag) {
            dispatch(actionCreator.getSwitchAction(flag))
        }
    }
}

export default connect(mapState, mapDispatch)(Header)