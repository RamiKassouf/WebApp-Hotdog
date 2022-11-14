import Carousel from 'react-bootstrap/Carousel';
import Button from "react-bootstrap/Button";
import img1 from '../Images/dogs.jpg';
export default function DogCarousel(props) {
  return (
    <div className="dogcarousel">
    <Carousel variant={props.invtheme}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
        <Carousel.Caption>
          <Button id="createaccountButton"
              type="submit" 
              className={props.theme} 
              variant="primary" 
              onClick={props.handleSignup} 
              >
              Create Account
            </Button>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
    </div>
  );
}

