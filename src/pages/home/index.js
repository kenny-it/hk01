import Carousel from './components/Carousel'
import NewsCombine from '../../common/components/NewsCombine'
import NewsSpecial from '../../common/components/NewsSpecial'
import {
    MainPageWrapper,
    ScrollBar
} from './style'
import { connect } from 'react-redux'
import { Component } from 'react'
import HorizontalScroll from "react-scroll-horizontal";
import * as actionCreator from './store/actionCreator'


class Home extends Component {

    getNewsBox() {
        const { exhibitions } = this.props
       return exhibitions.map(item => {
           if (item.type === 'special') {
               return (<NewsSpecial key={item.title} title={item.title} list={item.list}/>)
           } 
           return (<NewsCombine key={item.title} title={item.title} list={item.list}/>)
       })
    }

    render() {
        const { carousels, promotions } = this.props;
        return (
            <MainPageWrapper>
                {this.getScrollBar()}
                <Carousel carousels={carousels} promotions={promotions}/>
                {this.getNewsBox()}
            </MainPageWrapper>
        )
    }

    componentDidMount() {
        this.props.getSwiperList()
        this.props.getExhibitionList()
    }

    getScrollBar() {
        return (
            <ScrollBar>
                    <HorizontalScroll>
                        <a href="/">港聞</a>
                        <a href="/">娛樂</a>
                        <a href="/">生活</a>
                        <a href="/">觀點</a>
                        <a href="/">國際</a>
                        <a href="/">經濟</a>
                        <a href="/">體育</a>
                        <a href="/">女生</a>
                        <a href="/">科技玩物</a>
                        <a href="/">熱話</a>
                        <a href="/">社區</a>
                        <a href="/">好食玩飛</a>
                        <a href="/">中國</a>
                        <a href="/">藝文格物</a>
                        <a href="/">影像</a>
                    </HorizontalScroll>
                </ScrollBar>
        )
    }

}

const mapState = state => {
    return {
        carousels: state.getIn(['home', 'carousels']).toJS(),
        promotions: state.getIn(['home', 'promotions']).toJS(),
        exhibitions: state.getIn(['home', 'exhibitions']).toJS()
    }
}

const mapDispatch = dispatch => {
    return {
        getSwiperList() {
            dispatch(actionCreator.getSwiperTypes())
        },
        getExhibitionList() {
            dispatch(actionCreator.getExhibitionTypes())
        }
    }
}

export default connect(mapState, mapDispatch)(Home)