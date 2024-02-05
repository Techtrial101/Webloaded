import { GiSpiderWeb } from "react-icons/gi";
import { useState } from "react";

const Home = () => {

    const [Creator, setCreator]= useState(
        [
            {id:1, author: "Tom", title: "How to work"},
            {id:2,  author: "John", title: "Learning how to code" },
            {id:3,  author: "Andrew", title: "Achieving your goals"},

        ]
    );

    return (  
        <div classname="home">
            <h1
            style={{
                color: "greenyellow",
        }}>Webloaded<GiSpiderWeb /></h1>

        {Creator.map(( creator,index)=>(
            <div className="creator-preview" key={creator.id}>
                <h2> Title is {creator.title}</h2>
                <p>written by {creator.author}</p>

                </div>
        

        ))}

                
 



            </div>
                
                
            
    
    );
}
 
export default Home;