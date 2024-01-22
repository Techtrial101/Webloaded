import Navbar from './Navbar';
import './App.css';
import Home from './Home';
import Sidebar from './Sidebar';
import BlogDetail from './BlogDetail';
import Toggle from './Toggle';



function App() {
  const explore = () => {
    console.log("The user hovered over the element")
  }

  // use event listener to listen to event

  const handlekeypress = (e) => { 
    console.log('e')
    console.log(e.key)
    if (e.key === 'r') console.log('the user pressed the r key')
  }
  
  window.addEventListener( 'keydown', handlekeypress)


  return (
    <div className="App">
      <h1 onMouseEnter = {explore} >This is a component</h1>
      
      <Home/>
      <Navbar/> 
      <Sidebar/>
      <BlogDetail/>
      <Toggle/>
      
      
      
  
    </div>
  );
}

export default App;
