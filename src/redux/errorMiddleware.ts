import { TYPES } from "./types";
import { enableError } from "./rootReducer";

// @ts-ignore
export function errorMiddleware({ dispatch }): any {
  return function (next: any) {
    return function (action: any) {
      if (action.type === TYPES.ADD_TODO) {
        if (!action.payload.title.trim()) {
          return dispatch(enableError("Поле не може бути пустим"));
        }
      }
      return next(action);
    };
  };
}
