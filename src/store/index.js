import { createStore, combineReducers } from 'redux'
import userReducer from './reducers/userReducer'

const rootReducer = combineReducers({
    User: userReducer
})

export default createStore(rootReducer)