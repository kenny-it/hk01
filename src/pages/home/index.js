import React, { Component } from 'react'
import Carousel from './components/Carousel'
import NewsCombine from '../../common/components/NewsCombine'
import NewsSpecial from '../../common/components/NewsSpecial'
import {
    MainPageWrapper
} from './style'

class Home extends Component {
    render() {
        return (
            <MainPageWrapper>
                <Carousel />
                <NewsCombine title="最Hit"/>
                <NewsCombine title="港聞"/>
                <NewsSpecial />
            </MainPageWrapper>
        )
    }
}

export default Home