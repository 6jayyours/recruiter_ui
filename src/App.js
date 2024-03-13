import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './Pages/Home/Homepage';
import Joblist from './Pages/Joblist/Joblist'
import Loginmodal from './Components/Loginmodal/Loginmodal';
import Adminuser from './Pages/Admin/Adminuser';
import Adminrecruiter from './Pages/Admin/Adminrecruiter';
import Post from './Pages/Recruiter/Jobpost/Post';


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
      <Routes>
        <Route path="/users" element={<Adminuser />} /> 
      </Routes>
      <Routes>
        <Route path="/recruiters" element={<Adminrecruiter />} /> 
      </Routes>
      <Routes>
        <Route path="/postjob" element={<Post />} /> 
      </Routes>
    </Router>
  )
}

export default App
