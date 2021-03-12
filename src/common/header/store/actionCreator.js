import * as constants from './constants'
import axios from 'axios'

export const getMoreAction = flag => {
    return {
        type: constants.CHANGE_SHOW_MORE_DISPLAY,
        flag
    }
}
export const getSearchBoxAction = flag => {
    return {
        type: constants.CHANGE_SEARCH_BOX_DISPLAY,
        flag
    }
}

const getTitlesInfoChange = data => {
    return {
        type: constants.CHANGE_HEADER_TITLE_DATA,
        data
    }
}

export const getTitlesInfo = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('/api/header/info.json')
            dispatch(getTitlesInfoChange(data.data))
        } catch(err) {
            console.log(err.message)
        }
    }
}