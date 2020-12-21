import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import {AuthBtnReducer} from "./buttonToggler";

export default combineReducers({
    routing: routerReducer,
    AuthBtnReducer
})