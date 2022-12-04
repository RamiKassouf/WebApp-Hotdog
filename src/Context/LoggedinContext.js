import React, { useState,useEffect } from "react";
import jwt from "jsonwebtoken";

const LoggedinContext = React.createContext()

function LoggedinContextProvider(props) {
    //Login Modal
  const [loggedin, setLoggedin] = useState(false);
    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
            const user = jwt.decode(token)
            if(!user){
                localStorage.removeItem('token')
                setLoggedin(false);
            }else{
                setLoggedin(true);

            }
        }
    }, [loggedin])

    return (
        <LoggedinContext.Provider value={{loggedin,setLoggedin}}>
            {props.children}
        </LoggedinContext.Provider>
    )
}

export {LoggedinContextProvider, LoggedinContext}