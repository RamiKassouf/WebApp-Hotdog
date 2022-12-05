import Carousel from 'react-bootstrap/Carousel';
import Button from "react-bootstrap/Button";
import img1 from '../Images/dog2.jpg';
import img2 from '../Images/dog10.jpg';
import img3 from '../Images/dog12.jpg';
import img4 from '../Images/dog7.jpg';
import img5 from '../Images/dog13.jpg';
import img6 from '../Images/dog6.jpg';

import { useContext } from "react";
import { SignupContext } from '../Context/SignupContext';
export default function DogCarousel(props) {
    const {handleSignupShow} = useContext(SignupContext);
  return (
    <div className="dogcarousel">
    <Carousel variant={props.invtheme} interval="10000">
      <Carousel.Item>
        {props.theme==="light"&&<img
          className="d-block w-100 carousel-img"
          src={img1}
          alt="First slide"
        />}
        {props.theme==="dark"&&<img
          className="d-block w-100 carousel-img"
          src={img2}
          alt="First slide"
        />}
      </Carousel.Item>
      <Carousel.Item>
        {props.theme==="light"&&<img
          className="d-block w-100 carousel-img"
          src={img3}
          alt="Second slide"
        />}
        {props.theme==="dark"&&<img
          className="d-block w-100 carousel-img"
          src={img5}
          alt="Second slide"
        />}
      </Carousel.Item>
      <Carousel.Item>
        {props.theme==="light"&&<img
          className="d-block w-100 carousel-img"
          src={img4}
          alt="Third slide"
        />}
        {props.theme==="dark"&&<img
          className="d-block w-100 carousel-img"
          src={img6}
          alt="Third slide"
          />}
          
      </Carousel.Item>
    </Carousel>
        <Carousel.Caption className={props.theme}>
          <h1 className="carousel-text">Welcome!</h1>
          <p className={`carousel-subtext ${props.theme}`}>
             Find the perfect match for<br /> your furry friend!
          </p>
          <Button id={`createaccountButton`}
            type="submit" 
            className={props.theme} 
            variant="primary" 
            onClick={handleSignupShow} 
            >
              Join Us
          </Button>
           
        </Carousel.Caption>
    </div>
  );
}

