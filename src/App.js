import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './Pages/Home/Homepage';
import Joblist from './Pages/Joblist/Joblist'
import Loginmodal from './Components/Loginmodal/Loginmodal';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} /> 
      </Routes>
      <Routes>
        <Route path="/login" element={<Loginmodal />} /> 
      </Routes>
      <Routes>
        <Route path="/jobs" element={<Joblist />} /> 
      </Routes>
    </Router>
  )
}

export default App
