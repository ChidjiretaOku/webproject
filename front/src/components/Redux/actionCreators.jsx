import {AUTH_BTN, LOGIN, LOGOUT, REGISTER} from './types'

export const authBtn = content => ({
    type: AUTH_BTN,
})

export const register = content => ({
    type: REGISTER,
})

export const logIn = content => ({
    type: LOGIN,
})

export const logOut = content => ({
    type: LOGOUT,
})