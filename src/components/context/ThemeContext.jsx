"use client";
import { createContext, useEffect, useState } from "react";
export const ThemeContext = createContext();

const getFromLocalStorage = () => {
    if (typeof window !== "undefined") {

        const val = window?.localStorage?.getItem("theme");
        return val || "light";
    }
    return "light";
};
export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => getFromLocalStorage()||"light");

    const toggle=()=>{
        setTheme(theme==="light" ? "dark" : "light");
    }
    useEffect(()=>{
        window?.localStorage?.setItem("theme",theme);

    },[theme])
    return <ThemeContext.Provider value={{theme,toggle}}>{children}</ThemeContext.Provider>
};