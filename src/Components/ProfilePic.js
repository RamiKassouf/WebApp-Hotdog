import profilepicture from '../Images/default-profile-picture.png';
import Dropdown from 'react-bootstrap/Dropdown';

import { useContext, } from "react";
import { LoggedinContext } from "../Context/LoggedinContext";

export default function ProfilePic(props) {
    const { loggedin, setLoggedin } = useContext(LoggedinContext);
    const handleLogout = () => {
        setLoggedin(false);
        localStorage.removeItem('token');
        window.location.href= '/';
    }


    return (
        <Dropdown align="end"  className="profilepic">
            <Dropdown.Toggle as="img" src={profilepicture} width="30px" height="30px" alt="profilepicture" className="profilepic-img"  id="profilepic-dropdown">
            </Dropdown.Toggle>
            <Dropdown.Menu variant={props.theme} className="profilepic-dropdown">
                <Dropdown.Item >My Profile</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}