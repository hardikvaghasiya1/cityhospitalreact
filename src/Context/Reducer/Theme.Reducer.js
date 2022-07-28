import * as ActionType from "../ActionType"

export const themeReducer = (action, state) => {
    console.log(action, state)
    switch (action.type) {
        case ActionType.TOOGLE_THEME:
            return{
                ...state,
                theme:action.payload
            }
    
        default:
            return state;
    }
}