import Carousel from 'react-bootstrap/Carousel';
import Button from "react-bootstrap/Button";
import img1 from '../Images/dog2.jpg';
import img2 from '../Images/dog3.jpg';

export default function DogCarousel(props) {
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
          src={img1}
          alt="Second slide"
        />}
        {props.theme==="dark"&&<img
          className="d-block w-100 carousel-img"
          src={img2}
          alt="Second slide"
        />}
      </Carousel.Item>
      <Carousel.Item>
        {props.theme==="light"&&<img
          className="d-block w-100 carousel-img"
          src={img1}
          alt="Third slide"
        />}
        {props.theme==="dark"&&<img
          className="d-block w-100 carousel-img"
          src={img2}
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
            onClick={props.handleSignupShow} 
            >
              Join Us
          </Button>
           
        </Carousel.Caption>
    </div>
  );
}

