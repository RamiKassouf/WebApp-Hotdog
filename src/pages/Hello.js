
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import '../Styling/Header-Footer.css';
import jwt from 'jsonwebtoken'

import {ThemeContext} from '../Context/ThemeContext'
import { LoggedinContext } from "../Context/LoggedinContext";

export default  function Hello(props) {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const {locggedin, setLoggedin} = useContext(LoggedinContext);

    
    async function addName() {
        const req = await fetch('http://127.0.0.1:1337/api/hello', {
            method: 'POST',
			headers: {
				'x-access-token': localStorage.getItem('token'),
			},
		})        
		const data = await req.json()
		if (data.status === 'ok') {
			setName(data.firstname)
		} else {
			alert(data.error)
		}
	}
    
    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
            const user = jwt.decode(token)
            if(!user){
                localStorage.removeItem('token')
                navigate('/', { replace: true })
            }else{
                setLoggedin(true);
                addName();

            }
        }else{
            navigate('/', { replace: true })
        }
    }, [])
    
    
    const {theme,toggleTheme} = useContext(ThemeContext);
    return(
        <div>
            <Header 
            theme={theme}
            toggleTheme={toggleTheme}
            />
            <h1>Hello {name}</h1>
            <Footer
            theme={theme}
            />
        </div>
    )
}