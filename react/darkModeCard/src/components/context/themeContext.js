import { useContext } from "react";
import { createContext } from "react";

const theme = {
    themeMode : "light" ,
    lightTheme : ()=> {},
    darkTheme : ()=> {},
}
const ThemeContext = createContext(theme);
export const ThemeContextProvider = ThemeContext.Provider ;

export const  useTheme = ()=>{
    return useContext(ThemeContext); 
}
