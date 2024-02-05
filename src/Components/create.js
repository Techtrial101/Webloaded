const Create = () => {
    return (
        <div className="create">
            <h2 style={{textAlign: "center"}}>Add a new blog</h2>

         <form>
        <label>
        creator title:
        <input type="text" required/>
        </label>

        <label>
        creator author:
        <select>
        <option value="Tobi">Tobi</option>
        <option value="AyoOluwa">AyoOluwa</option>
        <option value="Emmanuel">Emmanuel</option>
        </select>
        <input type="text" required/>
        </label>

        <label>
        creator body:
        <textarea></textarea>
        </label>

        <button type="submit">Submit a blog</button>
         </form>
        </div>
      );
}
 
export default Create;