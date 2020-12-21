import {AUTH_BTN} from "../Redux/types";

const initialState = false;

export function AuthBtnReducer(state = initialState, action) {
    if (action.type === AUTH_BTN) {
        return !state;
    }
    return state;
}