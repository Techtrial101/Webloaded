import Navbar from './Navbar';
import './App.css';
import Home from './Home';
//import Sidebar from './Sidebar';
//import Toggle from './Toggle';
import { Routes, Route } from 'react-router-dom';
import Create from './Components/create';
import NotFound from './Components/not-found';
import BlogDetail from './Components/BlogDetail';




function App() {
  const explore = () => {
    console.log("The user hovered over the element")
  }

  // use event listener to listen to event

  

  return (
    <div className="App">
      <h1 onMouseEnter = {explore} >This is a component</h1>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/create' element={<Create/>} />
        <Route path='*' element={<NotFound />}/>
        <Route path="/edit/:id" element={<Create/>}/>
        <Route path= "/creators/:id" element={<BlogDetail/>}/>
        </Routes>

      
        <Navbar/> 
    
    
  
    </div>
  );
}

export default App;
