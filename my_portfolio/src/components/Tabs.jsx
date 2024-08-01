import React, { useState } from 'react';
import '../CSS/tabs.css';

const tabs = [
  { 
    name: 'skills', 
    label: 'Skills', 
    content: (
      <ul>
        <li><span> - Web Development</span><br />Frontend with React JS</li>
        <li><span> - API Intergration</span><br />Python Flask and Django</li>
      </ul>
    )
  },
  { 
    name: 'experience', 
    label: 'Experience', 
    content: (
      <ul>
        <li><span> - June 2024 - present</span><br />Freelancer</li>
        <li><span> - Jan 2020 - Sep 2021</span><br />IT Assistant - Jomic Tech</li>
      </ul>
    )
  },
  { 
    name: 'education', 
    label: 'Education', 
    content: (
      <ul>
        <li><span> - Nov 2023 - May 2024</span><br />Certified Software Developer<br />Moringa School</li>
        <li><span> - Sep 2019 - Dec 2023</span><br />Bsc. Mathematics and Computer Science<br />Kenyatta University</li>
      </ul>
    )
  }
];

function Tabs() {
  const [activeTab, setActiveTab] = useState('skills');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="tab-container">
      <div className="tab-titles text">
        {tabs.map(tab => (
          <p 
            key={tab.name} 
            className={`tab-links ${activeTab === tab.name ? 'active-link' : ''}`} 
            onClick={() => handleTabClick(tab.name)}
          >
            {tab.label}
          </p>
        ))}
      </div>
      <div className="tab-contents-container">
        {tabs.map(tab => (
          <div 
            key={tab.name} 
            className={`text tab-contents ${activeTab === tab.name ? 'active-tab' : ''}`}
            id={tab.name}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tabs;
