import { combineReducers } from 'redux'

import blogReducer from './blogReducer'

import authReducer from './authReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    blog: blogReducer
})

export default rootReducer





