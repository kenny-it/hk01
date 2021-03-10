import * as constants from './constants'

export const getMoreAction = flag => {
    return {
        type: constants.CHANGE_SHOW_MORE_DISPLAY,
        flag
    }
}