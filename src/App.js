import Navbar from './Navbar';
import './App.css';
import Home from './Home';
import Sidebar from './Sidebar';
import BlogDetail from './BlogDetail';


function App() {
  return (
    <div className="App">

      <Home/>
      <Navbar/> 
      <Sidebar/>
      <BlogDetail/>
      
      
  
    </div>
  );
}

export default App;
