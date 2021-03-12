import { Link } from 'react-router-dom'
import {
    FooterWrapper,
    FooterContainer,
    LogoContent,
    AboutContent,
    SocialContent
} from './style'
import logoUrl from '../../static/images/logo2.svg'

function Footer() {
    return (
        <FooterWrapper>
            <FooterContainer>
                <div>
                    <LogoContent>
                        <Link to="/">
                            <img src={logoUrl} alt=""/>
                        </Link>
                    </LogoContent>
                    <AboutContent>
                        <a href="/" alt="">01缐報</a>
                        <a href="/" alt="">關於我們</a>
                        <a href="/" alt="">01招聘</a>
                        <a href="/" alt="">廣告查詢</a>
                        <a href="/" alt="">01App</a>
                        <a href="/" alt="">常見問題</a>
                        <a href="/" alt="">聯絡我們</a>
                        <a href="/" alt="">私隱聲明</a>
                        <a href="/" alt="">條款及細則</a>
                    </AboutContent>
                </div>
                <SocialContent>
                    <div>
                        <i className="iconfont">&#xe627;</i>
                        <i className="iconfont">&#xeab4;</i>
                        <i className="iconfont">&#xe607;</i>
                        <i className="iconfont">&#xe61d;</i>
                    </div>
                    <span>香港01有限公司版權所有 © 2021</span>
                </SocialContent>
            </FooterContainer>
        </FooterWrapper>
    )
}

export default Footer