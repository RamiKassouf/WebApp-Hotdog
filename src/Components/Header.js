import HotDogLogo from "../Images/HotDogLogo.gif";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';

function Header(props) {
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
          <Nav fill >
            <Nav.Link as="li" id="darkModeSwitch" >
                <Form.Switch id="custom-switch" label="Dark Mode" onChange={props.toggleTheme} checked={props.theme==='dark'}/>
            </Nav.Link>
            <Nav.Link as="li">
                <NavDropdown title="Language" id="collasible-nav-dropdown2" menuVariant={props.theme}>
                <NavDropdown.Item >English</NavDropdown.Item>
                <NavDropdown.Item >French</NavDropdown.Item>
                <NavDropdown.Item >Arabic</NavDropdown.Item>
                </NavDropdown>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#Login">
              <Button variant="outline-success">Login</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;