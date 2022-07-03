import * as ActionTypes from "../ActionTypes"


export const incrementCounter = () => (dispatch) => {
    dispatch({type: ActionTypes.INCREMENT_VALUE})
}
export const decrementCounter = () => (dispatch) => {
    dispatch({type: ActionTypes.DECREMENT_VALUE})
}