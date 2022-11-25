import Card from 'react-bootstrap/Card';
import Col  from 'react-bootstrap/Col';

export default function Reviews(props) {
  return (
    <Col>
    <Card className={`review ${props.theme}`} bg={props.theme} text={props.theme === 'light' ? 'dark' : 'white'}>
      <Card.Header as="Col" bsPrefix='review-header'>
        <span className={`qm left ${props.theme}`}>,,</span>
      </Card.Header>
      <Card.Body as="Col">
        <Card.Title>Person's Name</Card.Title>
        <Card.Text className='text-muted'>
          This is a longer card with supporting text below as a natural
          lead-in to additional content. This content is a little bit
          longer.
        </Card.Text>
      </Card.Body>
      <Card.Footer as="Col" bsPrefix='review-footer'>
        <span className={`qm right ${props.theme}`}>,,</span>
      </Card.Footer>
    </Card>
    </Col>
  );
}