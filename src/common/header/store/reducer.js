import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
    showMore: false
})

const changeShowMore = (state, action) => {
    if (typeof action.flag === 'boolean') {
        return state.set('showMore', action.flag)
    } else {
        const flag = state.get('showMore')
        return state.set('showMore', !flag)
    }
}

function Reducer(state = defaultState, action) {
    switch (action.type) {
        case constants.CHANGE_SHOW_MORE_DISPLAY: 
            return changeShowMore(state, action)
        default: 
            return state
    }
}

export default Reducer