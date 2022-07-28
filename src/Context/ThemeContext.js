import React, { createContext, useReducer } from "react";
import * as ActionType from './ActionType'
import { themeReducer } from "./Reducer/Theme.Reducer";

const ThemeContext = createContext();

const initialstate = {
    theme : "light",
}


export const ProviderTheme = ({ children }) => {
    const [state, dispatch] = useReducer(themeReducer, initialstate);

    const toogle_theme = (theme) => {
        const newTheme = theme === "light" ? "dark" : "light";
        dispatch(({ type: ActionType.TOOGLE_THEME, payload: newTheme}))
    }

    return (
        <ThemeContext.Provider value={{   
                ...state,
                toogle_theme
            }}
        >
            {children}
        </ThemeContext.Provider>
    );


}

export default ThemeContext;
 
