
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import "../Styling/Signup.css"
import "../Styling/Home.css"
// import paseto from "paseto";

export default  function Hello() {
    const navigate = useNavigate();
    const [name, setName] = useState('');

    // async function addName() {
    //     const req = await fetch('http://127.0.0.1:1337/api/hello', {
	// 		headers: {
	// 			'x-access-token': localStorage.getItem('token'),
	// 		},
	// 	})

	// 	const data = await req.json()
	// 	if (data.status === 'ok') {
	// 		setName(data.firstname)
	// 	} else {
	// 		alert(data.error)
	// 	}
	// }
    
    // useEffect(() => {
    //     const token = localStorage.getItem('user')
    //     if(token){
    //         const key = 'secret123'
    //         const user = paseto.decrypt(token, key)
    //         if(user){
    //             addName();
    //         }else{
    //             localStorage.removeItem('user')
    //             navigate('/login', { replace: true })

    //         }
    //     }
    // }, [])


    return(
        <div>
            <Header />
            <h1>Hello {name}</h1>
            <Footer/>
        </div>
    )
}