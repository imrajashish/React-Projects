import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import counterReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  counterReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
