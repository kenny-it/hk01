import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import SmallLogo from '../../static/images/small-logo.svg'
import facebookLogo from '../../static/images/facebook.svg'
import googleLogo from '../../static/images/google.svg'
import emailLogo from '../../static/images/email.svg'
import {
    LoginWrapper,
    LoginBox,
    SwitchLoginBox,
    LoginImg
} from './style'


class Login extends Component {
    render() {
        return (
            <LoginWrapper>
                <LoginBox>
                    <div>
                        <div className="login-header">
                            <span>登入</span>
                            <LoginImg alt="logo" src={SmallLogo}/>
                        </div>
                        <p className="login-link">以連結至 HK01</p>
                        <SwitchLoginBox>
                            <a href="/login">
                                <i className="iconfont">&#xe62e;</i>
                                手機號碼登入
                            </a>
                            <a href="/login">
                                <i className="iconfont">&#xe602;</i>
                                Apple登入
                            </a>
                        </SwitchLoginBox>
                        <div className="login-or">
                            或
                        </div>
                        <div className="login-outside">
                            <a href="/login">
                                <img src={facebookLogo} alt="facebookLogo"/>
                            </a>
                            <a href="/login">
                                <img src={googleLogo} alt="googleLogo"/>
                            </a>
                            <a href="/login">
                                <img src={emailLogo} alt="emailLogo"/>
                            </a>
                        </div>
                    </div>
                </LoginBox>
            </LoginWrapper>
        )
    }
}

export default Login