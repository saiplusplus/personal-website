import React from 'react'
import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Home/Navbar';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Pages/Home/Homescreen';
import SaiProductions from './Pages/SaiProductions/SaiProductions';
import WorkExperience from './Pages/WorkExperience';
import Projects from './Pages/Projects';
import Me from './Pages/Me';

import { AnimatePresence } from 'framer-motion';
import About from './Pages/AboutMe';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" exact element={<Home/>}></Route>
          <Route path="*" element={<div>404 Not Found</div>}></Route>
          <Route exact path="/work-experience" element={<WorkExperience/>}></Route>
          <Route exact path="/projects" element={<Projects/>}></Route>
          <Route exact path="/me" element={<Me/>}></Route>
          <Route exact path="/about" element={<About/>}></Route>
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes