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