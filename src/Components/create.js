import { useState } from "react";

const Create = () => {

    const {title, setTitle}= useState('');
    const {author, setAuthor}= useState('');
    const {body, setBody}= useState('');

    const handleSubmit = ()=> {
      console.log(title, author, body)  
    }
    return (
        <div className="create">
            <h2 style={{textAlign: "center"}}>Add a new blog</h2>

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
        </select>
        <input type="text" required/>
        </label>

        <label>
        creator body:
        <textarea
        rows={7}
        value={body}
        onChange={(e)=>setBody(e.target.value)}
        ></textarea>
        </label>

        <button type="submit">Submit a blog</button>
         </form>
        </div>
      );
}
 
export default Create;