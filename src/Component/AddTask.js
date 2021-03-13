import React from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTask, clearSaved, editTask} from "../Actions/Actions";

class AddTask extends React.Component {
  state = {
    text: "",
  };

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  addOrEdit = () => {
    if (this.props.Saved) {
      this.props.edit(this.state);
      this.setState({text:""});
      this.props.clear()
    } else {
      this.props.addNewTask({
        text: this.state.text,
        id: uuidv4(),
        complete: false,
      });

      this.setState({text:""});
    }
  };

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.Saved);
  }

  render() {
    return (
      <div>
        <input
          value={this.state.text}
          placeholder="add new todo..."
          onChange={this.handleChange}
        />
        <button onClick={this.addOrEdit}>{this.props.Saved ? 'Edit' : 'Add'}</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewTask: (todo) => dispatch(addTask(todo)),
    edit: (todo) => dispatch(editTask(todo)),
    clear: () => dispatch(clearSaved())
  };
};

const mapStateToProps = (state) => {
  return {
    Saved: state.SavedReducer,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
