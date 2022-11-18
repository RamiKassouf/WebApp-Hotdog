import '../Styling/Home.css';
import React from 'react';
import { useState } from 'react';
import Header from"../Components/Header.js";
import DogCarousel from "../Components/DogCarousel"
export default function App() {
  const [theme, setTheme] = useState('light');
  const [invtheme, setInvTheme] = useState('dark');
  const toggleTheme = () => {
    setTheme((curr)=> (curr === 'light' ? 'dark' : 'light'));
    setInvTheme((curr)=> (curr === 'light' ? 'dark' : 'light'));
  }
  //modals
  const [showSignup, setShowSignup] = useState(false);
  const handleSignupClose = () => {setShowSignup(false); }
  const handleSignupShow = () => setShowSignup(true);
    //Login Modal
  const [showLogin, setShowLogin] = useState(false);
  const handleLoginClose = () => setShowLogin(false);
  const handleLoginShow = () => setShowLogin(true);
  const handleSwitchToSignup = () => {
    handleLoginClose();
    handleSignupShow();
  }
  return (
    <div className="App" id={theme}>
      <Header 
      theme={theme}
      invtheme={invtheme}
      toggleTheme={toggleTheme}
      showSignup={showSignup}
      handleSignupClose={handleSignupClose}
      handleSignupShow={handleSignupShow}
      showLogin={showLogin}
      handleLoginClose={handleLoginClose}
      handleLoginShow={handleLoginShow}
      handleSwitchToSignup={handleSwitchToSignup}
      />
      <DogCarousel
      theme={theme}
      invtheme={invtheme}
      showSignup={showSignup}
      handleSignupClose={handleSignupClose}
      handleSignupShow={handleSignupShow}
      />
      <footer className='footer'>
        <p>Created by <a href="HotDogTM">HotDogTM</a></p>
      </footer>
    </div>
  );
}