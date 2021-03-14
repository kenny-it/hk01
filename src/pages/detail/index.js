import React, { Component } from 'react'
import Zmage from 'react-zmage'
import LikeImg from '../../static/images/social-reaction-like.png'
import HeartImg from '../../static/images/social-reaction-heart.png'
import SadImg from '../../static/images/social-reaction-sad.png'
import laughImg from '../../static/images/social-reaction-laugh.png'
import AngryImg from '../../static/images/social-reaction-angry.png'
import UserImg from '../../static/images/avarete.png'
import {
    DetailWrapper,
    DetailContainer,
    DetailPicture,
    DetailMain,
    DetailCommand,
    DescribeBox,
    DescribeTitle,
    DescribeDetail,
    ArticleWrapper,
    ArticleMain,
    CommandIcons,
    CommandMain,
    AsideNav
} from './style'

const imageSetting = [
    {
        src: "https://cdn.hk01.com/di/media/images/dw/20210313/447457172033376256684125.jpeg/YX58hD_zn4piiD-4FjUbmpjBOAQB4G3gMzohDzM6IQ8?v=w1760r16_9",
        alt: "",
        style: { borderRadius: 30, maxWidth: '60%' }
    },
    {
        src: "https://cdn.hk01.com/di/media/images/dw/20210313/447442316249010176230864.png/0PcaLFK5iSPOKtqoFdgsnqaEWqustqfEe4bUHHuG1Bw?v=w1920",
        alt: "",
        style: { borderRadius: 30, maxWidth: '60%' }
    },
    {
        src: "https://cdn.hk01.com/di/media/images/dw/20201021/395622686895640576359018.jpeg/eq_V4q4-iO615v31Q842YYaoEwWTGdbkkTOXVZEzl1U?v=w1920",
        alt: "",
        style: { borderRadius: 30, maxWidth: '60%' }
    },
    {
        src: "https://cdn.hk01.com/di/media/images/dw/20201021/395624218479300608145230.jpeg/dQtQynwBg4nrwFBimFCxxZx_C8Oek4MOM9QBTjPUAU4?v=w1920",
        alt: "",
        style: { borderRadius: 30, maxWidth: '60%' }
    },
    {
        src: "https://cdn.hk01.com/di/media/images/dw/20210223/440852352543494144283957.jpeg/DwMZ_MIJcELp-78BL3pTf6jIBVMnmeJFrNTtYKzU7WA?v=w1920",
        alt: "",
        style: { borderRadius: 30, maxWidth: '60%' }
    }
]

const iframeStyle = {
    position: 'static',
    visibility: 'visible',
    width: '550px',
    height: '693px',
    display: 'block',
    flexGrow: 1
}

class Detail extends Component {

    render() {
        return (
            <DetailWrapper>
                <DetailContainer>
                    <h1 className="detail-title">Google與微軟爆發公開罵戰　Scroogled年代回來了？｜新聞背後</h1>
                    <DetailPicture>
                           <Zmage src="https://cdn.hk01.com/di/media/images/dw/20210313/447457172033376256684125.jpeg/YX58hD_zn4piiD-4FjUbmpjBOAQB4G3gMzohDzM6IQ8?v=w1760r16_9" alt="first" set={imageSetting} />
                    </DetailPicture>
                    <DetailMain>
                        <DescribeBox>
                            <DescribeTitle>
                                <h2>即時國際</h2>
                                <p>
                                    <i className="iconfont">&#xe667;</i>
                                    讚好 0
                                </p>
                            </DescribeTitle>
                            <DescribeDetail>
                                <span>撰文：成依華</span>
                                <span>
                                    <i className="iconfont">&#xe641;</i> 
                                    2021-03-13 18:30
                                </span>
                                <span>最後更新日期：2021-03-13 21:04</span>
                            </DescribeDetail>
                        </DescribeBox>
                        <ArticleWrapper>
                            <ArticleMain ref={scrollParent =>  this.scrollParent = scrollParent}>
                                <p>記得Scroogled這個詞語嗎？早在Google騰飛年代的2012年，微軟（Microsoft）曾發動反谷歌的Scroogled（即Screw + Google的混合詞）運動，透過拍攝廣告、在商品加上標語來批評競爭對手。</p>
                                <p>到了今天，這對冤家爆發公開罵戰，一邊有微軟代表在3月12日國會反壟斷聽證會上，作為控訴方大鬧Google壟斷，Google則在場外發表罕有聲明，點明批評這位對手為了利益製造指控。罵戰背後有着眾多積怨，從澳洲的新聞付費爭議、美國政府針對科網推行的反壟斷訴訟等，都可見這對競爭對手的爭拗，在未來將愈演愈烈。</p>
                                <AsideNav ref={scrollEle => this.scrollEle = scrollEle}>
                                    <ul>
                                        <li onClick={() => {window.scrollTo(0,this.commonEle.offsetTop)}}>
                                            <i className="iconfont">&#xe610;</i>
                                        </li>
                                        <li onClick={() => {window.alert('The function is under development')}}>
                                            <i className="iconfont">&#xe61f;</i>
                                        </li>
                                        <li onClick={() => {window.alert('The function is under development')}}>
                                            <i className="iconfont">&#xe637;</i>
                                        </li>
                                        <li onClick={() => {window.location.href = '/login'}}>
                                            <i className="iconfont">&#xe62e;</i>
                                        </li>
                                        <li onClick={this.handleScrollToTop}>
                                            <i className="iconfont">&#xe633;</i>
                                        </li>
                                    </ul>
                                </AsideNav>
                            </ArticleMain>
                            <div className="article-img-area">
                                <Zmage src="https://cdn.hk01.com/di/media/images/dw/20210313/447442316249010176230864.png/0PcaLFK5iSPOKtqoFdgsnqaEWqustqfEe4bUHHuG1Bw?v=w1920" alt="first" set={imageSetting} />
                                <p>微軟2013年曾推出反Google的水杯，諷刺Google會偷取用戶數據（網站截圖）</p>
                            </div>
                            <p className="article-word">在2012年至2014年的Scroogled年代後，Google與微軟如今一邊繼續是競爭對手，另一邊兩方的電腦工程師們也有展開合作，例如是研發Chromium瀏覽器項目，但這次為何又演變成公開罵戰？</p>
                            <div className="article-img-area">
                                <Zmage src="https://cdn.hk01.com/di/media/images/dw/20210313/447457172033376256684125.jpeg/YX58hD_zn4piiD-4FjUbmpjBOAQB4G3gMzohDzM6IQ8?v=w1760r16_9" alt="first" set={imageSetting} />
                                <p>圖為示意圖，Google的網頁瀏覽器Chrome顯示在手機及電腦上。（Getty）</p>
                            </div>
                            <div className="article-item">
                                <h2>矛盾一：澳洲新聞付費爭拗</h2>
                                <p className="article-word">自2020年起，澳洲決定立法「新聞媒體協議規範」（News Media Bargaining Code）草案，規定Facebook與Google須和新聞媒體達成商業協議，為轉載新聞內容付費，引來這兩家巨企不滿，Google由最初威脅撤出澳洲市場，至最後終與澳洲政府達成協議。</p>
                                <p className="article-word">在整個過程期間，微軟都公開站在澳洲政府一方，既是與澳洲總理承諾若Google撤出澳洲的話，微軟搜尋器Bing將能填補市場缺口，微軟甚至拉攏歐洲出版商，希望遊說歐洲也實行類似的新聞付費法案。</p>
                            </div>
                            <div className="article-img-area">
                                <Zmage src="https://cdn.hk01.com/di/media/images/dw/20210313/447457172033376256684125.jpeg/YX58hD_zn4piiD-4FjUbmpjBOAQB4G3gMzohDzM6IQ8?v=w1760r16_9" alt="first" set={imageSetting} />
                                <p>圖為1998年，微軟遭到政府反壟斷調查，時任總裁兼創辦人比爾蓋茨（Bill Gate）出席國會聽證會。（Getty）</p>
                            </div>
                            <div className="article-item">
                                <h2>矛盾二：反壟斷訴訟</h2>
                                <p className="article-word">這次的「戰場」則是在聽證會，過去在1998年，微軟的反壟斷訴訟案極為經典，遭指控憑着其極大市場佔有率，綑綁Windows推出自己的上網瀏覽器Internet Explorer（IE），以壟斷整個市場，最終微軟敗訴，之後在多國也面臨同樣訴訟。</p>
                                <p className="article-word">在20多年後的今天，美國司法部正向科企提出反壟斷訴訟，這次的「被告」是4間科企巨頭Google、Facebook、蘋果（Apple）與亞馬遜，不在此列的微軟在3月10日加入成為控訴方，微軟總裁史密斯（Brad Smith）在聽證會上控訴，新聞機構被迫使用Google的工具、為這間公司貢獻數據，並向它支付費用，也就是這次令Google對「老是常出現」的微軟不滿，在網上發文反擊，變成這次的公開戰爭。</p>
                            </div>
                            <div>
                                <iframe id="twitter-widget-0" scrolling="no" frameBorder={0} allowtransparency="true" allowFullScreen={true} style={iframeStyle} title="Twitter Tweet" src="https://platform.twitter.com/embed/Tweet.html?dnt=false&amp;embedId=twitter-widget-0&amp;frame=false&amp;hideCard=false&amp;hideThread=false&amp;id=1370387175766953994&amp;lang=en&amp;origin=https%3A%2F%2Fwww.hk01.com%2F%25E5%258D%25B3%25E6%2599%2582%25E5%259C%258B%25E9%259A%259B%2F598851%2Fgoogle%25E8%2588%2587%25E5%25BE%25AE%25E8%25BB%259F%25E7%2588%2586%25E7%2599%25BC%25E5%2585%25AC%25E9%2596%258B%25E7%25BD%25B5%25E6%2588%25B0-scroogled%25E5%25B9%25B4%25E4%25BB%25A3%25E5%259B%259E%25E4%25BE%2586%25E4%25BA%2586-%25E6%2596%25B0%25E8%2581%259E%25E8%2583%258C%25E5%25BE%258C&amp;siteScreenName=hk01official&amp;theme=light&amp;widgetsVersion=e1ffbdb%3A1614796141937&amp;width=550px" data-tweet-id="1370387175766953994"></iframe>
                            </div>
                        </ArticleWrapper>
                    </DetailMain>
                    <DetailCommand>
                        <CommandIcons>
                            <ul>
                                <li>
                                    <img src={LikeImg} alt=""/>
                                    26
                                </li>
                                <li>
                                    <img src={HeartImg} alt=""/>
                                    2
                                </li>
                                <li>
                                    <img src={SadImg} alt=""/>
                                    1
                                </li>
                                <li>
                                    <img src={laughImg} alt=""/>
                                    3
                                </li>
                                <li>
                                    <img src={AngryImg} alt=""/>
                                    3
                                </li>
                            </ul>
                        </CommandIcons>
                        <CommandMain ref={commonEle => {this.commonEle = commonEle}}>
                            <div>
                                <h2>全部評論 (0)</h2>
                                <p>
                                    <i className="iconfont">&#xe611;</i>
                                    由新到舊
                                </p>
                            </div>
                            <div>
                                <img src={UserImg} alt=""/>
                                <div>
                                    <textarea placeholder="發表評論..." disabled={true}/>
                                    <p>＊會員之留言需符合香港特別行政區法例</p>
                                    <p>＊香港01及用戶管理者保留刪除違反相關條款及細則之文章及/或留言之權利</p>
                                </div>
                            </div>
                        </CommandMain>
                    </DetailCommand>
                </DetailContainer>
            </DetailWrapper>
        )
    }

    componentDidMount() {
        document.addEventListener('scroll', ()=> {
            const {scrollParent, scrollEle} = this
            if (!scrollParent) return
            if (window.pageYOffset >= (scrollParent.offsetTop - 60)) {
                scrollEle.classList.add('aside-fixed')
            } else {
                scrollEle.classList.remove('aside-fixed')
            }
        })
    }

    handleScrollToTop() {
        window.scrollTo(0,0)
    }
}


export default Detail