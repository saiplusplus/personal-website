import logo from './logo.svg';
import './App.css';
import React from "react";
import Navbar from './Pages/Home/Navbar';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Pages/Home/Homescreen';
import SaiProductions from './Pages/SaiProductions/SaiProductions';
import WorkExperience from './Pages/WorkExperience';
import Projects from './Pages/Projects';
import AnimatedRoutes from './AnimatedRoutes';


function App() {
  
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <AnimatedRoutes/>
      </Router>
      
    </div>
  );
}

export default App;
