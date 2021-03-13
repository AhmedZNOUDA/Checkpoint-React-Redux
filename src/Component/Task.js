import {Button} from 'react-bootstrap'
import { connect } from 'react-redux'
import { completeTask, deleteTask, editTask, saveTask } from '../Actions/Actions'

const Task = (props) => {
    return (
        <div>
            <p className={props.todo.complete ? 'Done' : undefined }>{props.todo.text}</p> 
            <Button variant="primary" onClick={() => props.complete(props.todo.id)}>{props.todo.complete ? 'Undo' : 'Complete'}</Button> <Button variant="secondary" onClick={() => props.save(props.todo)}>Edit</Button> <Button variant="danger" onClick={() => props.delete(props.todo.id)}>Delete</Button>
            
            
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        delete: id => dispatch(deleteTask(id)),
        complete: id => dispatch(completeTask(id)),
        save: todo => dispatch(saveTask(todo)),
    }
}

export default connect (null, mapDispatchToProps) (Task);