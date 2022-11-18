import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../redux/rootReducer";

export const TodoForm: React.FC = () => {
  const [newTitle, setNewTitle] = useState<string>("");
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const dispatch = useDispatch();

  function changeHandler(event: React.ChangeEvent<HTMLInputElement>): void {
    setNewTitle(event.target.value);
  }

  function clickSubmitHandler(): void {
    dispatch(
      addTodoAction({
        title: newTitle,
        // eslint-disable-next-line no-restricted-globals
        completed: isCompleted,
        date: new Date().toLocaleDateString("en-US"),
      })
    );
    setNewTitle("");
    setIsCompleted(false);
  }

  function keyPressHandler(event: React.KeyboardEvent): void {
    if (event.key === "Enter") {
      dispatch(
        addTodoAction({
          title: newTitle,
          // eslint-disable-next-line no-restricted-globals
          completed: isCompleted,
          date: new Date().toLocaleDateString("en-US"),
        })
      );
      setNewTitle("");
      setIsCompleted(false);
    }
  }

  function checkboxChangeHandler(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    setIsCompleted(event.target.checked);
  }

  return (
    <div className={"input-field mt2"}>
      <input
        value={newTitle}
        onChange={changeHandler}
        onKeyPress={keyPressHandler}
        type="text"
        id={"title"}
        placeholder={"Введіть назву завдання"}
      />
      <label htmlFor="title" className={"active"}>
        Введіть назву завдання
      </label>
      <p className={"formChecked"}>
        <label>
          <input
            checked={isCompleted}
            onChange={checkboxChangeHandler}
            type="checkbox"
          />
          <span>Виконане</span>
        </label>
      </p>
      <button
        className="btn waves-effect waves-light"
        type="submit"
        name="action"
        onClick={clickSubmitHandler}
      >
        Додати
        <i className="material-icons right">send</i>
      </button>
    </div>
  );
};
