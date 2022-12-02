
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import "../Styling/Signup.css"
import "../Styling/Home.css"
import jwt from 'jsonwebtoken'

export default  function Hello() {
    const navigate = useNavigate();
    const [name, setName] = useState('');

    async function addName() {
        const req = await fetch('http://127.0.0.1:1337/api/hello', {
            method: 'POST',
			headers: {
				'x-access-token': localStorage.getItem('token'),
			},
		})
            
		const data = await req.json()
        console.log(data)
		if (data.status === 'ok') {
            console.log(data.firstname)
			setName(data.firstname)
		} else {
			alert(data.error)
		}
	}
    
    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
            const user = jwt.decode(token)
            console.log(user)
            if(!user){
                localStorage.removeItem('token')
                navigate('/', { replace: true })
            }else{
                addName();

            }
        }
    }, [])


    return(
        <div>
            <Header />
            <h1>Hello {name}</h1>
            {console.log(name)}
            {/* <Footer/> */}
        </div>
    )
}