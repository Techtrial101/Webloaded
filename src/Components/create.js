import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Create = () => {

    const [title, setTitle]= useState('');
    const [author, setAuthor]= useState('Tobi');
    const [body, setBody]= useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate()

    const {id} = useParams();

    useEffect(()=>{
      if (id){
        fetch(`http://localhost:8000/creators/${id}`)
        .then((res)=>{
          return res.json()
          
        })
        .then((data)=>{
          setTitle(data.title)
          setAuthor(data.author)
          setBody(data.body)
        })
      }
      
    }, [id])
    
    
    const handleSubmit = (e) => {
      setLoading(true)
      e.preventDefault();

      

      setTimeout(()=>{
        const newCreator = {title, author, body}

      const postUrl ='http://localhost:8000/creators'
      const putUrl = `http://localhost:8000/creators/${id}`

      const resolvedUrl =  id ? putUrl : postUrl
      

      fetch(resolvedUrl, {
        method: id ? 'PUT' : 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newCreator)
      })
      .then((res)=>{
        res.json()
        setLoading(false)
        navigate('/')
       
      })
      
      .catch((err)=>{
        console.log(err)
      })
      },3000)
      
    }
    return (
        <div className="create">
            <h2 style={{textAlign: "center"}}>
              {id ? `Edit blog number ${id}` : 'Add a new blog'}
              </h2>

         <form onSubmit={handleSubmit}>
        <label>
        creator title:
        <input 
        type="text" 
        required
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        />
        </label>

        <label>
        
        creator author:
      
        <select
        value={author}
        onChange={(e)=>setAuthor(e.target.value)}
        >
        <option value="Tobi">Tobi</option>
        <option value="AyoOluwa">AyoOluwa</option>
        <option value="Emmanuel">Emmanuel</option>
        <option value="John">John</option>
        </select>
        </label>

        <label>
        creator body:
        <textarea
        rows={7}
        value={body}
        onChange={(e)=>setBody(e.target.value)}
        ></textarea>
        </label>

         {!loading && <button type="submit">
          {id ? `Update your blog` : 'Submit a blog'}
          </button>}
        {loading && <button type="submit" disabled>Posting your blog</button> }
         </form>
        </div>
      );
}
 
export default Create;