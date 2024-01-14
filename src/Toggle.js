import {useState} from "react";
const Toggle = () => {

    const [ count, setCount,] = useState("Click me")

    function handleClick() {
        console.log('This user clicked me')
        setCount('Thank you for clicking me')
    }
 
    return (  
        <div className="toggle">
<button onClick={handleClick}>{count}</button>

        </div>
    );
}
 
export default Toggle;