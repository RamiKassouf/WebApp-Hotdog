import Row from 'react-bootstrap/Row';
import Reviews from './Reviews';
import { useState, useEffect } from 'react';
export default function ReviewSlider(props) {

    const [reviews, setReviews] = useState('');

    useEffect(() => {
        const fetchReviews = async () => {
            const res = await fetch('http://127.0.0.1:1337/api/reviews', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const data = await res.json();

            if(res.ok) {
                setReviews(data);
            }else{
                alert(data.error);
            }
        }

        fetchReviews();
    }, [])


    return (
        <Row className={`reviewslider ${props.theme}`}>
            { reviews && reviews.map((review) => (
                <Reviews
                    key={review.id}
                    reviewer={review.reviewer}
                    reviewText={review.review}
                    theme={props.theme}
                />
                )
            )}
        </Row>
    );
}