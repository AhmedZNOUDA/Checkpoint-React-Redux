import { connect } from 'react-redux'
import Task from './Task'


const ListTask = (props) => {
    console.log(props)
    return(
        <div>
            {
                props.todo.map(el => <Task todo={el} />)
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        todo: state.TaskReducer
    }
}

export default connect (mapStateToProps) (ListTask);