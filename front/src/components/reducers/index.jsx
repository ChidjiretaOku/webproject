import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import {loginReducer, registerReducer, usernameReducer} from "./Auth";

export default combineReducers({
    routing: routerReducer,
    loginReducer,
    registerReducer,
    usernameReducer
})