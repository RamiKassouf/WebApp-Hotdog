import Card from 'react-bootstrap/Card';
import Col  from 'react-bootstrap/Col';

export default function Reviews(props) {
  return (
    <Col >
      <Card className={`dog ${props.theme}`} bg={props.theme} text={props.theme === 'light' ? 'dark' : 'white'}>
        <Card.Body className={props.className}>
          <Card.Title className="dog-name">{props.reviewer}</Card.Title>
          <Card.Text className='dog-description text-muted'>
              {props.reviewText}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}