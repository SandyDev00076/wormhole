import { createStore } from "redux";
import { reducer } from "./reducers/allReducers";

export const store = createStore(reducer);