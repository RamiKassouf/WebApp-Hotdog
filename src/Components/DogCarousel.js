import Carousel from 'react-bootstrap/Carousel';
import Button from "react-bootstrap/Button";
import img1 from '../Images/TwoDogs-Carousel.jfif';
import img2 from '../Images/TwoDogs-Flower-Wallpaper.jfif';
import img3 from '../Images/DifferentDogs-wallpaper.jfif';

export default function DogCarousel(props) {
  return (
    <div className="dogcarousel">
    <Carousel variant={props.invtheme}>
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
          src={img3}
          alt="Third slide"
        />}
        {props.theme==="dark"&&<img
          className="d-block w-100 carousel-img"
          src={img2}
          alt="Third slide"
          />}
          
      </Carousel.Item>
    </Carousel>
        <Carousel.Caption>
          <Button id="createaccountButton"
              type="submit" 
              className={props.theme} 
              variant="primary" 
              onClick={props.handleSignupShow} 
              >
              Create Account
            </Button>
            <p className={`carousel-text ${props.theme}`}>
              Join us and start your journey to find the perfect match for your dog!
            </p>
        </Carousel.Caption>
    </div>
  );
}

