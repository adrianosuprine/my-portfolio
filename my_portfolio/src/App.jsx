import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css'

function App() {
  

  return (
    <>
    <div className="container">
    <Navbar/>
    <Home />
    <About/>
    <Services/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </div>
    
    </>
  )
}

export default App
