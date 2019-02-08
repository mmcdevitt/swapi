import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducers, middleware } from "./reducers/store";

const RootProvider = ({ children, initialState = {} }) => {
  const store = createStore(reducers, initialState, middleware);

  return <Provider store={store}>{children}</Provider>;
};

export default RootProvider;
