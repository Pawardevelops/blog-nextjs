"use client";
import { createContext, useState } from "react";
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
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
};