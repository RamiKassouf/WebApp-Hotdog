import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

export default function Dateofbirth(props) {
    return(
        <Row>
            <Col className="dateofbirth">
                <Row>
                    <Form.Label>Date of Birth:</Form.Label>
                </Row>
                <Row>
                    <Col >
                        {/* Dateof birth Day */}
                        <Form.Group className="mb-3" controlId="dayofbirth.ControlInput"> 
                            <Form.Control
                                type="text"
                                placeholder="DD"
                                autoFocus
                            />
                        </Form.Group>
                    </Col><span className="slash">/</span>
                    <Col >
                        {/* Dateof birth Month */}
                        <Form.Group className="mb-3" controlId="monthofbirth.ControlInput"> 
                            <Form.Control
                                type="text"
                                placeholder="MM"
                                autoFocus
                            />
                        </Form.Group>
                    </Col><span className="slash">/</span>
                    <Col >
                        {/* Dateof birth Year */}
                        <Form.Group className="mb-3" controlId="yearofbirth.ControlInput"> 
                            <Form.Control
                                type="text"
                                placeholder="YYYY"
                                autoFocus
                            />
                        </Form.Group>
                    </Col>
                </Row>
            </Col>
            <Col>
                <Row>
                    <Form.Label>Gender</Form.Label>
                </Row>
                <Row className="gender">
                    <Col>
                        <Form.Check name="group1" type="radio" label="Male" />
                    </Col>
                    <Col>
                        <Form.Check name="group1" type="radio" label="Female"/>
                    </Col>
                    <Col>
                        <Form.Check name="group1" type="radio" label="Other"/>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}