import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss';
import {
    CarouselWrapper,
    CarouselContent,
    SwiperBoxTop,
    SwiperBoxBottom
} from './style'

SwiperCore.use([Navigation])

let swiperVertical = null;

const slideConfig = {
    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,
    speed: 800,
    autoplay: {delay: 6000},
    observer:true,
    observeParents:true,
    onSlideChange: swiper => {
        if (swiperVertical) {
            swiperVertical.slideTo(swiper.activeIndex - 0 + 2, 800)
        }
    }
}

const slideLeftConfig = {
    spaceBetween: 10,
    direction: "vertical",
    slidesPerView: 3,
    speed: 800,
    loop: true,
    observer:true,
    observeParents:true,
    onInit: swiper => {
        swiperVertical = swiper;
    }
}

const slideSuggestConfig = {
    spaceBetween: 10,
    slidesPerView: 4,
    speed: 800,
    observer:true,
    observeParents:true,
}

class Casousel extends Component {

    getSwiperLeft() {
        const { carousels } = this.props
        return (
            carousels.map(item => {
                return (
                    <SwiperSlide key={item.channel}>
                        <Link to="/detail/1">
                            <div className="slide-box">
                                <div className="slide-mask">
                                    <p>{item.desc}</p>
                                    <div className="slide-desc">
                                        <div>
                                            {
                                                item.selective ? <span >精选</span> : ''
                                            }
                                            {item.subclass + "  " +item.date}
                                        </div>
                                        <div>
                                            <i className="iconfont">&#xe83e;</i>
                                        </div>
                                    </div>
                                </div>
                                <img src={item.imgUrl} alt="" />
                            </div>
                        </Link>
                    </SwiperSlide>
                )
            })
        )
    }

    getSwiperRight() {
        const { carousels } = this.props
        return (
            carousels.map(item => {
                return (
                    <SwiperSlide key={item.channel}>
                        <Link to="/detail/123">
                            <div className="slide-box">
                                <div className="slide-mask">
                                    <p>{item.desc}</p>
                                </div>
                                <img src={item.imgUrl} alt="" />
                            </div>
                        </Link>
                    </SwiperSlide>
                )
            })
        )
    }

    render() {
        return (
                <CarouselWrapper>
                    <CarouselContent>
                        <SwiperBoxTop>
                            <div className="swiper-left">
                                <Swiper {...slideConfig} navigation>
                                    { this.getSwiperLeft() }
                                </Swiper>
                            </div>
                            <div className="swiper-right">
                                <Swiper {...slideLeftConfig}> 
                                    { this.getSwiperRight() }
                                </Swiper>
                            </div>
                        </SwiperBoxTop>
                        <SwiperBoxBottom>
                            <h2>推廣項目</h2>
                            <div className="project-suggest">
                                <Swiper {...slideSuggestConfig}>
                                    {
                                        this.props.promotions.map(item => {
                                            return (
                                                <SwiperSlide key={item.id}>
                                                    <Link to="/detail/123">
                                                        <img src={item.imgUrl} alt="" />
                                                    </Link>
                                                </SwiperSlide>
                                            )
                                        })
                                    }
                                </Swiper>
                            </div>
                        </SwiperBoxBottom>
                    </CarouselContent>
                </CarouselWrapper>
        )
    }
}

 

export default Casousel