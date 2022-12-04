import '../Styling/Home.css';
import '../Styling/Header-Footer.css';
import React from 'react';
import { useState, useContext } from 'react';
import Header from"../Components/Header.js";
import DogCarousel from "../Components/DogCarousel"
import ReviewSlider from '../Components/ReviewSlider';
import Footer from '../Components/Footer';
import { ThemeContext } from '../Context/ThemeContext';

export default function App(props) {
  //modals
  const {theme} = useContext(ThemeContext);
  return (
    <div className="App" id={theme}>
      <Header 
      theme={theme}
      />
      <DogCarousel
      theme={theme}
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