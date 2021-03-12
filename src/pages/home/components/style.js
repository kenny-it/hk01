import styled from 'styled-components'

export const CarouselWrapper = styled.div`
    padding-top: 24px;
    padding-bottom: 12px;
    background: #f4f4f9;
`
export const CarouselContent = styled.div`
    max-width: 1280px;
    margin: 0 auto;
`
export const SwiperBoxTop = styled.div`
   display: flex;
   height: 464px;
   .swiper-left {
       width: 826px;
       height: 100%;
       .slide-box {
           position: relative;
           width: 100%;
           height: 464px;
           .slide-mask {
               position: absolute;
               top: 0;
               left: 0;
               display: flex;
               flex-direction: column;
               justify-content: flex-end;
               padding-left: 12px;
               padding-right: 12px;
               width: 100%;
               height: 100%;
               background: rgba(0,0,0,.2);
               box-sizing: border-box;
               font-size: 13px;
               color: #fff;
               &>p {
                   font-size: 23px;
                   font-weight: 700;
                   letter-spacing: 3px;
               }
               .slide-desc {
                   display: flex;
                   justify-content: space-between;
                   margin: 16px 0;
                   span {
                       margin-right: 8px;
                       padding: 2px 5px;
                       border-radius: 3px;
                       font-size: 10px;
                       background-color: rgba(0, 96, 255, 0.5);
                       border-color: rgba(0, 96, 255, 0.5);
                   }
               }
           }
       }
       img {
           width: 826px;
           height: 464px;
       }
   }
   .swiper-right {
       width: 260px;
       height: 100%;
       margin-left: 6px;
       margin-right: 8px;
       box-sizing: border-box;
       .swiper-container {
           width: 100%;
           height: 100%;
       }
       .slide-mask {
           position: absolute;
           left: 0;
           bottom: 0;
           padding: 0 10px 8px;
           background: rgba(0,0,0,.2);
           box-sizing: border-box;
           color: #fff;
           font-size: 12px;
       }
       img {
           width: 100%;
       }
   }
`
export const SwiperBoxBottom = styled.div`
    margin: 30px 0;
    font-size: 20px;
    .project-suggest {
        margin: 12px 0 0;
        width: 85.5%;
        .swiper-container {
            width: 100%;
            height: 100%;
            .swiper-slide {
                width: 100%;
                height: 100%;
                img {
                    width: 100%;
                }
            }
        }
    }
`