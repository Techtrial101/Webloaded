import { useParams } from "react-router-dom";
import useFetch from "../hooks/use-fetch";


const BlogDetail = () => {
    const {id} = useParams();

    const {creator, error, loading}= useFetch (`http://localhost:8000/creators/${id}`);

  
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
            </article>)}

            <div className="creator-body">

            </div>

        </div>
     );
}
 
export default BlogDetail;