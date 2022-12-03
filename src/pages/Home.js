import '../Styling/Home.css';
import React from 'react';
import { useState, useContext } from 'react';
import Header from"../Components/Header.js";
import DogCarousel from "../Components/DogCarousel"
import ReviewSlider from '../Components/ReviewSlider';
import Footer from '../Components/Footer';
import { ThemeContext } from '../Context/ThemeContext';

export default function App(props) {
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

  const {theme} = useContext(ThemeContext);
  return (
    <div className="App" id={theme}>
      <Header 
      theme={theme}
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
      showSignup={showSignup}
      handleSignupClose={handleSignupClose}
      handleSignupShow={handleSignupShow}
      />
      <ReviewSlider 
      theme={theme}
      />
      <Footer 
      theme={theme}
      />
    </div>
  );
}