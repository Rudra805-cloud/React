import { createContext,useContext } from "react";

export const Themecontext=createContext({
    thememode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{},
})

export const ThemeProvider=Themecontext.Provider

export default function useTheme(){
    return useContext(Themecontext)
}


