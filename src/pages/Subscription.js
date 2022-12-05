//Components
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import UnderConstruction from "../Components/UnderConstruction";
//CSS
import '../Styling/Header-Footer.css';
//Context
import { ThemeContext } from '../Context/ThemeContext';
import { useContext } from 'react';

import SubCard from '../Components/SubscriptionCards';




let myPrices = [
    {
      plan: "FREE",
      price: "$0/month",
      features: [
        
        {
          name: "10 Likes Each Day",
          isEnabled: true
        },
        {
          name: "1 Super Like Each Day",
          isEnabled: true
        },
        
        
      ]
    },
    {
      plan: "Premium",
      price: "$9/month",
      features: [
        {
          name: "Unlimited Likes Each Day",
          isEnabled: true
        },
        {
          name: "5 Super Likes Each Day",
          isEnabled: true
        }
      ]
    },
    {
      plan: "Platinum",
      price: "$19/month",
      features: [
        {
          name: "Unlimited Likes Each Day",
          isEnabled: true
        },
        {
          name: "Unlimited Super Likes Each Day",
          isEnabled: true
        },
    
        
      ]
    }
  ]





export default function Subscription() {
    const {theme} = useContext(ThemeContext);
    return (
        <div>
            <Header
            theme={theme}
            />
<<<<<<< HEAD
            <div className="Sub_title_container">
                 <h1 className="Sub_title">Subscription</h1>
            </div>
                    <section className="pricing py-5">
                    
                    <div className="container">
                        <div className="row">
                        {
                            myPrices.map( (obj) =>{return<SubCard data={obj}></SubCard>})   // store data in myPrices map to card 
                        }
                        </div>
                    </div>
                    </section>
                
=======
            <UnderConstruction />
>>>>>>> 5522c5603825de218e5defa3668b0532d1427cd4
            <Footer
            theme={theme}
            />
        </div>
    )
}