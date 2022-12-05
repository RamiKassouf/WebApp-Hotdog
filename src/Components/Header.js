//My components
import HotDogLogo from "../Images/HotDogLogo.gif";
import Login from "./Login";
import UserSignUp from "./UserInfo";
import ProfilePic from "./ProfilePic";
//Navbar imports
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
//Context imports
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { SigninContext} from "../Context/SigninContext";
import { SignupContext } from "../Context/SignupContext";
import {LoggedinContext} from "../Context/LoggedinContext";

function Header(props) {
    const {handleClose,handleShow} = useContext(SigninContext);
    const {handleSignupShow} = useContext(SignupContext);
    const {loggedin, setLoggedin} = useContext(LoggedinContext);

    const handleSwitchToSignup = () => {
    handleClose();
    handleSignupShow();
  }
  // Language Picker without babel and translation
 var language = 'English';
 const changelanguage = (e) => {
    document.getElementById('collasible-nav-dropdown2').innerHTML = e.target.innerHTML;
  }

  const {toggleTheme} = useContext(ThemeContext);

  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg={props.theme} variant={props.theme}>
      <Container>
        <Navbar.Brand href="/">
            Hot{''}<img
              alt="Hot Dog Logo"
              src={HotDogLogo}
              width="30"
              height="30"
              className="d-inline-block align-top logo"
            />{''}
            Dog
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Breeds">Breeds</Nav.Link>
            <Nav.Link href="/Download">Download</Nav.Link>
            <Nav.Link href="/Swiper">Swiper</Nav.Link>
            <NavDropdown title="Subscription" id="collasible-nav-dropdown" className="allign-middle" menuVariant={props.theme}>
              <NavDropdown.Item href='/Subscription/#'>Free</NavDropdown.Item>
              <NavDropdown.Item href='/Subscription/#' >Premium</NavDropdown.Item>
              <NavDropdown.Item href='/Subscription/#' >Platinum</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="nav-right">
            <Nav.Link as="li" className="mt-7px">
                <Form.Switch label="Dark Mode" onChange={toggleTheme} />
            </Nav.Link>
            <Nav.Link as="li">
                <NavDropdown title={language} id="collasible-nav-dropdown2" menuVariant={props.theme} onClick={changelanguage}>
                <NavDropdown.Item >English</NavDropdown.Item>
                <NavDropdown.Item >French</NavDropdown.Item>
                <NavDropdown.Item >Arabic</NavDropdown.Item>
                </NavDropdown>
            </Nav.Link>

              {(loggedin===false)&&<Login 
                theme={props.theme}
                invtheme={props.invtheme}
                handleSwitchToSignup={handleSwitchToSignup}
                />}
              {(loggedin===false)&&<UserSignUp 
                theme={props.theme}
                invtheme={props.invtheme}
                />}
              {(loggedin===true)&&<Nav.Item><ProfilePic theme={props.theme} /></Nav.Item>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;