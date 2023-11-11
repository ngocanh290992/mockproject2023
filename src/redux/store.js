import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./reducers/reducer";
import thunk from "redux-thunk";

const middleware = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f
);

export const store = createStore(rootReducer, middleware);
