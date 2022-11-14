//My components
import HotDogLogo from "../Images/HotDogLogo.gif";
import Login from "./Login";
import Signup from "./Signup";
//Navbar imports
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
//useState for Modal components (Login and Signup)
import { useState } from "react";


function Header(props) {
  // Language Picker without babel and translation
 var language = 'English';
 const changelanguage = (e) => {
    document.getElementById('collasible-nav-dropdown2').innerHTML = e.target.innerHTML;
  }
//   //SignUp Modal
// const [showSignup, setShowSignup] = useState(false);
// const handleSignupClose = () => {setShowSignup(false); }
// const handleSignupShow = () => setShowSignup(true);
//     //Login Modal
//   const [showLogin, setShowLogin] = useState(false);
//   const handleLoginClose = () => setShowLogin(false);
//   const handleLoginShow = () => setShowLogin(true);
//   const handleSwitchToSignup = () => {
//     handleLoginClose();
//     handleSignupShow();
//   }

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
            <Nav.Link href="#Breeds">Breeds</Nav.Link>
            <Nav.Link href="#Download">Download</Nav.Link>
            <NavDropdown title="Subscription" id="collasible-nav-dropdown" className="allign-middle" menuVariant={props.theme}>
              <NavDropdown.Item href="#Free">Free</NavDropdown.Item>
              <NavDropdown.Item href="#Premium">Premium</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link as="li" className="mt-7px">
                <Form.Switch label="Dark Mode" onChange={props.toggleTheme} checked={props.theme==='dark'}/>
            </Nav.Link>
            <Nav.Link as="li">
                <NavDropdown title={language} id="collasible-nav-dropdown2" menuVariant={props.theme} onClick={changelanguage}>
                <NavDropdown.Item >English</NavDropdown.Item>
                <NavDropdown.Item >French</NavDropdown.Item>
                <NavDropdown.Item >Arabic</NavDropdown.Item>
                </NavDropdown>
            </Nav.Link>
            <Login 
              theme={props.theme}
              invtheme={props.invtheme}
              show={props.showLogin}
              handleClose={props.handleLoginClose}
              handleShow={props.handleLoginShow}
              handleSwitchToSignup={props.handleSwitchToSignup}
            />
            <Signup 
              theme={props.theme}
              invtheme={props.invtheme}
              show={props.showSignup}
              handleClose={props.handleSignupClose}
              handleShow={props.handleSignupShow}
              />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;