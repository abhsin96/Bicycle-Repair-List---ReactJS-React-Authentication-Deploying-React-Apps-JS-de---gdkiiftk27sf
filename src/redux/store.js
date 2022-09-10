import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { bicycleReducer } from "./reducer";

const rootReducer = combineReducers({
  bicycle: bicycleReducer,
});

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
);

export const store = createStore(rootReducer, enhancer);
