import * as ActionTypes from '../ActionTypes'

const initialState = {
    isLoading:false,
    user:null,
    error:''
}

export const SignupReducer = (state = initialState, action ) => {
    switch(action.type){
        case ActionTypes.SIGNNED_USER:
            return{
                ...state,
                isLoading:false,
                user:action.payload,
                error:''
            }
        default:
            return state
    }
}