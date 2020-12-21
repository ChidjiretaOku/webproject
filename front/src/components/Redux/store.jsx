import {createStore} from "redux";
import {AuthBtnReducer} from "../reducers";

export const store = createStore(AuthBtnReducer,false)