import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import allReducers from "./reducers/allReducers";

const rootReducer = combineReducers(allReducers);

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
