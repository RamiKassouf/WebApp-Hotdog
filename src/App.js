import './App.css';
import React from 'react';
import { useState } from 'react';
import Header from"./Components/Header.js";
export const ThemeContext = React.createContext(null);
export default function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme((curr)=> (curr === 'light' ? 'dark' : 'light'));
  }
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    <div className="App" id={theme}>
      <Header 
      theme={theme}
      toggleTheme={toggleTheme}/>
    </div>
    </ThemeContext.Provider>
  );
}