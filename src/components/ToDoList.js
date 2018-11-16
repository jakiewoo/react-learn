import React from "react";
import {connect} from "react-redux";
import Todo from "./ToDo";
import {getTodosByVisibilityFilter} from "../redux/selectors";
import AddTodo from "./AddToDo";

const ToDoList = ({todos}) => (
    <div>
        <ul className="todo-list">
            {todos && todos.length
                ? todos.map((todo, index) => {
                    return <Todo key={`todo-${todo.id}`} todo={todo}/>;
                })
                : "No todos, yay!"}
        </ul>
        <AddTodo/>
    </div>
);

const mapStateToProps = state => {
    const {visibilityFilter} = state;
    const todos = getTodosByVisibilityFilter(state, visibilityFilter);
    return {todos};
};

export default connect(mapStateToProps)(ToDoList);