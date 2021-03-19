import styled from 'styled-components'

export const DetailWrapper = styled.div`
    padding-top: 60px;
    width: 100%;
    @media(max-width: 992px) {
        padding-top: 30px;
    }
`
export const DetailContainer = styled.div`
    max-width: 950px;
    width: 100%;
    margin: 0 auto;
    padding: 20px 0;
    .detail-title {
        margin: 40px 0 24px;
        font-size: 32px;
        font-weight: 600;
        line-height: 1.3;
        letter-spacing: 4px;
    }
    @media(max-width: 992px) {
        .detail-title {
            margin: 30px 0 24px;
            padding: 0 10px;
        }
    }
`
export const DetailPicture = styled.div`
    img {
        width: 100%;
    }
`
export const DetailMain = styled.div`
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    @media(max-width: 992px) {
        max-width: unset;
        width: 96%;
    }
`
export const DescribeBox = styled.div`
    padding: 26px 0;
    margin-bottom: 30px;
    border-bottom: 1px solid rgb(0, 96, 255);
`
export const DescribeTitle = styled.div`
    overflow: hidden;
    margin-bottom: 20px;
    h2 {
        float: left;
        font-size: 20px;
        color: #0060ff;
        font-weight: 700;
    }
    p {
        float: right;
        padding: 3px 8px;
        background: #1877F2;
        border: 1px solid #4267b2;
        color: #fff;
        font-size: 12px;
        border-radius: 4px;
        cursor: pointer;
        i {
            vertical-align: text-bottom;
        }
    }
`
export const DescribeDetail = styled.div`
    font-size: 14px;
    color: #000066;
    span {
        margin-right: 12px;
        padding: 0 4px 0 0;
        i {
            font-size: 22px;
            vertical-align: sub;
        }
    }
`
export const ArticleWrapper = styled.div`
    img {
        width: 100%;
    }
    .article-img-area {
        color: #00000066;
        font-size: 14px;
        p {
            margin: 4px 0 0;
        }
    }
    .article-word {
        margin: 30px 0 24px;
        line-height: 24px;
        letter-spacing: 1px;
        font-size: 18px;
        color: #000000C7;
        word-break: break-word;
        overflow-wrap: break-word;
    }
    .article-item {
        h2 {
            margin-top: 22px;
            line-height: 1.33;
            letter-spacing: 1.3px;
            text-align: justify;
            color: rgba(0, 0, 0, 0.78);
            font-weight: 600;
            font-size: 18px;
        }
    }
    @media (max-width: 600px) {
        .iframe-box {
            width: 90% !important;
        }
    }
`
export const ArticleMain = styled.div`
    position: relative;
    margin: 0 0 32px;
    padding: 16px;
    background: #f4f4f9;
    font-size: 18px;
    font-weight: 300;
    line-height: 24px;
    letter-spacing: 1.1px;
    border-radius: 6px;
    color: rgba(0, 0, 0, 0.84);
    p:last-child {
        margin-top: 24px;
    }
`
export const DetailCommand = styled.div`
    margin: 20px 0;
    max-width: 800px;
    margin: 0 auto;
    @media (max-width: 992px) {
        width: 96%;
    }
`
export const CommandIcons = styled.div`
    margin: 50px 0 0;
    padding: 0 0 30px;
    ul {
        display: flex;
        li {
            margin-right: 20px;
            font-size: 16px;
            cursor: pointer;
            img {
                width: 28px;
                height: 28px;
                margin-right: 7px;
            }
        }
    }
    @media(max-width: 992px) {
        ul {
            justify-content: center;
            align-items: center;
        }
    }
`
export const CommandMain = styled.div`
    margin-bottom: 50px;
    padding: 46px 0 26px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    &>div:first-child {
        display: flex;
        justify-content: space-between;
        margin: 20px 0;
        font-size: 14px;
        font-weight: 700;
        h2 {
            font-size: 20px;
            color: #212529;
        }
        p {
            cursor: pointer;
        }
    }
    &>div:nth-child(2) {
        display: flex;
        font-size: 12px;
        color: rgba(0,0,0,0.4);
        img {
            width: 64px;
            height: 64px;
            margin-right: 26px;
        }
        div {
            flex: 1;
            textarea {
                width: 100%;
                height: 64px;
                border-radius: 5px;
                color: rgb(102, 102, 102);
                box-sizing: border-box;
                padding: 8px 8px 12px;
                margin-bottom: 20px;
                background-color: rgba(0, 0, 0, 0.08);
                font-size: 14px;
            }
            p {
                line-height: 20px;
            }
        }
    }
    @media (max-width: 630px) {
        &>div:nth-child(2) {
            img {
                width: 30px;
                height: 30px;
            }
        }
        div textarea {
            height: 46px !important;
        }
    }
`

export const AsideNav = styled.div`
    position: absolute;
    top: 0;
    left: -80px;
    width: 72px;
    &.aside-fixed {
        position: fixed;
        top: 87px;
        left: 25%;
    }
    li {
        margin-bottom: 20px;
        width: 44px;
        height: 44px;
        text-align: center;
        border: 1px solid #eee;
        border-radius: 50%;
        line-height: 44px;
        cursor: pointer;
        i {
            display: inline-block;
            font-size: 20px;
            color: rgb(60, 60, 60);
        }
    }
    @media (max-width: 1800px) {
        &.aside-fixed {
            left: 16%;
        }
    }
    @media (max-width: 1400px) {
        &.aside-fixed {
            left: 10%;
        }
    }
    @media (max-width: 1200px) {
        &.aside-fixed {
            left: 5%;
        }
    }
    @media (max-width: 992px) {
        display: none;
    }
`