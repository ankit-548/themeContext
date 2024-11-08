import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode:'',
    darkTheme: ()=>{},
    lightTheme: ()=>{}
})

export const ThemeContextProvider = ThemeContext.Provider;

// custom hook: they are generally function use keyword is used with them
export default function useTheme() {
    return useContext(ThemeContext);
}

