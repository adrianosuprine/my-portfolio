import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

import './App.css'

function App() {
  

  return (
    <>
    <Router>
    <Navbar/>
      
        <Routes>
          <Route path ='/' element={<Home />}/> 
          <Route path ='/about' element={<About />}/> 
          <Route path ='/services' element={<Services />}/> 
          <Route path ='/portfolio' element={<Portfolio />}/> 
          <Route path="/contact" element={<Contact/>} /> 
          
        </Routes>
      
      <Footer/>
    </Router>
    </>
  )
}

export default App
