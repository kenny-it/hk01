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
        const { showMore,showSearchBox, handleMoreDisplay, handleBoxDisplay } = this.props
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
                        </ul>
                        <NavMore>
                            <span onClick={()=> {handleMoreDisplay()}}>更多<i className={showMore ? 'active' : ''}></i></span>
                        </NavMore>
                    </NavArea>
                    <MorePanel className={showMore ? 'panel-active' : ''} onMouseLeave={()=> {handleMoreDisplay(false)}}>
                        <MoreContent>
                            <div>
                                <dl>
                                    <dt>港聞</dt>
                                    <dd>社會新聞</dd>
                                    <dd>突發</dd>
                                    <dd>01偵察</dd>
                                    <dd>政情</dd>
                                    <dd>香港經濟</dd>
                                    <dd>天氣</dd>
                                </dl>
                                <dl>
                                    <dt>港聞</dt>
                                    <dd>社會新聞社會新聞</dd>
                                    <dd>突發</dd>
                                    <dd>01偵察</dd>
                                    <dd>政情</dd>
                                    <dd>香港經濟</dd>
                                    <dd>天氣</dd>
                                </dl>
                                <dl>
                                    <dt>港聞</dt>
                                    <dd>社會新聞</dd>
                                    <dd>突發</dd>
                                    <dd>01偵察</dd>
                                    <dd>政情</dd>
                                    <dd>香港經濟</dd>
                                    <dd>天氣</dd>
                                </dl>
                                <dl>
                                    <dt>港聞</dt>
                                    <dd>社會新聞</dd>
                                    <dd>突發</dd>
                                    <dd>01偵察</dd>
                                    <dd>政情</dd>
                                    <dd>香港經濟</dd>
                                    <dd>天氣</dd>
                                </dl>
                                <dl>
                                    <dt>港聞</dt>
                                    <dd>社會新聞</dd>
                                    <dd>突發</dd>
                                    <dd>01偵察</dd>
                                    <dd>政情</dd>
                                    <dd>香港經濟</dd>
                                    <dd>天氣</dd>
                                </dl>
                                <dl>
                                    <dt>港聞</dt>
                                    <dd>社會新聞</dd>
                                    <dd>突發</dd>
                                    <dd>01偵察</dd>
                                    <dd>政情</dd>
                                    <dd>香港經濟</dd>
                                    <dd>天氣</dd>
                                </dl>
                                <dl>
                                    <dt>港聞</dt>
                                    <dd>社會新聞</dd>
                                    <dd>突發</dd>
                                    <dd>01偵察</dd>
                                    <dd>政情</dd>
                                    <dd>香港經濟</dd>
                                    <dd>天氣</dd>
                                </dl>
                                <dl>
                                    <dt>港聞</dt>
                                    <dd>社會新聞</dd>
                                    <dd>突發</dd>
                                    <dd>01偵察</dd>
                                    <dd>政情</dd>
                                    <dd>香港經濟</dd>
                                    <dd>天氣</dd>
                                </dl>
                                <dl>
                                    <dt>港聞</dt>
                                    <dd>社會新聞</dd>
                                    <dd>突發</dd>
                                    <dd>01偵察</dd>
                                    <dd>政情</dd>
                                    <dd>香港經濟</dd>
                                    <dd>天氣</dd>
                                </dl>
                                <dl>
                                    <dt>港聞</dt>
                                    <dd>社會新聞</dd>
                                    <dd>突發</dd>
                                    <dd>01偵察</dd>
                                    <dd>政情</dd>
                                    <dd>香港經濟</dd>
                                    <dd>天氣</dd>
                                </dl>
                                <dl>
                                    <dt>港聞</dt>
                                    <dd>社會新聞</dd>
                                    <dd>突發</dd>
                                    <dd>01偵察</dd>
                                    <dd>政情</dd>
                                    <dd>香港經濟</dd>
                                    <dd>天氣</dd>
                                </dl>
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
        showSearchBox: state.getIn(['header', 'showSearchBox'])
    }
}

const mapDispatch = dispatch => {
    return {
        handleMoreDisplay(flag) {
            dispatch(actionCreator.getMoreAction(flag ? flag : ''))
        },
        handleBoxDisplay(flag) {
            dispatch(actionCreator.getSearchBoxAction(flag ? flag : ''))
        }
    }
}

export default connect(mapState, mapDispatch)(Header)