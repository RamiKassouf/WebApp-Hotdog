import React,{ useState, useEffect} from "react";

const ThemeContext = React.createContext()

function ThemeContextProvider(props) {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    
    function toggleTheme() {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
    }

        useEffect(() => {
            localStorage.setItem('theme', theme)
            if (theme ==='light'){
                document.body.style.backgroundColor = 'white';
                document.body.style.color = 'black';
            }else{
                document.body.style.backgroundColor = '#292929';
                document.body.style.color = 'white';
            }
        }, [theme])
    
    
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeContextProvider, ThemeContext}

