import HotDogLogo from "../Images/HotDogLogo.gif";
import Dateofbirth from "./Dateofbirth";
//Nava.link  and button imports
import Nav from 'react-bootstrap/Nav';
import Button from "react-bootstrap/Button";
//Modal imports
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import Form from 'react-bootstrap/Form';
// Modal Grid imports
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
                    <Row className="fullname">
                        <Col className="firstname" >
                             {/* First Name */}
                            <Form.Group className="mb-3" controlId="firstname.ControlInput"> 
                                <Form.Control
                                    type="text"
                                    placeholder="First Name"
                                    autoFocus
                                />
                            </Form.Group>
                        </Col>
                        <Col className="lastname">
                            {/* Last Name */}
                            <Form.Group className="mb-3" controlId="lastname.ControlInput">
                                <Form.Control
                                    type="text"
                                    placeholder="Last Name"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Dateofbirth />
                    <Row className="email">
                        <Col>
                            {/* Email */}
                            <Form.Group className="mb-3" controlId="email.ControlInput"> 
                                <Form.Control
                                    type="email"
                                    placeholder="Email Address"
                                    autoFocus
                                />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="Address">
                        <Col>
                            {/* Address */}
                            <Form.Group className="mb-3" controlId="address.ControlInput">
                                <Form.Control
                                    type="address"
                                    placeholder="Address"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="location">
                        <Col>
                            {/* Location */}
                            <Form.Group className="mb-3" controlId="location.ControlInput">
                                <Form.Control
                                    type="country"
                                    placeholder="Country"
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            {/* City */}
                            <Form.Group className="mb-3" controlId="city.ControlInput">
                                <Form.Control
                                    type="city"
                                    placeholder="City"
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            {/* Postcode */}
                            <Form.Group className="mb-3" controlId="postcode.ControlInput">
                                <Form.Control
                                    type="text"
                                    placeholder="Postcode"
                                />
                            </Form.Group>
                        </Col>

                    </Row>
                    <Row className="username">
                        <Col>
                            {/* Username */}
                            <Form.Group className="mb-3" controlId="username.ControlInput">
                                <Form.Control
                                    type="text"
                                    placeholder="Username"
                                />
                            </Form.Group>
                        </Col>
                    </Row>


                    <Row className="password">
                        <Col>
                             {/* Password */}
                            <Form.Group className="mb-3" controlId="pass.formPlaintextPassword"> 
                                    <Form.Control type="password" 
                                    placeholder="Password" 
                                    aria-describedby="passwordHelpBlock"
                                    />
                                <Form.Text id="passwordHelpBlock" muted>
                                    Your password must be 8-20 characters long, contain letters and numbers,
                                    and must not contain spaces, special characters, or emoji.
                                </Form.Text>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                             {/* Password */}
                            <Form.Group className="mb-3" controlId="confpass.formPlaintextPassword"> 
                                    <Form.Control type="password" 
                                    placeholder="Confirm Password" 
                                    />
                            </Form.Group>
                        </Col>
                    </Row>   
                     <Form.Group className="mb-3" controlId="terms.formBasicCheckbox">
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