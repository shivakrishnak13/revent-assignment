import { applyMiddleware, legacy_createStore } from "redux";
import { reducer } from "./product/reducer";
import thunk from "redux-thunk";




export const store = legacy_createStore(reducer,applyMiddleware(thunk));