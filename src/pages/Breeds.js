<<<<<<< HEAD
//Components
import Header from "../Components/Header"
import Footer from "../Components/Footer"
//CSS
import "../Styling/Signup.css"
import "../Styling/Home.css"
//Context
import { ThemeContext } from '../Context/ThemeContext';
import { useContext } from 'react';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import search from "../Components/Search/search"

export default  function Breeds() {
    const navigate =
     useNavigate();
    const [name, setName] = useState('');
    const [breeds, setBreeds] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    async function addName() {}
    
    const {theme} = useContext(ThemeContext);
    return (
        <div>
            <Header
            theme={theme}
            />
            <h1>Breeds</h1>
            <Footer
            theme={theme}
            />
        </div>
    )
}



