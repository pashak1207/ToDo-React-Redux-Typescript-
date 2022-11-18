import { applyMiddleware, createStore, Store } from "redux";
import { rootReducer } from "./rootReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { errorMiddleware } from "./errorMiddleware";

export const store: Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, errorMiddleware))
);
