import {useState} from "react";

const Navbar = () => {

    const [ count, setCount ] = useState(1)

function handleClick(){
    console.log('The user has clicked me')
    setCount(count + 1)
}
    return (  
        <div className="navbar">
            <h1 onClick={handleClick}>My Blog Page{count}</h1>
            <a href="/">home</a> <br></br>
            <a href="/create">New blog</a><br></br>
            <a href="/create">Back</a><br></br>
            <a href="https://google.com">google</a><br></br>

            
        

        </div>
    );
}
 
export default Navbar;