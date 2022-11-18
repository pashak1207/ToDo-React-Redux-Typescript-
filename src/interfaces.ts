export interface IState {
  loader?: boolean;
  error?: string;
  todos?: ITodo[];
}

export interface ITodo {
  title: string;
  completed: boolean;
  date?: string;
}

export interface ITodoFromServer {
  title: string;
  completed: boolean;
}

export interface IAddTodoAction {
  type: string;
  payload: ITodo;
}
export interface ISetTodoAction {
  type: string;
  payload: ITodo[];
}
export interface IFetchTodoAction {
  type: string;
  payload: ITodoFromServer[];
}

export interface ILoader {
  type: string;
}

export interface IError {
  type: string;
  payload?: string;
}
