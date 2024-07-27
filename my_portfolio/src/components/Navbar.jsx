import './App.css'
import React, { useEffect, useState } from 'react';
import { IoIosCall } from "react-icons/io";
import { Link } from 'react-router-dom';

function Navbar() {
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return (
        <div className={`navbar ${shadow ? 'navbar-shadow' : ''}`}>
        <div className="left">
         <h1><span>Ad</span>riano.</h1>
        </div>
        <div className="right">
         <Link to="/"className="nav-link" id="home">Home</Link>       
         <Link to="/about"className="nav-link">About</Link>
         <Link to="/services"className="nav-link">Services</Link>
         <Link to="/portfolio"className="nav-link">Portfolio</Link>
         <Link to="/contact"className="nav-link">Contact</Link>
         
          <p className='phone-no'> | < IoIosCall className='phn-icon' /> <span>+254720388005</span>
          </p> 
         
        </div>
      </div>
    );
}

export default Navbar;