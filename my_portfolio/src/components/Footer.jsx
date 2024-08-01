import '../CSS/footer.css'
import React from 'react'
import { Link } from 'react-router-dom';

function Footer(){
    return (
        <>
         <div className='footer'>
         <hr className="footer-line1" />
         <div className='quick-links'>
             <ul>
                 {/* <li><Link to="/"className='footer-link'>Home</Link></li>
                 <li><Link to="/about"className='footer-link'>About</Link></li>
                 <li><Link to="/services"className='footer-link'>Services</Link></li>
                 <li><Link to="/portfolio"className='footer-link'>Portfolio</Link></li>
                 <li><Link to="/contact"className='footer-link'>Contact</Link></li> */}
             </ul>
             <p>Created by Suprine Adriano</p>
         </div>
        
        
          <div className='copyright'>  
          <hr className="footer-line2" />          
                 <p>©Copyright 2024-Developed by Adriano Suprine. All rights reserved.                 
                 </p>
         </div>
         </div>
        </>
       
        
    )
}
export default Footer;