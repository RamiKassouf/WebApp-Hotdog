import '../Styling/Home.css';
import React from 'react';
import HotDogLogo from "../Images/HotDogLogo.gif";
import { useState } from 'react';
import Login from '../Components/Login';
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
        <div className='footer-left'>
          <h1>Our Links</h1>
          <ul>
            <li><a href='/About us'>About Us</a></li> 
            <li><a href='#'>Complaints</a></li>       
            <li><a href='/News'>News & Events</a></li>
          </ul>
        </div>
        <div className='footer-mid'>
          <h1>Get In Touch</h1>
          <ul>
            <li><a href='#'>Berytech, Mar Roukoz</a></li>
            <li><a href='https://www.instagram.com/'>instagram</a></li>
            <li><a href='#'>(+961) 111 222</a></li>
            <li><a href='#'>Contact@hotdog.com</a></li>
          </ul>
        </div>
        <div className='footer-right'>
          <h1>Subscription</h1>
          <p>Subscribe to our 
            mailing list to get 
            news and information 
            about Berdawni Water 
            delivered right to your inbox.</p>
            <input className='Input_news' type='text' placeholder='Enter Email' />
            <button>Send</button>
        </div>
        
      </footer>
    </div>
  );
}