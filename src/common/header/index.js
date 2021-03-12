import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as actionCreator from './store/actionCreator'
import LogoUrl from '../../static/images/logo.svg'
import {
    HeaderWrapper,
    HeaderCenter,
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
        const { showMore, titles, showSearchBox, handleMoreDisplay, handleBoxDisplay } = this.props
        return (
            <HeaderWrapper>
                <HeaderCenter>
                    <LogoArea>
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
                        服務
                        </div>
                        <div>
                        <Link to="/login">
                            <i className="iconfont">&#xe685;</i>
                            登入
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
        titles: state.getIn(['header', 'titles']).toJS()
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
        }
    }
}

export default connect(mapState, mapDispatch)(Header)