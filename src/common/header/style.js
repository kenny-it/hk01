import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 60px;
    user-select: none;
    background: rgb(255,255,255);
    color: rgba(0,0,0,0.78);
    box-sizing: border-box;
    box-shadow: rgb(0 33 155 / 12%) 0px 4px 5px -2px;
`
export const  HeaderCenter = styled.div`
    margin: 0 auto;
    box-sizing: border-box;
    min-width: 0;
    width: 100%;
    max-width: 1280px;
    height: 100%;
`
export const LogoArea = styled.div`
    float: left;
    width: 105px;
    height: 100%;
    text-align: center;
    img {
        margin-top: 6px;
        width: 80%;
        height: 80%;
        vertical-align: middle;
    }
`
export const NavArea = styled.div`
    float: left;
    height: 100%;
    &>ul {
        margin-left: 6px;
        display: inline-block;
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
`
export const NavMore = styled.div`
    position: relative;
    display: inline-block;
    height: 100%;
    padding-left: 12px;
    padding-right: 12px;
    margin: 0 2px;
    cursor: pointer;
    & i{
        position: absolute;
        right: -5px;
        top: 0;
        display: inline-block;
        width: 7px;
        height: 7px;
        border: 1.2px solid transparent;
        border-right-color: rgba(0, 0, 0, 0.78);
        border-bottom-color: rgba(0, 0, 0, 0.78);
        transform: rotate(45deg);
        transition: transform .3s ease-in;
        &.active {
            top: 4px;
            transform: rotate(225deg);
        }
    }
`
export const MorePanel = styled.div`
    position: fixed;
    top: 60px;
    left: 0;
    display: none;
    opacity: 0;
    width: 100%;
    padding-top: 22px;
    background: rgb(255, 255, 255);
    box-shadow: rgb(0 33 155 / 12%) 0px 2px 6px 0px;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
    transition: all 0.2s ease-in-out 0s;
    &.panel-active {
        display: block;
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
            margin-right: 90px;
            margin-bottom: 40px;
            color: #383838;
            dt {
                margin-bottom: 12px;
                color: #0033E8;
                cursor: pointer;
            }
            dd {
                margin: 4px 0;
                padding: 3px 0 ;
                cursor: pointer;
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
`
export const CustomerArea = styled.div`
    float: left;
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
        &:nth-child(2) {
            padding: 4px 9px;
            border-left: 1px solid #ccc;
            border-right: 1px solid #ccc;
        }
        .iconfont {
            margin-right: 5px;
            font-size: 22px;
        }
    }
`
export const SearchBox = styled.div`
    position: absolute;
    top: 42px;
    left: 0;
    font-size: 12px;
    padding: 18px;
    background-color: rgb(255, 255, 255);
    box-shadow: rgb(0 33 155 / 12%) 0px 0px 6px 2px;
    border-radius: 4px;
    background-color: #FFFFFF;
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
`