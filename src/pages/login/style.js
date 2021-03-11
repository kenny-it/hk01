import styled from 'styled-components'

export const LoginWrapper = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FAFBFC;
`
export const LoginBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 396px;
    min-height: 464px;
    box-sizing: border-box;
    padding: 32px 24px;
    box-shadow: rgb(0 0 0 / 20%) 0px 1px 8px 0px;
    border-radius: 6px;
    background-image: linear-gradient(rgba(251, 252, 253, 0.98), rgb(245, 246, 250));
    .login-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        font-size: 22px;
    }
    .login-link {
        margin-bottom: 70px;
        font-size: 16px;
        color: rgb(138, 143, 149);
        line-height: 18px;
    }
    .login-or {
        margin: 30px 0 20px;
        text-align: center;
        font-size: 12px;
        color: rgba(26, 30, 40, 0.48);
        &:before, &:after {
            content: "";
            display: inline-block;
            border-top: 2px solid rgb(230, 231, 232);
            width: 56px;
            margin: 0px 16px;
            transform: translateY(-100%);
        }
    }
    .login-outside {
        display: flex;
        justify-content: space-evenly;
        &>a {
            width: 48px;
            height: 48px;
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
`
export const SwitchLoginBox = styled.div`
    display: flex;
    flex-direction: column;
    &>a {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 48px;
        border-radius: 24px;
        box-shadow: rgb(0 0 0 / 20%) 0px 1px 4px 0px;
        background: rgb(233, 233, 233);
        color: rgb(0, 0, 0);
        font-size: 16px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        letter-spacing: normal;
        margin-bottom: 12px;
        padding: 16px;
        box-sizing: border-box;
        i {
            font-size: 22px;
            line-height: 18px;
            margin-right: 10px;
        }
        &:last-child {
            color: #fff;
            background: #000;
        }
    }
`

export const LoginImg = styled.img`
    width: 40px;
    height: 25px;
`