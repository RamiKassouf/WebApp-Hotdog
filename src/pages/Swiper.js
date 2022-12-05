import React from 'react'
import Header from "../Components/Header"
import Footer from "../Components/Footer"
//CSS
import '../Styling/Header-Footer.css';
//Context
import { ThemeContext } from '../Context/ThemeContext';
import { useContext } from 'react';
import { useState } from 'react';

//Cards
import Cards from '../Components/Cards';
import SwipeButton from '../Components/SwipeButton';






function Swiper() {
    const {theme} = useContext(ThemeContext);
    
       
    
    
  return (
    
  
    <div>
        <Header 
            theme={theme}
            />

        <Cards theme={theme}/>
        <SwipeButton/>


        
    </div>
    
    
    
  
    
  )
}

export default Swiper