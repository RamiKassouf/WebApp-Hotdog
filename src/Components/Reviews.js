import Card from 'react-bootstrap/Card';
import Col  from 'react-bootstrap/Col';
import qmd from '../Images/QuotationMarkDark.gif';
import qml from '../Images/QuotationMarkLight.gif';

export default function Reviews(props) {
  return (
    <Col>
    <Card className={`review ${props.theme}`} bg={props.theme} text={props.theme === 'light' ? 'dark' : 'white'}>
        <Card.Body>
        {props.theme==='light'&&<Card.Img className="qm" src={qmd} />}
        {props.theme==='dark'&&<Card.Img className="qm" src={qml} />}
            <Card.Title>Person's Name</Card.Title>
            <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
            </Card.Text>
        </Card.Body>
    </Card>
    </Col>
  );
}