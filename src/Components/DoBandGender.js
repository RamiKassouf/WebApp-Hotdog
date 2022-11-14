import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import { FormGroup } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DoBandgender(props) {
    
    
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
                            className={`form-control ${props.theme}`}
                            selected={props.dateofbirth}
                            dateFormat="dd/MM/yyyy"
                            onChange={(date) => props.setDateofbirth(date)}
                            minDate={new Date('01/01/1900')}
                            maxDate={new Date()}
                            placeholderText="DD/MM/YYYY"
                            />
                        </Form.Group>
                    </Col>
                </Row>
            </Col>
            <Col>
                <Row>
                    <Form.Label>Gender</Form.Label>
                </Row>
            <FormGroup onChange={(e)=>props.setGender(e.target.id)}>
                <Row className={`${props.theme} gender`} >
                    <Col>
                        <Form.Check name={props.group} type="radio" label="Male" id='Male' />
                    </Col>
                    <Col>
                        <Form.Check name={props.group} type="radio" label="Female" id='Female'/>
                    </Col>
                    <Col>
                        <Form.Check name={props.group} type="radio" label="Other" id='Other'/>
                    </Col>
                </Row>
            </FormGroup>
            </Col>
        </Row>
    )
}