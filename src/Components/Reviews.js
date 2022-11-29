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
        <Card.Title className="reviewer-name">James Riachy</Card.Title>
        <Card.Text className='review-text text-muted'>
          Covid hit us really hard last year and Lucy had grown quite antisocial, 
          but thanks to HotDog we managed to find her a partner. 
          Lucy is now the proud mother of 6 and her partner has been comming around a lot. 
          She seems very happy!
        </Card.Text>
      </Card.Body>
      <Card.Footer as="Col" bsPrefix='review-footer'>
        <span className={`qm right ${props.theme}`}>,,</span>
      </Card.Footer>
    </Card>
    </Col>
  );
}