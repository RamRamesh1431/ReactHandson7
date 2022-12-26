import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Contact from './Components/Contact';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Student from './Components/Student';
import './Components/MyNavbar.css';
import './Components/Rest.css';

function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/student" element={<Student />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;