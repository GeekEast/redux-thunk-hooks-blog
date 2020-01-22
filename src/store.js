import { createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./redux";
import { applyMiddleware, compose } from "redux";
const composeEnhancers =
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: process.env.NODE_ENV === "development", traceLimit: 25 })) ||
  compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
export { store };