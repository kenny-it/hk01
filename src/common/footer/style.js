import styled from 'styled-components'

export const FooterWrapper = styled.footer`
    color: rgb(255, 255, 255);
    background: rgb(45, 45, 45);
`
export const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1280px;
    margin: 0 auto;
    padding: 30px 0;
    box-sizing: border-box;
    min-width: 0px;
    font-size: 14px;
    @media (max-width: 1280px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 12px 10px;
    }
`
export const LogoContent = styled.div`
    float: left;
    img {
        display: inline-block;
        width: 48px;
        height: 48px;
        color: #fff;
    }
    @media (max-width: 992px) {
        float: none;
        text-align: center;
    }
`
export const AboutContent = styled.div`
   float: left;
   margin-left: 30px;
   a, a:hover, a:active, a:visited, a:link, a:focus{
        padding-left: 12px;
        padding-right: 12px;
        color: #fff;
        line-height: 48px;
   }
   @media (max-width: 992px) {
        margin-left: 0;
        float: none;
        text-align: center;
        a {
            display: inline-block;
        }
}
`
export const SocialContent = styled.div`
   display: flex;
   line-height: 48px;
   i {
       margin: 0 10px;
       font-size: 24px;
       cursor: pointer;
       &:hover {
           color: #ccc;
       }
   }
   span {
       margin-left: 12px;
   }
   @media (max-width: 992px) {
       flex-direction: column;
      justify-content: center;
      align-items: center;
   }
`