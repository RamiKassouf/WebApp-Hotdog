import '../Home.css';
import React from 'react';
import { useState } from 'react';
import Header from"../Components/Header.js";
export default function App() {
  const [theme, setTheme] = useState('light');
  const [invtheme, setInvTheme] = useState('dark');
  const toggleTheme = () => {
    setTheme((curr)=> (curr === 'light' ? 'dark' : 'light'));
    setInvTheme((curr)=> (curr === 'light' ? 'dark' : 'light'));
  }
  return (
    <div className="App" id={theme}>
      <Header 
      theme={theme}
      invtheme={invtheme}
      toggleTheme={toggleTheme}/>
    </div>
  );
}