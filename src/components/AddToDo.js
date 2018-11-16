import React from "react";
import {connect} from "react-redux";
import {addTodo} from "../redux/actions";
import log from "../utils/Log";

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        log.info(props, "AddToDo");
        this.state = {input: ""};
    }

    updateInput = input => {
        this.setState({input});
    };

    handleAddTodo = () => {
        log.info(this.props);
        this.props.addTodo(this.state.input);
        this.setState({input: ""});
    };

    render() {
        return (
            <div>
                <input
                    onChange={e => this.updateInput(e.target.value)}
                    value={this.state.input}
                />
                <button className="add-todo" onClick={this.handleAddTodo}>
                    Add Todo
                </button>
            </div>
        );
    }
}

export default connect(
    null,
    {addTodo}
)(AddTodo);
// export default AddTodo;
