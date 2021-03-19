import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 60px;
    z-index: 200;
    user-select: none;
    background: rgb(255,255,255);
    color: rgba(0,0,0,0.78);
    box-sizing: border-box;
    box-shadow: rgb(0 33 155 / 12%) 0px 4px 5px -2px;
    @media(max-width: 768px) {
        height: 46px;
    }
`
export const  HeaderCenter = styled.div`
    margin: 0 auto;
    box-sizing: border-box;
    min-width: 0;
    display: flex;
    max-width: 1280px;
    height: 100%;
    @media(max-width: 1280px) {
        padding: 0 12px;
    }
    @media(max-width: 768px) {
        justify-content: space-between;
    }
`
export const LogoArea = styled.div`
    width: 105px;
    height: 100%;
    text-align: center;
    img {
        margin-top: 6px;
        width: 80%;
        height: 80%;
        vertical-align: middle;
    }
    @media(max-width: 768px) {
        display: flex;
    }
`
export const NavArea = styled.div`
    display: flex;
    flex: 1 1 auto;
    flex-wrap: nowrap;
    height: 100%;
    &>ul {
        margin-left: 6px;
        overflow: hidden;
       li {
           display: inline-block;
           white-space: nowrap;
           word-break: keep-all;
           box-sizing: border-box;
           padding-left: 12px;
           padding-right: 12px;
           margin: 0 2px;
           line-height: 60px;
           cursor: pointer;
           color: rgba(0, 0, 0, 0.78);
       }
    }
    @media(max-width: 768px) {
        display: none;
    }
`
export const NavMore = styled.div`
    flex: 0 0 auto;
    position: relative;
    height: 100%;
    padding-right: 12px;
    margin: 0 2px;
    line-height: 60px;
    cursor: pointer;
    & i{
        position: absolute;
        right: -5px;
        top: 43%;
        display: inline-block;
        width: 7px;
        height: 7px;
        border: 1.2px solid transparent;
        border-right-color: rgba(0, 0, 0, 0.78);
        border-bottom-color: rgba(0, 0, 0, 0.78);
        transform: rotate(45deg) translateY(-50%);
        transition: transform .3s ease-in;
        &.active {
            transform: rotate(225deg);
        }
    }
`
export const MorePanel = styled.div`
    position: fixed;
    top: 60px;
    left: 0;
    opacity: 0;
    width: 100%;
    padding-top: 22px;
    background: rgb(255, 255, 255);
    box-shadow: rgb(0 33 155 / 12%) 0px 2px 6px 0px;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
    transition: all 0.2s ease-in-out 0s;
    visibility: hidden;
    &.panel-active {
        visibility: visible;
        opacity: 1
    }

`
export const MoreContent = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    &>div {
        width: 100%;
        max-width: 1280px;
        margin: 0 auto;
        overflow: hidden;
        dl {
            float: left;
            margin-right: 80px;
            margin-bottom: 40px;
            min-height: 210px;
            color: #383838;
            dt {
                margin-bottom: 12px;
                cursor: pointer;
                a {
                    display: inline-block;
                    color: #0033E8;
                }
            }
            dd {
                margin: 4px 0;
                padding: 3px 0 ;
                cursor: pointer;
            }
        }
    }
    @media(max-width: 1440px) {
        &>div {
            width: 80%;
            dl {
                margin-right: 50px;
                margin-bottom: 30px; 
            }
        }
    }
    @media(max-width: 1280px) {
        &>div {
            width: 86%;
            dl {
                margin-right: 32px;
                margin-bottom: 20px; 
            }
        }
    }
    @media(max-width: 992px) {
        &>div {
            width: 92%;
            font-size: 14px;
            dl {
                margin-right: 32px;
                margin-bottom: 20px; 
            }
        }
    }
`
export const MoreFooter = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 2px 0;
    height: 64px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    ul {
        li {
            display: inline-block;
            height: 100%;
            margin-right: 15px;
            padding: 0 5px;
            line-height: 64px;
            cursor: pointer;
            font-size: 14px;
        }
    }
    &>div {
        line-height: 64px;
        font-size: 12px;
        .iconfont {
            margin: 0 8px;
            padding: 0 4px;
            font-size: 26px;
            color: #000;
            &:hover {
                color: rgba(0,0,0,.45)
            }
        }
        span {
            margin: 0 20px;
            vertical-align: top;
        }
    }
    @media(max-width: 1280px) {
        padding: 0 10px;
        height: auto;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    @media(max-width: 992px) {
        ul {
            li {
                margin-right: 12px;
                line-height: 40px;
                font-size: 12px;
            }
        }
        &>div {
            line-height: 40px;
            .iconfont {
                font-size: 22px;  
            }
            span {
                margin: 0 14px;
            }
        }
    }
    @media (max-width: 450px) {
        &>div {
            span {
                display: block;
            }
        }
    }
`
export const CustomerArea = styled.div`
    flex: 0 0 auto;
    display: flex;
    height: 100%;
    margin-left: 20px;
    align-items: center;
    font-size: 16px;
    &>div {
        position: relative;
        margin: 0 3px;
        padding: 0 6px;
        cursor: pointer;
        a,a:hover,a:active,a:visited,a:link,a:focus{
           color: rgba(0,0,0,0.78);
        }
        &:first-child {
            padding: 7px 6px 0;
        }
        &:nth-child(2) {
            padding: 0 9px;
            border-left: 1px solid #ccc;
            border-right: 1px solid #ccc;
        }
        .iconfont {
            margin-right: 5px;
            font-size: 22px;
            &.active {
                color: rgb(31, 76, 235);
            }
        }
    }
    @media(max-width: 768px) {
        &>div:not(:first-child) {
            span {
                display: none;
            }
        }
    }
`
export const SearchBox = styled.div`
    position: absolute;
    top: 45px;
    left: -116px;
    font-size: 12px;
    padding: 18px;
    background-color: rgb(255, 255, 255);
    box-shadow: rgb(0 33 155 / 12%) 0px 0px 6px 2px;
    border-radius: 4px;
    background-color: #FFFFFF;
    &::after {
        position: absolute;
        top: -16px;
        left: 125px;
        content: "";
        display: block;
        border: 8px solid transparent;
        border-bottom-color: #fff;
    }
    h1 {
        margin-bottom: 13px;
        color: #1745EF;
        font-size: 17px;
    }
    a {
        display: inline-block;
        margin-right: 12px;
        margin-bottom: 12px;
        padding: 10px 22px;
        border-radius: 5px;
        border: 1px solid #EBEBEB;
        color: #383838;
    }
    @media(max-width: 768px) {
        position: fixed;
        top: 46px;
        left: 0;
        font-size: 12px;
        padding: 18px;
        border-radius: unset;
        box-shadow: none;
        height: 100%;
        &::after {  
            display: none;
        }
        h1 {
            font-size: 16px;
        }
        a {
            font-size: 14px;
            padding: 12px 25px;
        }
    }
`
export const SearchInput = styled.input`
    width: 260px;
    height: 42px;
    margin-bottom: 22px;
    padding: 0 10px;
    border: 1px solid #EBEBEB;
    border-radius: 6px;
    outline: none;
    font-size: 13px;
    &:focus {
        border-color: rgb(23, 69, 239);
    }
    @media(max-width: 768px) {
        width: 96%;
        margin: 0 auto 22px;
    }
`
export const NavGate = styled.div`
    position: relative;
    top: -5px;
    display: none;
    margin-top: 17px;
    margin-right: 5px;
    cursor: pointer;
    .line-split {
        margin-top: 5px;
        width: 19px;
        height: 13px;
        padding: 5px 0;
        box-sizing: border-box;
        border-top: 1px solid #000;
        border-bottom: 1px solid #000;
        background: #000;
        background-clip: content-box;
        transition: all 0.6s cubic-bezier(0.19, 1, 0.22, 1) 0s;
    }
    .line-close {
        position: relative;
        width: 19px;
        height: 13px;
        padding: 5px 0;
        &::before, &::after {
            position: absolute;
            top:50%;
            left: 0;
            content: "";
            width: 90%;
            height: 1px;
            transition: all 0.6s cubic-bezier(0.19, 1, 0.22, 1) 0s;
            background-color: rgba(0, 0, 0, 0.78);
            transform: translateY(-50%) rotate(45deg)
        }
        &::after {
            transform: translateY(-50%) rotate(-45deg)
        }
    }
    @media(max-width: 768px) {
       display: inline-block;
    }
`
export const NavgateContent = styled.div`
    position: fixed;
    inset: 46px 0px 0px;
    padding: 20px 10px;
    width: 100%;
    height: auto;
    overflow-Y: auto;
    background: #fff;
    box-sizing: border-box;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
`
export const NavgateItem = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
        flex: 0 0 31%;
        padding: 10px 0;
        border: 1px solid rgba(0, 0, 0, 0.08);
        margin-bottom: 10px;
        border-radius: 4px;
        color: rgba(0, 0, 0, 0.78);
    }
`
export const NavgateIcon = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding: 16px 0;
    font-size: 13px;
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-left: none;
    border-right: none;
    li {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 33%;
        margin-bottom: 20px;
        img {
            width: 28%;
            margin-bottom: 10px;
        }
    }
      
`