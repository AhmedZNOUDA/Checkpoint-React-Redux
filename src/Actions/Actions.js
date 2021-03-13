import { ADD_TASK, DELETE_TASK, COMPLETE_TASK, SAVE_TASK, EDIT_TASK, CLEAR} from './Types'


export const addTask =  newTask => {
    return {
        type: ADD_TASK,
        payload: newTask
    }
}

export const deleteTask =  id => {
    return {
        type: DELETE_TASK,
        payload: id
    }
}

export const completeTask =  id => {
    return {
        type: COMPLETE_TASK,
        payload: id
    }
}

export const saveTask = todo => {
    return {
        type: SAVE_TASK,
        payload: todo
    }
}

export const editTask = updatedTask => {
    return {
        type: EDIT_TASK,
        payload: updatedTask
    }
}

export const clearSaved = () => {
    return{
        type: CLEAR
    }
}



