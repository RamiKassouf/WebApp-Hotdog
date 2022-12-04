import React, { useState } from "react";

const SigninContext = React.createContext()

function SigninContextProvider(props) {
    //Login Modal
  const [show, setshow] = useState(false);
  const handleClose = () => setshow(false);
  const handleShow = () => setshow(true);
    
    return (
        <SigninContext.Provider value={{show,handleClose,handleShow}}>
            {props.children}
        </SigninContext.Provider>
    )
}

export {SigninContextProvider, SigninContext}
