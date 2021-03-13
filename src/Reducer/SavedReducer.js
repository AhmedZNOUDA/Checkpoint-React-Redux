import { CLEAR, SAVE_TASK } from "../Actions/Types"

const SavedReducer = (state = null, action) => {
    switch(action.type){
        case SAVE_TASK: 
            return action.payload
        case CLEAR:
            return null
        default:
            return state
    }   
}

export default SavedReducer