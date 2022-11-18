import { Reducer } from "redux";
import { TYPES } from "./types";
import { IState } from "../interfaces";

const defaultState: IState = {
  loader: false,
  error: "",
};

export const appReducer: Reducer = (state = defaultState, action) => {
  switch (action.type) {
    case TYPES.LOADER_OFF:
      return { ...state, loader: false };
    case TYPES.LOADER_ON:
      return { ...state, loader: true };
    case TYPES.ERROR_OFF:
      return { ...state, error: "" };
    case TYPES.ERROR_ON:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
