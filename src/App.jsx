import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contacto from "./components/Contacto";
import { Service } from './components/Service';


function App() {

  return (
    <div className="App">    
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/service' element={<Service/>} />
      </Routes> 
      </div>
  )
}

export default App
