const Creatorlist = ({creator,handleDelete}) => {

    return ( 
        <>
          {creator.map(( creator,index)=>(
            <div className="creator-preview" key={creator.id}>
                <h2> Title is {creator.title}</h2>
                <p>written by {creator.author}</p>
                
                </div>
        ))}

        </>
     );
}
 
export default Creatorlist;