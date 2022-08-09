import * as ActionTypes from '../ActionTypes'

export const signupaction = (data) => (dispatch) => {
    console.log(data)
    dispatch({type:ActionTypes.SIGNUP_USER, payload:data})
}

export const loginAction = (data) => (dispatch) => {
    console.log(data)
    dispatch({type:ActionTypes.SIGNIN_USER, payload:data})
}

export const signneduser = (data) => (dispatch) => {
    dispatch({type:ActionTypes.SIGNNED_USER, payload:data})
}

export const emailverification = (data) => (dispatch) => {
    dispatch({type:ActionTypes.EMAIL_VERIFIYE, payload:data})
}   