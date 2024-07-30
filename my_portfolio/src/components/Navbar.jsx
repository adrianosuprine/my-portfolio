// import './App.css'
import React, { useEffect, useState } from 'react';
import { IoIosCall } from "react-icons/io";
import { Link } from "react-scroll";
import { FiMenu } from 'react-icons/fi';
import { MdClose } from "react-icons/md";

import '../CSS/nav.css';
import { navlinksdata } from '../constants';


function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
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
        <div className="desktop-menu desktop-menu-lg">
          <ul className='menu-list menu-list-lg'>
            {navlinksdata.map(({_id, title, link}) => (
                <li 
                className="menu-item"
                key={_id}>
                  <Link
                  activeClass='active'
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
              >
                  {title}
                  </Link>
                </li>
            ))}
            <p className='phone-no'> | < IoIosCall className='phn-icon' /> <span>+254720388005</span>
          </p> 
          </ul>

        
          
         
        </div>
      </div>
    );
}

export default Navbar;




