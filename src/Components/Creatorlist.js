import { Link } from "react-router-dom";

const Creatorlist = ({ creator}) => {

    return ( 
        <>
          {creator.map((creator, index)=>(
            <div className="creator-preview" key={creator.id}>
              <Link to={`/creators/${creator.id}`}>
                <h2> Title is {creator.title}</h2>
                <p>written by {creator.author}</p>
                
                
                </Link>
                </div>
        ))}

        </>
     );
};
 
export default Creatorlist;