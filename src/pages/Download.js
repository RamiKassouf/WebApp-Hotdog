//Components
import Header from "../Components/Header"
import Footer from "../Components/Footer"
//CSS
import '../Styling/Header-Footer.css';
//Context
import { ThemeContext } from '../Context/ThemeContext';
import { useContext } from 'react';
export default function Breeds() {
    const {theme} = useContext(ThemeContext);
    return (
        <div>
            <Header
            theme={theme}
            />
            <h1>Download the app here!</h1>
            <Footer
            theme={theme}
            />
        </div>
    )
}