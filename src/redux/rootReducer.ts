import { combineReducers, Dispatch, Reducer } from "redux";
import { TYPES } from "./types";
import {
  IAddTodoAction,
  IError,
  IFetchTodoAction,
  ILoader,
  ISetTodoAction,
  ITodo,
  ITodoFromServer,
} from "../interfaces";
import { todoReducer } from "./todoReducer";
import { appReducer } from "./appReducer";

export const rootReducer: Reducer = combineReducers<Reducer>({
  todo: todoReducer,
  app: appReducer,
});

export function setTodosAction(payload: ITodo[]): ISetTodoAction {
  return {
    type: TYPES.SET_TODOS,
    payload,
  };
}

export function addTodoAction(payload: ITodo): IAddTodoAction {
  return {
    type: TYPES.ADD_TODO,
    payload,
  };
}

export function checkTodoAction(payload: ITodo): IAddTodoAction {
  return {
    type: TYPES.COMPLETE_TODO,
    payload,
  };
}

export function removeTodoAction(payload: ITodo): IAddTodoAction {
  return {
    type: TYPES.REMOVE_TODO,
    payload,
  };
}

export function fetchTodoAction(payload: ITodoFromServer[]): IFetchTodoAction {
  return {
    type: TYPES.FETCH_TODO,
    payload,
  };
}

export function enableLoader(): ILoader {
  return {
    type: TYPES.LOADER_ON,
  };
}

export function disableLoader(): ILoader {
  return {
    type: TYPES.LOADER_OFF,
  };
}

export function enableError(payload: string): any {
  return function (dispatch: Dispatch) {
    dispatch({ type: TYPES.ERROR_ON, payload });

    setTimeout(() => {
      dispatch(disableError());
    }, 3000);
  };
}

export function disableError(): IError {
  return {
    type: TYPES.ERROR_OFF,
  };
}
