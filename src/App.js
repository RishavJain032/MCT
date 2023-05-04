// import logo from './logo.svg';
// import './App.css';
import Sidebar from './Components/Sidebar';
import {Route,Routes} from 'react-router-dom'
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Search from './Components/Search';
// import Fetch from './Components/Fetch';



function App() {
  return (
    <div style={{color:"white",display:"flex",backgroundColor:"#212121"}} className="App">
      <Sidebar />
      <div>
      <Navbar/>
      <div >
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/library' element={<Home/>}/>
        <Route path='/details' element={<Home/>}/>
      </Routes></div>
      </div>
    </div>
  );
}

export default App;