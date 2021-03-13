import axios from "axios";
import * as constants from './constants'

export const getSwiperTypes = () => {
    return async dispatch => {
        try {
            const { data } = await axios.get('/api/home/carousel.json')
            dispatch(getSwiperChangeType(data.data))
        } catch(err) {
            console.log(err.message);
        }
    }
}
export const getExhibitionTypes = () => {
    return async dispatch => {
        try {
            const { data } = await axios.get('/api/home/exhibition.json')
            dispatch(getExhibitonChangeType(data.data))
        } catch(err) {
            console.log(err.message);
        }
    }
}

export const getSwiperChangeType = data => {
    return {
        type: constants.MODIFY_SWIPER_LIST_DATA,
        data
    }
}
export const getExhibitonChangeType = data => {
    return {
        type: constants.MODIFY_EXHIBITION_LIST_DATA,
        data
    }
}