import { createStore, combineReducers } from 'redux'
import userReducer from './reducers/userReducer'
import blogsReducer from './reducers/blogsReducer'

const rootReducer = combineReducers({
    User: userReducer,
    Blog: blogsReducer
})

export default createStore(rootReducer)