import Row from 'react-bootstrap/Row';
import Reviews from './Reviews';
export default function ReviewSlider(props) {

    return (
        <Row className={`reviewslider ${props.theme}`}>
        <Reviews  theme={props.theme}/>
        <Reviews  theme={props.theme}/>
        </Row>
    );
}