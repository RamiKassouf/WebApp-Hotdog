//Components
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Reviews from "../Components/Reviews"
//CSS
import "../Styling/Signup.css"
import "../Styling/Home.css"
//Context
import { ThemeContext } from '../Context/ThemeContext';
import { useState, useContext, useEffect } from 'react';
export default function Breeds() {
    const {theme} = useContext(ThemeContext);
    const [search, setSearch] = useState('');

    const elements=document.getElementsByClassName("breed");

    console.log("elements",elements);
        const handleSearch = (e) => {
            setSearch(e.target.value);
            for(let index = 0; index < elements.length; index++) {
                const element = elements[index];
                if (element.firstChild.textContent.toLowerCase().includes(search.toLowerCase())) {
                    element.parentElement.parentElement.style.display = "block";
                } else {
                    element.parentElement.parentElement.style.display = "none";
                }
                
            }

        }


        return (
            <div>
                <Header
                theme={theme}
                />

                <div>
                    <h1>Breeds (searchicon)</h1>
                    <input type="text" placeholder="Search" onChange={handleSearch}/>
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
                </div>
                    <Footer
                    theme={theme}
                    />
            </div>
        )
}