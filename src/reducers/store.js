import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import reduxThunk from "redux-thunk";
import reducerList from "./reducers";

const reducers = combineReducers({
  ...reducerList
});

const middlewares = [reduxThunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const middleware = applyMiddleware(...middlewares);

const store = createStore(reducers, {}, middleware);

export default store;
