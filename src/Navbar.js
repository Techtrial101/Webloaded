import {useState} from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    const [ count, setCount ] = useState(1)

function handleClick(){
    console.log('The user has clicked me')
    setCount(count + 1)
}
    return (  
        <div className="navbar">
            <h1 onClick={handleClick}>My Blog Page{count}</h1>
            <Link to="/">home</Link><br></br>
            <Link to="/">Back</Link><br></br>
            <Link to="/create">Add blog</Link>
            

            
        

        </div>
    );
}
 
export default Navbar;