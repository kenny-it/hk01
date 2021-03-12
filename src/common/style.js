import styled from 'styled-components'

export const CaseWrapper = styled.div`
    width: ${props => props.width};
    margin: 0px 0px 8px;
    box-sizing: border-box;
    min-width: 0px;
    background: rgb(245, 246, 250);
`

export const CaseContainer = styled.div`
    position: relative;
    img {
        width: 100%;
    }
`
export const CasePlayBox = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 0 3px 2px;
    padding: 4px;
    font-size: 12px;
    color: rgb(245, 246, 250);
    background-color: rgb(3, 7, 15);
    border-radius: 4px;
`

export const CaseDetail = styled.div`
    padding: 13px;
    margin-bottom: 12px;
    .case-desc {
        font-size: 18px;
        line-height: 1.5;
    }
    .case-detail {
        margin-top: 10px;
        span {
            float: left;
            font-size: 14px;
            color: #1a1e287a;
            &:first-child {
                color: #0060FF;
                font-size: 10px;
                margin: -2px 8px 0 0;
                padding: 2px 3px;
                border: 1px solid #0060FF;
            }
        }
        i {
            float: right;
            cursor: pointer;
        }
    }
`

export const NewsContainer = styled.div`
    padding: 50px 0 30px;
`

export const NewsBox = styled.div`
    max-width: 1280px;
    padding-left: 12px;
    padding-right: 12px;
    margin: 0 auto;
    min-width: 0px;
    width: 100%;
`

export const NewsTitle = styled.div`
    overflow: hidden;
    margin-bottom: 15px;
    h2 {
        float: left;
        line-height: 31px;
        font-size: 20px;
    }
    a {
        float: right;
        position: relative;
        line-height: 31px;
    }
`
export const NewsMain = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

export const SpecialWrapper = styled.div`
    padding: 24px 0 12px;
    margin: 0 0 10px;
    background: #2d2d2d;
    h2 {
        color: #fff;
    }
`



