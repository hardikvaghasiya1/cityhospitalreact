import { combineReducers } from "redux";
import { alertReducer } from "./Alert.Reducer";
import { SignupReducer } from "./Auth.Reducer";
import { CounterReducer } from "./Counter.reducer";

export const rootReducer = combineReducers({
    counter:CounterReducer,
    signup:SignupReducer,
    alert: alertReducer
})