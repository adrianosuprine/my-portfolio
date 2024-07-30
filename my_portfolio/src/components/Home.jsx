import React from 'react'
import '../CSS/home.css';
import linkedin from '../assets/linkedin-svg.svg'
import github from '../assets/github-svg.svg'
import linkedinDark from '../assets/linkedin-dark-rounded.png';
import githubDark from '../assets/github-dark.png';
import resume from '../assets/SUPRINE ADRIANO.N.pdf'
function Home (){

    const handleDownload = () => {
        window.open(resume, '_blank', 'noopener,noreferrer');
      }
    return (
        <>
            <div className='home'>
            <div className='dev'>
                <h5 id='hello'>Hello, I'm</h5>
                <h2 className='name'>Adriano Suprine </h2>
        <h5 id="SOD">Fullstack Developer | Data Analyst </h5>
        <p>I'm Adriano Suprine, a passionate full-stack developer with a passion for<br/>
        crafting innovative digital solutions.<br/>
        I have had the privilege of working on a diverse range of projects,<br/>
        honing my skills in both front-end and back-end development.
        </p>
        <button className='resume-btn' onClick={handleDownload}>My Resume</button>
        <div className="socials">
            <img src={linkedinDark} alt="linkedin" onClick={() => window.open('https://www.linkedin.com/in/adrianosuprine/', "_blank", "noopener,noreferrer")}/>
            <img src={githubDark} alt="github" onClick={() => window.open('https://github.com/adrianosuprine', "_blank", "noopener,noreferrer")} />
        </div>
            </div>
            <div className='profile-container'>
                <img src="src/assets/profile1.jpeg" alt="Profile Picture" class="profile-picture"></img>
                
            </div>
            </div>
        </>

    );
}
export default Home;