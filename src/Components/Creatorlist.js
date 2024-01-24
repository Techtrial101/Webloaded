const Creatorlist = ({creators,handleDelete}) => {

    return ( 
        <>
          {creators.map(( creator,index)=>(
            <div className="creator-preview" key={creator.id}>
                <h2> Title is {creator.title}</h2>
                <p>written by {creator.author}</p>
                <button onClick={()=>{handleDelete(creator.id)}}>Delete creator</button>
                
                </div>
        ))}

        </>
     );
}
 
export default Creatorlist;