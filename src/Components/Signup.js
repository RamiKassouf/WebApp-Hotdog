import HotDogLogo from "../Images/HotDogLogo.gif";
import DoBandGender from "./DoBandGender";
//Nava.link  and button imports
import Nav from 'react-bootstrap/Nav';
import Button from "react-bootstrap/Button";
//Modal imports
import Modal from 'react-bootstrap/Modal';
import { useState,useEffect } from "react";
import Form from 'react-bootstrap/Form';
// Modal Grid imports
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
//backend imports

export default function SignUp(props) {
    //front end functions
    const [checked, setChecked] = useState(false); 
    useEffect(() => {
        if (props.show==false) {
            setChecked(false);
        }
    }, [props.show]);
    
    const handleSignup = () => {
        setChecked(!checked); 
    }
    //backend functions
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [dateofbirth, setDateofbirth] = useState('');
    const [gender, setGender] = useState("");
    const [address, setAddress] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [postcode, setPostcode] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    async function registerUser(event) {
		event.preventDefault()
        if(password !== confirmPassword){
            alert('Passwords do not match')
            
        }else{
            const response = await fetch('http://127.0.0.1:1337/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstname: firstname,
                    lastname: lastname,
                    dateofbirth: dateofbirth,
                    gender: gender,
                    address: address,
                    country: country,
                    city: city,
                    postcode: postcode,
                    email: email,
                    username: username,
                    password: password,
                }),
            })
            const data = await response.json()
            if (data.status === 'ok') {
                props.handleClose()
                console.log('User created') 
            }else{
                alert('Invalid Signup')
                console.log('User not created')
            }
        }
    }


    return (
        <Nav.Link eventKey={2} href="Signup">
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
                <Form > 
                    <Row className="fullname">
                        <Col className="firstname" >
                             {/* First Name */}
                            <Form.Group className="mb-3" controlId="firstname.ControlInput"> 
                                <Form.Control
                                    value={firstname}
                                    onChange={(e) => setFirstname(e.target.value)}
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
                                    value={lastname}
                                    onChange={(e) => setLastname(e.target.value)}
                                    type="text"
                                    placeholder="Last Name"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <DoBandGender 
                        setDateofbirth={setDateofbirth}
                        dateofbirth={dateofbirth}
                        setGender={setGender}
                        group="gender"
                        theme={props.theme}
                    />
                    <Row className="email">
                        <Col>
                            {/* Email */}
                            <Form.Group className="mb-3" controlId="email.ControlInput"> 
                                <Form.Control
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
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
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
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
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                    type="country"
                                    placeholder="Country"
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            {/* City */}
                            <Form.Group className="mb-3" controlId="city.ControlInput">
                                <Form.Control
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    type="city"
                                    placeholder="City"
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            {/* Postcode */}
                            <Form.Group className="mb-3" controlId="postcode.ControlInput">
                                <Form.Control
                                    value={postcode}
                                    onChange={(e) => setPostcode(e.target.value)}
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
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
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
                                    value={password}
                                    minLength="6"
                                    maxLength="20"
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Password" 
                                    aria-describedby="passwordHelpBlock"
                                    />
                                <Form.Text id="passwordHelpBlock" muted>
                                    Your password must be 6-20 characters long.
                                </Form.Text>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                             {/* Password */}
                            <Form.Group className="mb-3" controlId="confpass.formPlaintextPassword"> 
                                    <Form.Control 
                                    value={confirmPassword}
                                    minLength="6"
                                    maxLength="20"
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    type="password" 
                                    placeholder="Confirm Password" 
                                    />
                            </Form.Group>
                        </Col>
                    </Row>   
                     <Form.Group className="mb-3" controlId="terms.formBasicCheckbox">
                        <Form.Check type="checkbox" label="I have read and agreed to the terms and conditions" onChange={handleSignup}  />
                    </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button id="signupButton"
                type="submit" 
                className={props.theme} 
                variant="primary" 
                onClick={registerUser} 
                disabled={!checked}>
                    Sign Up
                </Button>
                </Modal.Footer>
            </Modal>
        </Nav.Link>
    );
}