import '../CSS/about.css'
import Tabs from './Tabs';
function About (){
    return (
        <section id="about">
         <div className="about-container">
             <div className="img-container">
             <img src="src/assets/gls-about.jpeg" alt="about-img" className='abt-pic'></img>
             </div>
             <div className="details-abt-container">
                <div className="about-me">
                    <h1 className='title'>About Me</h1>
                    <p className='aboutme'>With a background spanning web development and data analysis, 
                    I bring a diverse skill set tailored to meet the evolving demands of 
                    the digital landscape. I specialize in crafting visually appealing and 
                    user-centric interfaces while ensuring seamless functionality. 
                    I am driven by a passion for innovation and continuous learning, 
                    and I am excited to leverage my skills to make meaningful contributions
                    in the ever-evolving world of technology.</p>
                    <div className="tabs-section">
                        <Tabs/>
                    </div>
                </div>
                    
             </div>
             
             
         </div>
        </section>
        
    );
}
export default About;