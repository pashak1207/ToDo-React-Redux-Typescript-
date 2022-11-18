import { Reducer } from "redux";
import { TYPES } from "./types";
import { IState, ITodo } from "../interfaces";

const defaultState: IState = {
  todos: [],
};

//JSON.parse(localStorage.getItem("todos") || "{todos: []}") ||

export const todoReducer: Reducer = (state = defaultState, action) => {
  switch (action.type) {
    case TYPES.SET_TODOS:
      return { ...state, todos: [...action.payload] };
    case TYPES.ADD_TODO:
      return { ...state, todos: [action.payload, ...state.todos] };
    case TYPES.COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map((item: ITodo) => {
          if (item.title === action.payload.title) {
            return {
              title: action.payload.title,
              completed: !action.payload.completed,
              date: item.date,
            };
          } else {
            return item;
          }
        }),
      };
    case TYPES.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((item: ITodo) => {
          return item.title !== action.payload.title;
        }),
      };
    case TYPES.FETCH_TODO:
      return { ...state, todos: [...state.todos, ...action.payload] };
    default:
      return state;
  }
};
