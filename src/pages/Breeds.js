import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Reviews from "../Components/Reviews"
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//CSS
import '../Styling/Header-Footer.css';
import "../Styling/Breeds.css"
//Context
import { ThemeContext } from '../Context/ThemeContext';
import { useState, useContext, useEffect, useRef } from 'react';

export default function Breeds() {
    const {theme} = useContext(ThemeContext);
    const [search, setSearch] = useState('');
    const [searchInput, setSearchInput]= useState('');
    const [searchword, setSearchword] = useState('');
    const [breeds, setBreeds] = useState([]);
    const inputRef = useRef();


    const elements=document.getElementsByClassName("breed");

        const handleSearch = (e) => {
            for(let index = 0; index < elements.length; index++) {
                const element = elements[index];
                if ((element.firstChild.textContent.toLowerCase()).includes(search.toLowerCase())) {
                    element.parentElement.parentElement.style.display = "block";
                } else {
                    element.parentElement.parentElement.style.display = "none";
                }
                
            }
        }

    
    useEffect(() => {
        async function fetchBreeds(){

            
            console.log("input", searchInput)
            if(searchInput !== ""){
                const res = await fetch(`http://localhost:8080/search?term=${searchInput}`,
                {
                    method: 'POST',
                }
                );
                const result = await res.json()
            
            
                if(res.ok){
                    console.log("result", result)
                    setBreeds(result.map(e => e.name));
                    console.log("breeds",breeds);
                }else{
                    alert(result.error);
                }
            }else{
                setBreeds([]);
            }

        }
        fetchBreeds();
    }, [searchInput])
        

        return (
            <div>
                <Header
                theme={theme}
                />
                <div className="breeds">
                    <div className="breeds-search">
                        <div className="breeds-searchbar">
                            <h1 className="breeds-title">Breeds</h1>
                            <div className="searchbar">
                                <Form.Control 
                                    type="text" 
                                    placeholder="Search" 
                                    onChange={(e)  => {
                                        setSearchInput((e.target.value).trimStart() );
                                        setSearch(e.target.value.trim());
                                    }}
                                    onKeyDown={handleSearch}
                                    value = {searchInput}
                                    ref={inputRef}
                                />
                                {breeds.length > 0 &&
                                <Row className={`searchResults ${theme}`}>
                                    <ul  id="searchResults">
                                        {breeds.map((breed,index) =>
                                            <Col>
                                                <li key={index} 
                                                className='searchResult' 
                                                onClick= {
                                                () => {
                                                    setSearchInput(breed);
                                                    setSearch(breed);
                                                    inputRef.current.focus();
                                                    document.getElementById("searchResults").style.display = "none";
                                                }}>{breed}</li>
                                            </Col> 
                                        )}
                                    </ul>
                                </Row>
                                }
                            </div>
                        </div>
                             
                    </div>
                </div>    
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
