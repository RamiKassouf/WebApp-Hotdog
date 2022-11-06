import HotDogLogo from "../Images/HotDogLogo.gif";
//Nava.link  and button imports
import Nav from 'react-bootstrap/Nav';
import Button from "react-bootstrap/Button";
//Modal imports
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import Form from 'react-bootstrap/Form';
// Modal Grid imports
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function SignUp(props) {
    const enableSignup = () => {document.getElementById("signupButton").disabled = false;}
    return (
        <Nav.Link eventKey={2} href="#Signup">
            <Modal show={props.show} onHide={props.handleClose} contentClassName={props.theme} size='lg' centered>
                <Modal.Header closeButton>
                <Modal.Title>
                    <img
                        alt="Hot Dog Logo"
                        src={HotDogLogo}
                        width="30"
                        height="30"
                        className="d-inline-block align-center mb-2"
                        />{' '}
                    Sign Up
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
                            <Form.Control type="password" 
                            placeholder="Password" 
                            aria-describedby="passwordHelpBlock"
                            />
                        <Form.Text id="passwordHelpBlock" muted>
                            Your password must be 8-20 characters long, contain letters and numbers,
                            and must not contain spaces, special characters, or emoji.
                        </Form.Text>
                     </Form.Group>
                     <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="I have read and agreed to the terms and conditions" onchecked={enableSignup}/>
                    </Form.Group>
                </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button className={props.theme} variant="primary" onClick={props.handleClose} >
                    Sign Up
                </Button>
                </Modal.Footer>
            </Modal>
        </Nav.Link>
    );
}