import React, { useEffect, useState } from 'react';
import {  } from "react-icons/io";

function Contact (){
    return (
        <div className='contact-container'>
            <div className='left'>
                <h2>Contact with me</h2>
             <p>Hello! I'm Joshua Ngumbau, a passionate and experienced full-stack<br/>
              developer with expertise in front-end and back-end development.I am<br/>
               currently available for freelance projects and open to full-time<br/>
                opportunities.If you have an exciting project in mind or would like to<br/>
                 discuss how I can contribute to your development needs, please feel free<br/>
                  to reach out to me. I would love to hear from you!</p>
            </div>
            <div className='right'>
                <input name='name' placeholder='Your Name'/>
                <input name='email' placeholder='Email Address'/>
                <input name='message' placeholder='Message'/>
                <button>Send</button>

            </div>
        </div>
    );
}
export default Contact;