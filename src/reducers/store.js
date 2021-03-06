import { applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import reduxThunk from "redux-thunk";
import reducerList from "./reducers";

export const reducers = combineReducers({
  ...reducerList
});

const middlewares = [reduxThunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const middleware = applyMiddleware(...middlewares);
