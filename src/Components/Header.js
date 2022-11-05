import HotDogLogo from "../Images/HotDogLogo.gif";
import Login from "./Login";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import { useState } from "react";


function Header(props) {
  // Language Picker without babel and translation
 var language = 'English';
 const changelanguage = (e) => {
    document.getElementById('collasible-nav-dropdown2').innerHTML = e.target.innerHTML;
  }
  //Login Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" bg={props.theme} variant={props.theme}>
      <Container>
        <Navbar.Brand href="#home">
            <img
              alt="Hot Dog Logo"
              src={HotDogLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            HotDog
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
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;