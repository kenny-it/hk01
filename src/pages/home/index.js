import Carousel from './components/Carousel'
import NewsCombine from '../../common/components/NewsCombine'
import NewsSpecial from '../../common/components/NewsSpecial'
import {
    MainPageWrapper
} from './style'
import { connect } from 'react-redux'
import { Component } from 'react'
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
        const { carousels, promotions } = this.props
        return (
            <MainPageWrapper>
                <Carousel carousels={carousels} promotions={promotions}/>
                {this.getNewsBox()}
            </MainPageWrapper>
        )
    }

    componentDidMount() {
        this.props.getSwiperList()
        this.props.getExhibitionList()
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