import { GiSpiderWeb } from "react-icons/gi";
import { useEffect, useState } from "react";
import Creatorlist from "./Components/Creatorlist";

const Home = () => {

    const [creator, setCreator]= useState(
        [
            {id:1, author: "Tom", title: "How to work"},
            {id:2,  author: "John", title: "Learning how to code" },
            {id:3,  author: "Andrew", title: "Achieving your goals"},

        ]
    );
const[course, setCourse]= useState('open')

    useEffect(()=>{
        console.log('use effect ran')
    },[course])

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
<Creatorlist creator={creator} handleDelete={handleDelete}/>
<button onClick={()=>setCourse('close')}>click to change course </button>

<p>{course}</p>
</div>
 );
}
 
export default Home;