import underconstruction from '../Images/Website-under-construction.jpg';
import "../Styling/UnderConstruction.css";

export default function UnderConstruction(props) {
    return (
        <div className='underconstruction'>
            <img src={underconstruction} alt="underconstruction" className="underconstruction-img" />
            <div className='underconstruction-text'>
                <h1>Welcome {props.user} !</h1>
                <p>
                    This page is under construction. Please come back later.
                    Subscribe to our newsletter to get notified when this page is ready.
                </p>
            </div>
        </div>
    )
}