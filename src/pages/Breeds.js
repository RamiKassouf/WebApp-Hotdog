import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Reviews from "../Components/Reviews"
import { Autocomplete, TextField } from '@mui/material';
import Form from 'react-bootstrap/Form';
//CSS
import "../Styling/Signup.css"
import "../Styling/Home.css"

import { MDBInputGroup, MDBInput, MDBIcon, MDBAlert, MDBBtn } from 'mdb-react-ui-kit';
//Context
import { ThemeContext } from '../Context/ThemeContext';
import { useState, useContext, useEffect, useRef } from 'react';

export default function Breeds() {
    const {theme} = useContext(ThemeContext);
    const [search, setSearch] = useState('');
    const [searchInput, setSearchInput]= useState('');
    const suggestions =["dog","golden retriever", "husky", "pug", "husky2"]
    const [isFocus, setIsFocus] = useState(false);
    const inputRef = useRef();
    const [isHovered, setIsHovered] = useState(false);

    const elements=document.getElementsByClassName("breed");



 
    const handleSearch = (e) => {
        setSearch(e.target.value);
        for(let index = 0; index < elements.length; index++) {
            const element = elements[index];
            if ((element.firstChild.textContent.toLowerCase()).includes(search.toLowerCase())) {
                element.parentElement.parentElement.style.display = "block";
            } else {
                element.parentElement.parentElement.style.display = "none";
            }
            
        }
    }

    const [breeds, setBreeds] = useState([]);

    
    async function fetchBreeds(event){
        setSearchInput(event.target.value);
        console.log("input", searchInput)
        if(searchInput !== ""){
            const res = await fetch(`http://localhost:8080/search?term=${searchInput}`);
            const result = await res.json()
        

            if(searchInput ===''){
                setBreeds([]);
            } else {
                console.log("result", result)
                setBreeds(result.map(e => e.name));
                console.log("breeds",breeds);
            }
        }
    

            // minLength: 2,
            // select: async (event, ui) => {
            //     const res = await fetch('http://localhost:8080/get/' + ui.item.id);
            //     const data = await res.json();
            //     document.getElementById("breeds").empty();
            //     data.breeds.forEach(breed => {
            //         document.getElementById("breeds").append(`<li>${breed.name}</li>`);
            //     });
            //     }
        //     })
        // }, [])
    }
        

        return (
            <div>
                <Header
                theme={theme}
                />
                <Form.Control 
                    type="text" 
                    placeholder="Search" 
                    onFocus={() => setIsFocus(true)} 
                    onChange={(e)  => {
                        fetchBreeds(e);
                        handleSearch(e);
                        }
                    }
                    value = {searchInput}
                    ref={inputRef}
                />
                {/* {isFocus &&(
                    <ul id="breeds">
                        {breeds.map((breed) => <li>${breed}</li>)}
                    </ul>
                         
                    )} */}
                {breeds.length != 0 && (
                    <ul id="dataResult">
                        {breeds.map((breed) => <li>{breed}</li>)}
                    </ul>
                )}
                
                
                {/* <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options= {breeds}
                    getOptionLabel = {(option) => option.name}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Search for a breed" />}
                    autoComplete
                    autoHighlight
                    autoSelect
                    clearOnEscape
                    onChange = {(e) => setSearchInput(e.target.value)}
                    /> */}
                
                <div >
                    <Reviews
                    className="breed"
                    theme={theme}
                    reviewer="Pomeranian"
                    reviewText="This is a review"
                    />
                    <Reviews
                    className="breed"
                    theme={theme}
                    reviewer="Pomeranian"
                    reviewText="This is a review"
                    />
                    <Reviews
                    className="breed"
                    theme={theme}
                    reviewer="pug"
                    reviewText="This is a review"
                    />
                </div>
                <Footer
                theme={theme}
                />
            </div>
        )
}