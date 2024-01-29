import { GiSpiderWeb } from "react-icons/gi";
import { useEffect, useState } from "react";
import Creatorlist from "./Components/Creatorlist";

const Home = () => {

    const [creator, setCreator]= useState(null);
    const[error, setError]= useState(null);
    const[loading, setLoading]=useState(true);

const[course, setCourse]= useState('open');

    useEffect(()=>{
      setTimeout(()=>{
        fetch('http://localhost:8000/creators')
        .then ((Response)=>{
            if(!Response.ok){
                throw Error('server is busy. Please try again')
            }
         return Response.json()
        })
        .then((creator)=>{
        setCreator(creator)
        setLoading(false)
        })
        .catch((err)=>{
        console.log(err.messsage)
        setError(err.message)
        setLoading(false)
    })
      },1000)

},[]);

    return (  
        <div classname="home">
            <h1
            style={{
                color: "greenyellow",
        }}>Webloaded<GiSpiderWeb /></h1>
         {loading && <div>Your item is being fetched</div>}
        {error && <div>{error}</div>}
       {creator && <Creatorlist creator={creator}/>}
<button onClick={()=>setCourse('close')}>click to change course </button> 

<p>{course}</p>
</div>
 );
}
 
export default Home;