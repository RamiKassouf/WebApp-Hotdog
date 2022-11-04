import HeaderLogo from "./Images/HeaderLogo.svg";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">HotDog</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Breeds">Breeds</Nav.Link>
            <Nav.Link href="#Download">Download</Nav.Link>
            <NavDropdown title="Subscription" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#Free">Free</NavDropdown.Item>
              <NavDropdown.Item href="#Premium">Premium</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <NavDropdown title="Language" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#Free">English</NavDropdown.Item>
              <NavDropdown.Item href="#Premium">French</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Arabic</NavDropdown.Item>
            </NavDropdown>
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