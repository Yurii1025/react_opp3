import { useState } from "react";
import { ThemeContext } from "./themeContext";


export function ThemeProvider ({children}) {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme (prev => (prev === "light" ? "dark" : "light"));
    };

    return (
        //value - something that will be available to all components
        <ThemeContext.Provider value = {{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}