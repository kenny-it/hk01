import { fromJS } from "immutable";
import * as constants from './constants';

const defaultState = fromJS({
    carousels: [],
    promotions: [],
    exhibitions: []
})

const modifySwiper = (state, action) => {
    return state.merge({
        carousels: fromJS(action.data.carousel),
        promotions: fromJS(action.data.promotions)
    })
}

const modifyExhibition = (state, action) => {
    return state.merge({
        exhibitions: fromJS(action.data)
    })
}

function Reducer(state = defaultState, action) {
    switch (action.type) {
        case constants.MODIFY_SWIPER_LIST_DATA: 
            return modifySwiper(state, action);
        case constants.MODIFY_EXHIBITION_LIST_DATA: 
            return modifyExhibition(state, action)
        default: 
            return state;
    }
}

export default Reducer