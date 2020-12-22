import {LOGIN,REGISTER,LOGOUT} from "../Redux/types";

const initialState = false;

export function loginReducer(state = initialState, action) {
    if (action.type === LOGIN){
        return true;
    } else if (action.type === LOGOUT){
        return false;
    }
    return state;
}
export function registerReducer(state = initialState, action) {
    if (action.type === REGISTER){
        return true;
    }
    return state;
}

export function usernameReducer(state = '', action){
    if (action.type === LOGIN){
        return action.payload
    }
    return state;
}