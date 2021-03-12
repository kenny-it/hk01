import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
    showMore: false,
    showSearchBox: false,
    titles: []
})

const changeShowMore = (state, action) => {
    if (typeof action.flag === 'boolean') {
        return state.set('showMore', action.flag)
    } else {
        const flag = state.get('showMore')
        return state.set('showMore', !flag)
    }
}

const changeSearchBox = (state, action) => {
    if (typeof action.flag === 'boolean') {
        return state.set('showSearchBox', action.flag)
    } else {
        const flag = state.get('showSearchBox')
        return state.set('showSearchBox', !flag)
    }
}

const changeHeaderInfo = (state, action) => {
    return state.set('titles', fromJS(action.data))
}

function Reducer(state = defaultState, action) {
    switch (action.type) {
        case constants.CHANGE_SHOW_MORE_DISPLAY : 
            return changeShowMore(state, action);
        case constants.CHANGE_SEARCH_BOX_DISPLAY :
            return changeSearchBox(state,action);
        case constants.CHANGE_HEADER_TITLE_DATA: 
            return changeHeaderInfo(state, action);
        default: 
            return state
    }
}

export default Reducer