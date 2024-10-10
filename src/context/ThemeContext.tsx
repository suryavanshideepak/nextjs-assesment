import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface ThemeContextType{
    theme: string;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () =>{
    const context = useContext(ThemeContext)
    if(!context){
        throw new Error("useTheme must be used within a ThemeProvider")
    }
    return context
}

export const ThemeProvider = ({children}:{children:ReactNode}) => {
    const [theme, setTheme] = useState<string>('light')

    const toggleTheme = () => {
        const newTheme = theme === 'light'? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme',newTheme)
    }

    useEffect(()=>{
        const storedTheme = localStorage.getItem('theme')
        if(storedTheme){
            setTheme(storedTheme)
        }
    },[])
    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <div>{children}</div>
        </ThemeContext.Provider>
    )
}