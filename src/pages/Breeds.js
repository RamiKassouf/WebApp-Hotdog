import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import "../Styling/Signup.css"
import "../Styling/Home.css"
import search from "../Components/Search/search"

export default  function Hello() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [breeds, setBreeds] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    async function addName() {
        const req = await fetch('http://``