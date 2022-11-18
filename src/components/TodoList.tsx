import React from "react";
import { ITodo } from "../interfaces";
import { useSelector } from "react-redux";
import { TodoItem } from "./TodoItem";

export const TodoList: React.FC = () => {
  const todos: ITodo[] = useSelector((state: any) => state.todo.todos);

  return (
    <>
      {todos.length > 0 ? (
        <ul>
          {todos.map((item: ITodo, index: number) => (
            <TodoItem
              title={item.title}
              date={item.date}
              key={index}
              completed={item.completed}
            />
          ))}
        </ul>
      ) : (
        <p className={"center"}>Завдань немає</p>
      )}
    </>
  );
};
