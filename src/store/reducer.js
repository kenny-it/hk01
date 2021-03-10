import { combineReducers } from 'redux-immutable'
import { HeaderReducer } from '../common/header/store'

const rootReducer = combineReducers({
    header: HeaderReducer
})

export default rootReducer