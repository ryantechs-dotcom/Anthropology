import './App.css';
import { BrowserRouter, Route,Router,Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import History from './History';
import Racism from './Racism';
import Conclusion from './Conclusion';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <div>
      <Routes>        
        <Route path="/"  element={<Home/>} />
        <Route path="/history"  element={<History />}/>
        <Route path="/racism"  element={<Racism />}/>
        <Route path="/conclusion"  element={<Conclusion />}/>
      </Routes>
      </div>
    </BrowserRouter>
   
  );
}

export default App;