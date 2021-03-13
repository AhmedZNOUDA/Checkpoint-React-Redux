import { v4 as uuidv4 }  from 'uuid'
import {ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK} from '../Actions/Types'


const TaskReducer = (state= [], action) => {
    switch(action.type){
        case ADD_TASK:
            return state.concat(action.payload)
        case DELETE_TASK: 
            return state.filter(el => el.id !== action.payload)
        case COMPLETE_TASK:
            return state.map(el => el.id === action.payload ? {...el, complete: !el.complete} : el )
        case EDIT_TASK:
            return state.map(el => el.id === action.payload.id ? action.payload : el)
        default:
            return state
    }

}

export default TaskReducer