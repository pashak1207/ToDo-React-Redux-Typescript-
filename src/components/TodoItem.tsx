import React from "react";
import { ITodo } from "../interfaces";
import { useDispatch } from "react-redux";
import { checkTodoAction, removeTodoAction } from "../redux/rootReducer";

export const TodoItem: React.FC<ITodo> = (props) => {
  const dispatch = useDispatch();
  const classNameTodo = props.completed ? "todo completed" : "todo";

  const clickCheckHandler = () => {
    dispatch(
      checkTodoAction({ title: props.title, completed: props.completed })
    );
  };

  const deleteTodo = () => {
    dispatch(
      removeTodoAction({ title: props.title, completed: props.completed })
    );
  };

  return (
    <li className={classNameTodo}>
      <label>
        <input
          checked={props.completed}
          onChange={clickCheckHandler}
          type="checkbox"
        />
        <span></span>
      </label>
      <div className={"todo__text"}>
        <p>{props.title}</p>
        <p>{props.date}</p>
      </div>
      <button onClick={deleteTodo}>
        <i className={"material-icons red-text"}>delete</i>
      </button>
    </li>
  );
};
