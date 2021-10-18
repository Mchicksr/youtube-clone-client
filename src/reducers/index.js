import {combineReducers} from 'redux'
import posts from './posts'
import auth from './auth'
import profile from './profile'
import youtube from './youtube'
export default combineReducers({posts,auth,youtube,profile})

