import React,{useState} from 'react'
import TinderCard from 'react-tinder-card';
import "../Styling/Cards.css";


function Cards() {

    const [people,setPeople] = useState([
        {
            name: "John",
            url:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Dog_-_%E0%B4%A8%E0%B4%BE%E0%B4%AF-6.JPG/1024px-Dog_-_%E0%B4%A8%E0%B4%BE%E0%B4%AF-6.JPG",
        },
        {
            name: "Jessica",
            url:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Chin_posing.jpg/800px-Chin_posing.jpg",
        }

    ]);



    const swiped = (index) => {
        console.log("removing: " + index);
      }

   
      

    const outOfFrame = (myIdentifier,index) => {
        
        console.log(myIdentifier + ' left the screen')
        const element = document.getElementById(index);
        
        element.remove();
        

    }

   
  return (
        <div className='Cards_container'>
            {people.map((person,index)=>(
               <TinderCard className='swipe' id={index}  
                key={person.name} 
                preventSwipe={["up","down"]}
                onSwipe={(dir)=>swiped(dir,person.name)}
                onCardLeftScreen={()=>outOfFrame(person.name,index)}>


                    <div className='cardd' style={{backgroundImage:"url(" + person.url +")"}}>
                        <h3>{person.name}</h3>
                    </div>


               </TinderCard>
            ))}
        </div>
  )
}

export default Cards