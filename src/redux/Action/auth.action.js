import * as ActionTypes from '../ActionTypes'

export const signupaction = (data) => (dispatch) => {
    dispatch({type:ActionTypes.SIGNUP_USER, payload:data})
}

export const loginAction = (data) => (dispatch) => {
    dispatch({type:ActionTypes.SIGNIN_USER, payload:data})
}

export const googleloginAction = () => (dispatch) => {
    dispatch({type:ActionTypes.GOOGLE_LOGIN})
}

export const signneduser = (data) => (dispatch) => {
    dispatch({type:ActionTypes.SIGNNED_USER, payload:data})
}

export const logoutaction = () => (dispatch) => {
    dispatch({type: ActionTypes.LOGOUT_USER})
}

export const loggedoutaction = () => (dispatch) => {
    dispatch({type: ActionTypes.LOGGEDOUT_USER})
}

export const emailverification = (data) => (dispatch) => {
    dispatch({type:ActionTypes.EMAIL_VERIFIYE, payload:data})
}   

export const forgotpassword = (data) => (dispatch) => {
    dispatch({type:ActionTypes.FORGOT_PASSWORD, payload:data})
}