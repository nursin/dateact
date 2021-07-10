import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { CharNames } from "./charNames";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      charNames: CharNames
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
}