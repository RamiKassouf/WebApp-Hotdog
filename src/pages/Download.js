//Components
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import UnderConstruction from "../Components/UnderConstruction";
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
            <UnderConstruction />
            <Footer
            theme={theme}
            />
        </div>
    )
}