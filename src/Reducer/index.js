import {combineReducers} from 'redux'
import TaskReducer from './TaskReducer'
import SavedReducer from './SavedReducer'

export default combineReducers({TaskReducer, SavedReducer})