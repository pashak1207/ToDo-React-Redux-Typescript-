import React, { useEffect } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./async/fetchTodos";
import { Loader } from "./components/Loader";
import { Route, Routes } from "react-router-dom";
import { Error } from "./components/Error";
import { ITodo } from "./interfaces";
import { setTodosAction } from "./redux/rootReducer";

const App: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const isLoading: boolean = useSelector((state: any) => state.app.loader);
  const error: string = useSelector((state: any) => state.app.error);
  const todos: ITodo[] = useSelector((state: any) => state.todo.todos);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos") || "[]") as ITodo[];
    dispatch(setTodosAction(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function clickFetchHandler() {
    dispatch(fetchTodos());
  }

  return (
    <>
      <Navbar />
      {error.trim() && <Error />}
      <Routes>
        <Route
          path={"/"}
          element={
            <div className="container">
              <TodoForm />
              <div className={"syncWithLoader"}>
                <button
                  onClick={clickFetchHandler}
                  className={"btn waves-effect waves-light"}
                >
                  Синхронізувати
                </button>
                {isLoading && !error.trim() && <Loader />}
              </div>
              <TodoList />
            </div>
          }
        />
        <Route
          path={"/info"}
          element={
            <div className="container">
              <h2 className={"center"}>All right reserved. 2022</h2>
            </div>
          }
        />
      </Routes>
    </>
  );
};

export default App;
