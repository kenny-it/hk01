import styled from 'styled-components'


export const MainPageWrapper = styled.div`
    padding-top: 60px;
    @media (max-width: 768px) {
        padding-top: 46px;
    }
`
export const ScrollBar = styled.div`
    display: none;
    width: 100%;
    height: 40px;
    background: rgb(250, 251, 253);
    box-shadow: rgb(0 33 155 / 12%) 0px 2px 6px 0px;
    line-height: 40px;
    a {
        min-width: 65px;
        height: 100%;
        text-align: center;
        cursor: pointer;
    }
    @media (max-width: 768px) {
        display: block;
    }
`