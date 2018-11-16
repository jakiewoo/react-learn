import React from "react";
import {connect} from "react-redux";
import {toggleTodo} from "../redux/actions";

const Todo = ({todo, toggleTodo}) => (
    <li className="todo-item" onClick={() => toggleTodo(todo.id)}>
        {todo && todo.completed ? "👌" : "👋"}{" "}
        {todo.content}
    </li>
);

export default connect(
    null,
    {toggleTodo}
)(Todo);
