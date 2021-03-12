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
import { connect } from 'react-redux';

SwiperCore.use([Navigation])

let swiperVertical = null;

const slideConfig = {
    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,
    speed: 800,
    autoplay: {delay: 6000},
    onSlideChange: swiper => {
        if (swiperVertical) {
            swiperVertical.slideTo(swiper.activeIndex - 1, 800)
        }
    }
}

const slideLeftConfig = {
    spaceBetween: 10,
    direction: "vertical",
    slidesPerView: 3,
    speed: 800,
    loop: true,
    onInit: swiper => {
        swiperVertical = swiper;
    }
}

const slideSuggestConfig = {
    spaceBetween: 10,
    slidesPerView: 4,
    loop: true,
    speed: 800,
    autoplay: {delay: 6000}
}

class Casousel extends Component {

    getSwiperLeft() {
        const { swiperList } = this.props
        return (
            swiperList.map(item => {
                return (
                    <SwiperSlide key={item.id}>
                        <Link to="/">
                            <div className="slide-box">
                                <div className="slide-mask">
                                    <p>{item.desc}</p>
                                    <div className="slide-desc">
                                        <div>
                                            {
                                                item.selective ? <span >精选</span> : ''
                                            }
                                            {item.time}
                                        </div>
                                        <div>
                                            <i className="iconfont">&#xe83e;</i>
                                        </div>
                                    </div>
                                </div>
                                <img src={item.srcUrl} alt="" />
                            </div>
                        </Link>
                    </SwiperSlide>
                )
            })
        )
    }

    getSwiperRight() {
        const { swiperList } = this.props
        return (
            swiperList.map(item => {
                return (
                    <SwiperSlide key={item.id}>
                        <Link to="/">
                            <div className="slide-box">
                                <div className="slide-mask">
                                    <p>{item.desc}</p>
                                </div>
                                <img src={item.srcUrl} alt="" />
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
                                        this.props.swiperList.map(item => {
                                            return (
                                                <SwiperSlide key={item.id}>
                                                    <Link to="/">
                                                        <img src={item.srcUrl} alt="" />
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

const mapState = state => {
    return {
        swiperList: state.getIn(['home', 'swiperList']).toJS()
    }
}

export default connect(mapState, null)(Casousel)