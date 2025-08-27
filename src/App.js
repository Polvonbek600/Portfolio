
import { useState } from 'react';
import logo from './meni rasm.png';
import no from './no stop.png';
import icon from './icon1.png';
import icon2 from './icon2.png';
import icon3 from './icon3.png';
import './App.css';

import 'remixicon/fonts/remixicon.css';

function App() {
  const [showContact, setShowContact] = useState(false);

const handleClick = () => {
    alert("Coming soon!")
  };
  return (
    <div className="App">
      <header className="App-header">
        
        
          <div className="about">
          <img src={logo} alt="" />
          <h3 className='name' >Boltabayev Polvonbek</h3>
          <h1>I am creating a website.</h1>
          <h1 className="h_1">That delights and pleases <br /> people.</h1>

          
          <div className="btn-group">
            <button className="btn1"><a href="tel:+998336562709">Book a call</a></button>
            <button className="btn2"><a href="./Polvonbek_CV.pdf" download>Download CV <i className="ri-arrow-right-line"></i></a>
              
            </button>
          
        </div>
        </div>
        
        <div className="about_asos">
          <div className="about">
            <h2><b>Boltabaev Polvonbek</b></h2>
            <ul>
              <li><a href="#div_about">
                About
                </a></li>
              <li><a href='#div3'>
                Trusted by
                </a></li>
              <li><a href='#div4'>
                Services</a>
                </li>
              <li><a href="#div_projects">Projects</a></li>
              <li>
                <button onClick={() => setShowContact(true)}>Contact Me</button>
              </li>
            </ul>
          </div>
        </div>
      </header>

      
      {showContact && (
        <div className="overlay">
          <div className="Contact_me">
            <button
              className="close-btn"
              onClick={() => setShowContact(false)}
            >
              ×
            </button>
            <img className='logo2' src="./logo2.png" alt="" />
            <h2>Contact Me</h2>
            <div className="contact-info">
              <p>
                <a href="mailto:polvonbekbaltabaev@gmail.com">
                  <b>Email:</b> polvonbekbaltabaev@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+998336562709">
                  <b>Tel:</b> +998336562709
                </a>
              </p>
              <p>
                <a href="https://github.com/Polvonbek600">
                  <b>Github:</b> Polvonbek600
                </a>
              </p>
            </div>
          </div>
        </div>
      )}

     <div id='div_about'>
        <h2 >About</h2>

        <p>
        <b>Education:</b><br />
        10th grade, Secondary School No. 4
      </p>
        
        <p>
        <b>Address:</b><br />
        Republic of Karakalpakstan, Turtkul district
      </p>

      

      

      <p>
        <b>Work Experience:</b><br />
        Creating web pages (HTML, CSS, JavaScript)
      </p>

      <p>
        <b>Duration:</b><br />
        
      </p>

      <p>
        <b>Skills:</b><br />
        <ul className="skills">
          <li>HTML, CSS, JavaScript</li>
          <li>Git, GitHub</li>
          <li>Figma</li>
          <li>Tailwind CSS</li>
          <li>Bootstrap</li>
          <li>Microsoft Word, Excel</li>
        </ul>
      </p>

      <p>
        <b>Languages:</b><br />
        Uzbek - Native;<br /> English - Intermediate
      </p>
      <p>
        <b>Objective:</b><br />
        To work as a Frontend Developer, contribute to the company's  <br id='div3' />success, and improve my professional skills.
      </p  >
     </div>
      
     
     <div id='div_trusted' >
        <h2 id='div4' >Trusted by</h2>
        <button onClick={handleClick}><img src={no} alt="" /></button>
     </div>
     <div id="div_services">
      <h2>Services</h2>
      <h1>Design that solves problems,<br/> one product at a time.</h1>
      {/* 1 */}
      <div className='services1'>
        <img className='icon1' src={icon} alt="" />
        <h3>What I can do for you</h3>
        <p>Faster, better websites that your<br/> users will love. Here are all <br/> the services I offer:</p>
        <ul>
          <li><b>Design Strategy</b></li>
          <li><b>Web and Mobile App Design</b></li>
          <li><b>Front-end Development</b></li>
        </ul>
      </div>
      {/* 2 */}
      <div className='services2'>
        <img className='icon1' src={icon2} alt="" />
        <h3>Applications I'm fluent in</h3>
        <p>Every designer needs the right <br/> tools to do a great job. Every<br/>  website needs the right tools to<br/>  do a great job. Luckily, I know<br/>  a little English.</p>
        <ul>
          <li><b>Sketch</b></li>
          <li><b>Figma</b></li>
          
        </ul>
      </div>
      {/* 3 */}
      <div className='services3'>
        <img className='icon1' src={icon3} alt="" />
        <h3>What you can expect</h3>
        <p>EI build good websites. I make <br/>them portable and usable.</p>
        <ul>
          <li><b>Device and user friendly</b></li>
          <li><b>Efficient and maintainable</b></li>
          <li><b>Clean and functional</b></li>
        </ul>
      </div>

      </div>
      <div id="div_projects">
        <h3>Projects 
        </h3>
        <b>I bring results.<br/>My clients are proof.</b>
        <button className="btn3"  onClick={handleClick}>
             View all project
            </button>
            <button className='projects_btn2' onClick={handleClick}><img className='projects_img2'src={no} alt="" /></button>

      </div>
     </div>
     
    
  );
}

export default App;
