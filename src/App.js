import './App.css';
import { Routes, Route } from "react-router-dom";
import HOME from './components/Home';
import NAVBAR from './components/Navbar';
import MENU from './components/menu';


function App() {
  return (
    <div className="App">
      <NAVBAR/>
      <Routes>
          <Route exact path="/" element={<HOME/>}/>
          <Route exact path="/menu" element={<MENU/>}/>
         
        </Routes>
    </div>
  );
}

export default App;
