import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import {AuthBtnReducer} from "./buttonToggler";
import {loginReducer, registerReducer} from "./Auth";

export default combineReducers({
    routing: routerReducer,
    AuthBtnReducer,
    loginReducer,
    registerReducer
})