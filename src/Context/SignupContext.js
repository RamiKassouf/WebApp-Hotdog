import React, { useState } from "react";

const SignupContext = React.createContext()

function SignupContextProvider(props) {
    //Login Modal
  const [showSignup, setShowSignup] = useState(false);
  const handleSignupClose = () => {setShowSignup(false); }
  const handleSignupShow = () => setShowSignup(true);
    
    return (
        <SignupContext.Provider value={{showSignup, handleSignupClose, handleSignupShow}}>
            {props.children}
        </SignupContext.Provider>
    )
}

export {SignupContextProvider, SignupContext}