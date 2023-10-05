import './App.css';
import { Routes, Route } from "react-router-dom";
import HOME from './components/Home';
import NAVBAR from './components/Navbar';


function App() {
  return (
    <div className="App">
      <NAVBAR/>
      <Routes>
          <Route exact path="/" element={<HOME/>}/>
         
        </Routes>
    </div>
  );
}

export default App;
