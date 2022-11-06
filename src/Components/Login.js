import HotDogLogo from "../Images/HotDogLogo.gif";
//Nav.link and button imports
import Nav from 'react-bootstrap/Nav';
import Button from "react-bootstrap/Button";
//Modal imports
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import Form from 'react-bootstrap/Form';

export default function Login(props) {

    return (
        <Nav.Link eventKey={2} href="#Login">
            <Button className={props.theme} variant="primary" onClick={props.handleShow}>Sign In</Button>
            <Modal show={props.show} onHide={props.handleClose} contentClassName={props.theme} centered>
                <Modal.Header closeButton>
                <Modal.Title>
                    <img
                        alt="Hot Dog Logo"
                        src={HotDogLogo}
                        width="30"
                        height="30"
                        className="d-inline-block align-center mb-2"
                        />{' '}
                    Sign In
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form> 
                    {/* Email */}
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1"> 
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="JohnDoe@example.com"
                        autoFocus
                    />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                    </Form.Group>
                        {/* Password */}
                    <Form.Group className="mb-3" controlId="formPlaintextPassword"> 
                        <Form.Label >
                        Password
                        </Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                     </Form.Group>
                     <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Keep me signed in" />
                    </Form.Group>
                </Form>
                </Modal.Body>
                <Modal.Footer>
                    <h6>Dont't have an account? <a href="#SignUp" onClick={props.handleSwitchToSignup} >Sign Up</a></h6>
                <Button className={props.theme} variant="primary" onClick={props.handleClose}>
                    Sign In
                </Button>
                </Modal.Footer>
            </Modal>
        </Nav.Link>
    );
}