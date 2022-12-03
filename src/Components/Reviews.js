import Card from 'react-bootstrap/Card';
import Col  from 'react-bootstrap/Col';

export default function Reviews(props) {
  return (
    <Col >
      <Card className={`review ${props.theme}`} bg={props.theme} text={props.theme === 'light' ? 'dark' : 'white'}>
        <Card.Header bsPrefix='review-header'>
          <span className={`qm left ${props.theme}`}>,,</span>
        </Card.Header>
        <Card.Body>
          <Card.Title className="reviewer-name">{props.reviewer}</Card.Title>
          <Card.Text className='review-text text-muted'>
              {props.reviewText}
          </Card.Text>
        </Card.Body>
        <Card.Footer bsPrefix='review-footer'>
          <span className={`qm right ${props.theme}`}>,,</span>
        </Card.Footer>
      </Card>
    </Col>
  );
}