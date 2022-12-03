import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';


function Overlay_comp(props) {
  const [show, setShow] = useState(false);
  const target = useRef(null);


  return (
    <>
      <span ref={target} onClick={() => setShow(!show)}>
        {props.widget}
      </span> 
        
      <Overlay target={target.current} show={show} placement={props.position}>
        
          <Tooltip id="overlay-example">
            {props.parag}
          </Tooltip>
        
      </Overlay>
    </>
  );
}

export default Overlay_comp;