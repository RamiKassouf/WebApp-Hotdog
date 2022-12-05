import Header from "../Components/Header"
import Footer from "../Components/Footer"
import DogBreed from "../Components/DogBreed"
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
    const inputRef = useRef(null);
    useOutsideAlerter(inputRef);

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

    const displayNone = () => {
        (document.getElementById("searchResults")).style.display = "none";
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
                    // console.log("result", result)
                    setBreeds(result.map(e => e.name));
                    // console.log("breeds",breeds);
                }else{
                    alert(result.error);
                }
            }else{
                setBreeds([]);
                setSearch('')
                handleSearch();
            }

        }
        fetchBreeds();
    }, [searchInput, search])
        

        return (
            <div>
                <Header
                theme={theme}
                />
                <div className="breeds">
                        <div className="breeds-searchbar">
                            <h1 className="breeds-title">Breeds</h1>
                            <div className="searchbar">
                                <Form.Control
                                    className={`searchbar-input ${theme}`}
                                    type="text" 
                                    placeholder="Search" 
                                    onChange={(e)  =>{ 
                                        setSearchInput((e.target.value).trimStart() );
                                    }}
                                    onMouseDown={() => {document.getElementById("searchResults").style.display = "block";
                                        document.getElementById("searchResults").style.border="1px solid #ced4da";
                                }}
                                    onKeyDown={handleSearch}
                                    value = {searchInput}
                                    ref={inputRef}
                                />
                                {breeds.length > 0 &&
                                <Row className={`searchResults ${theme}`}>
                                    <ul  id="searchResults">
                                        {breeds.map((breed,index) =>
                                            <Col key={index}>
                                                <li  
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
                <div className="dogList">
                    <Row>
                            <DogBreed
                            className="breed"
                            theme={theme}
                            reviewer="Golden Retriever"
                            reviewText="Golden retriever males are 23 to 24 inches tall and weigh about 65 to 75 pounds (29 to 32 kilograms). Females are about 21 to 22 inches tall and weigh about 55 to 65 pounds (25 to 29 kilograms).

The golden retriever has a water-repellent coat that is wavy or flat and gold to cream in color. One of the most attractive features of this breed is the feathering on the neck, legs, thighs, underside and tail.

The dog's head is strong and broad. The ears are not very large, but they sit high on the head and hang just below the jaw line. The chest is deep, and the body is well balanced. Golden retrievers live about 10 to 13 years."
                            />
                            <DogBreed
                            className="breed"
                            theme={theme}
                            reviewer="Pug"
                            reviewText="Pugs are members of the toy group despite their solid appearance.

They range in height from 10 to 11 inches and in weight from 14 to 18 pounds (six to eight kilograms). They are square dogs with substantial limbs. Pugs are the sturdiest dogs of the toy group, befitting their mastiff heritage.

Pugs are known for their large, round heads, with the shortened muzzles and extensive forehead wrinkles. The vertical wrinkle on the forehead is said to resemble the Chinese character for 'prince' and thus known as the 'prince mark.' The eyes protrude somewhat, making them prone to trauma. The tail curls tightly over the hip.

They have a short, but very dense double coat. Colors can range from apricot to fawn, silver and black. All but the black dogs have a dark mask and ears with a trace of darkening down the back. The ears feel like black velvet."
                            />
                    </Row>
                    <Row>
                            <DogBreed
                            className="breed"
                            theme={theme}
                            reviewer="Siberian Husky"
                            reviewText="The Siberian husky is a medium-sized dog, slightly longer than tall. Height ranges from 20 to 23 1/2 inches and weight from 35 to 60 pounds.
                            
                            The Siberian husky has erect ears and eyes of brown to blue or maybe even one of each color.
                            
                            The neck is carried straight and the topline is level. The well-furred tail is carried up in a sickle or sometimes straight out behind.
                            
                            Siberian huskies have a very dense, plush coat with plenty of undercoat. A small ruff is found around the neck but no long fringes on the legs or tail. Color ranges from black to white and everything in-between. Most dogs do have white markings, particularly on the chest and legs."
                            />
                            <DogBreed
                            className="breed"
                            theme={theme}
                            reviewer="German Shepherd"
                            reviewText="To prevent over-guarding and aggressive behavior, German shepherd dogs should have socialization and obedience training at a young age.

German shepherd dogs reach a maximum of about 25 inches in height, and they weigh up to about 95 pounds (41 kilograms).

He is a well-proportioned dog. The head is broad and tapers handsomely to a sharp muzzle. The ears are rather large and stand erect. The back is level and muscular, and the tail is bushy and curves downward. The coat is thick and rough and may be black, tan, black and tan or gray. The coat should be harsh and of medium length; however, long-coated individuals occur often.

The breed lives about 10-12 years."
                            />
                    </Row>
                </div>
                <Footer
                theme={theme}
                />
            </div>
        )
}

function useOutsideAlerter(ref) {
  useEffect(() => {
 
    // Function for click event
    function handleOutsideClick(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        document.getElementById("searchResults").style.display = "none";
      }
    }
 
    // Adding click event listener
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [ref]);
}