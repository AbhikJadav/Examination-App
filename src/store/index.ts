import {
  AnyAction,
  Middleware,
  applyMiddleware,
  compose,
  createStore,
} from "redux";
import { createLogger } from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import asyncActionCreator from "./middlewares/asyncActionCreator";
import rootReducer from "./reducers";

const logger = createLogger({
  collapsed: true,
});

const persistConfig = {
  key: "react",
  storage,
  blacklist: [],
};

const emptyMiddleWare: Middleware = function fn1() {
  return function fun2(next: (action: AnyAction) => AnyAction) {
    return function fun3(action: AnyAction) {
      return next(action);
    };
  };
};

let loggerMiddleWare = emptyMiddleWare;

if (global.window) {
  loggerMiddleWare = logger;
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  persistedReducer,
  compose(applyMiddleware(asyncActionCreator, thunk, loggerMiddleWare))
);
const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppHandler = {
  request: (state: RootState) => RootState;
  success: (state: RootState) => RootState;
  failure: (state: RootState) => RootState;
};

export { store, persistor };
export default store;
