import {
  disableLoader,
  enableError,
  enableLoader,
  fetchTodoAction,
} from "../redux/rootReducer";
import { Dispatch } from "redux";

export function fetchTodos(): any {
  return async function (dispatch: Dispatch) {
    try {
      dispatch(enableLoader());
      await fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((json) => dispatch(fetchTodoAction(json)));
      dispatch(disableLoader());
    } catch (error) {
      dispatch(enableError("Помилка завантаження"));
    }
  };
}
