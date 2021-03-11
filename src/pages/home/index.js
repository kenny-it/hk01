import React, { Component } from 'react'
import Carousel from './components/Carousel'
import {
    MainPageWrapper
} from './style'

class Home extends Component {
    render() {
        return (
            <MainPageWrapper>
                <Carousel />
            </MainPageWrapper>
        )
    }
}

export default Home