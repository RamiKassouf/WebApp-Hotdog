import Col from 'react-bootstrap/Col';
export default function Footer(props) {
    return(
        <footer className='footer'>
        <Col className='footer-left'>
            <h1>Our Links</h1>
          <ul>
            <li><a href='/About us'>About Us</a></li> 
            <li><a href='#'>Complaints</a></li>       
            <li><a href='/News'>News & Events</a></li>
          </ul>
        </Col>
        <Col className='footer-mid'>
          <h1>Get In Touch</h1>
          <ul>
            <li><a href='#'>Berytech, Mar Roukoz</a></li>
            <li><a href='https://www.instagram.com/'>instagram</a></li>
            <li><a href='#'>(+961)03 111 222</a></li>
            <li><a href='#'>Contact@hotdog.com</a></li>
          </ul>
        </Col>
        <Col className='footer-right'>
          <h1>Subscription</h1>
          <p>Subscribe to our 
            mailing list to get 
            news and information 
            about Berdawni Water 
            delivered right to your inbox.</p>
            <input className='Input_news' type='text' placeholder='Enter Email' />
            <button>Send</button>
        </Col>       
      </footer>
    )}