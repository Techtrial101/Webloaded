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
            <Link to={'/'}>
            <img src="webl.png" alt="React Logo" className="logo"/>
            <h1 onClick={handleClick}>My Blog Page{count}</h1>
            </Link>
           
            <p className="link">
            <Link to="/"> home</Link>
            <Link to="/"> Back</Link>
            <Link to="/create"> Addblog</Link>
            </p>
            

            
        

        </div>
    );
}
 
export default Navbar;