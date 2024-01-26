import { GiSpiderWeb } from "react-icons/gi";
import { useEffect, useState } from "react";
import Creatorlist from "./Components/Creatorlist";

const Home = () => {

    const [creator, setCreator]= useState(null);

const[course, setCourse]= useState('open');

    useEffect(()=>{
        fetch('http://localhost:8000/creators')
        .then ((Response)=>{
         return Response.json()
        })
        .then((creatorArray)=>{
            console.log(creatorArray)
            setCreator(creatorArray)

        })
    },[]);

    const handleDelete = (id) => {
        console.log('The id of the clicked blog is', id)

        const filteredCreators = creator.filter((creator, index)=> creator.id !== id)

    setCreator(filteredCreators)
    }

    
    return (  
        <div classname="home">
            <h1
            style={{
                color: "greenyellow",
        }}>Webloaded<GiSpiderWeb /></h1>
{creator && <Creatorlist creator={creator} handleDelete={handleDelete}/>}
<button onClick={()=>setCourse('close')}>click to change course </button> 

<p>{course}</p>
</div>
 );
}
 
export default Home;