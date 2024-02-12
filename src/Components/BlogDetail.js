import { Link, useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/use-fetch";
import axios from "axios";


const BlogDetail = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const {creator, error, loading}= useFetch (`http://localhost:8000/creators/${id}`);

    const handleDelete= (id)=>{
        axios.delete(`http://localhost:8000/creators/${id}`)
        .then((res)=>{
         navigate('/')
        })
        .catch((err)=>{
            console.log(err)
        })

    }


    return ( 
        <div className="blogdetail">
            <h1>This is the blog details for blog with id  - {id} </h1>
            {loading && <div> Your item is currently being fetched </div>}
            {error && <div>{error}</div>}
       
        {creator && (
            <article>
            <h2>{creator.title}</h2>
            <p>{creator.author}</p>
            <div>{creator.body}</div>
            <button type="button" onClick={()=>handleDelete(creator.id)}>Delete this blog</button>
            
           <Link to={`/edit/${creator.id}`}>Edit this blog</Link>
            </article>)}

            

        </div>
     );
}
 
export default BlogDetail;