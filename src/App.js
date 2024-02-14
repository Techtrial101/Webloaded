import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import './App.css';
import Home from './Home';
// import Sidebar from './Sidebar';
// import Toggle from './Toggle';
import Create from './Components/create';
import NotFound from './Components/not-found';
import BlogDetail from './Components/BlogDetail';

function App() {
  const explore = () => { };

  return (
    <div className="App">
      <h1 onMouseEnter={explore}>This is a component</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/edit/:id" element={<Create />} />
        <Route path="/creators/:id" element={<BlogDetail />} />
      </Routes>

    </div>
  );
}

export default App;
