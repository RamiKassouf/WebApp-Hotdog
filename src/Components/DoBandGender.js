import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import { FormGroup } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DoBandgender(props) {

    const checkValid = (e) => {
            (props.genders).forEach(
            (e)=>{
                e.setCustomValidity('');
            }
        )
    }
    return(
        <Row>
            <Col className="DoBandgender">
                <Row>
                    <Form.Label>Date of Birth:</Form.Label>
                </Row>
                <Row>
                    <Col >
                        {/* Dateof birth */}
                        <Form.Group className="mb-3" controlId="dayofbirth.ControlInput"> 
                            <DatePicker
                                required
                                className={`form-control ${props.theme}`}
                                selected={props.dateofbirth}
                                dateFormat="dd/MM/yyyy"
                                onChange={(date) => props.setDateofbirth(date)}
                                minDate={new Date('01/01/1900')}
                                maxDate={new Date()}
                                placeholderText="DD/MM/YYYY"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid date.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
            </Col>
            <Col>
                <Row>
                    <Form.Label>Gender</Form.Label>
                </Row>
                <FormGroup onChange={(e)=>props.setGender(e.target.id)} >
                    <Row className={`${props.theme} gender`} >
                    {['Male','Female','Other'].map((type) => (
                    <Col key={type} id={`check-api-${type}`}>
                        <Form.Check type="radio" id={`check-api-${type}`} feedback="You must agree before submitting." isInvalid>
                        <Form.Check.Input name={props.group} type="radio" id={type} onChange={checkValid} />
                        <Form.Check.Label htmlFor={type}>{type}</Form.Check.Label>
                        </Form.Check>
                    </Col>
                    ))}
                    </Row>
                </FormGroup>
            </Col>
        </Row>
    )
}