import logo from './meni rasm.png';
import './App.css';
import 'remixicon/fonts/remixicon.css';

function App() {


  return (
    <div className="App">
      <header className="App-header">
          <div class="about">
            
            <img src="./meni rasm.png" alt=""/>
            <h1 >I am creating a website.</h1>
            <h1 class="h_1">delights and pleases <br/> people.</h1>
            <p>Hi! I’m Jake, a product designer based in Berlin. I create <br/> user-friendly interfaces for fast-growing startups.</p>
            <button class="btn1" >Book a call</button>
            <button class="btn2" >Download CV <i class="ri-arrow-right-line"></i> </button>

            

          </div>
          
            <div class="trusted">
            <p id="h3">Trusted by</p>
            <img src="./Frame.png" alt=""/>
            </div>
            <div class="services">
              <h3 >
                SERVICES
              </h3>
              <h1>A web developer who solves <br/> problems,  one program, one site.</h1>

              <div class="services_1">
              <img src="./icon1.png" alt=""/>
              <h2>What I can do for you</h2>
              <p>Faster, better products that your<br/> users love. Here's all the services<br/>I provide:</p>
              <ul>
                <li><b>Design strategy</b></li>
                <li> <b>Web and Mobile App Design</b> </li>
                <li><b>Front-end Developer</b></li>
              </ul>
              </div>
              <div class="services_2">
              <img src="./icon2.png" alt=""/>
              <h2>Applications I'm fluent in</h2>
              <p>Every designer needs the right tools <br/> to do the perfect job. Thankfully,<br/> I'm multilingual.</p>
              <ul>
                <li><b>Sketch</b></li>
                <li> <b>Webflow</b> </li>
                <li><b>Figma</b></li>
              </ul>
              </div>
              <div class="services_3">
              <img src="./icon3.png" alt=""/>
              <h2>Clean and functional</h2>
              <p>I design products that are more<br/> than pretty. I make them shippable<br/> and usable.</p>
              <ul>
                  <li><b>Design strategy</b></li>
                  <li> <b>Device and user friendly</b> </li>
                  <li id="project"><b>Efficient and maintainable</b></li>
                </ul>
                </div>
              </div>
              <div class="projects">
                <h3>PROJECTS</h3>
                <h1>
                  I bring result.
                </h1>
                <button class="view">View all projects</button>
                <img src="./amalyotlar.png" alt=""/>
              </div>
              <div id="contact">
                <a href="mailto:polvonbekbaltabaev@gmail.com">polvonbekbaltabaev@gmail.com</a> <br/>
                <a href="tel:+998336562709">+998 33 656 27 09</a>

              </div>







          <div class="about_asos">
              <div class="about">
                <h2><b>Boltabaev Polvonbek</b></h2>
            <ul>
              <li>
                <a href=".about">About</a>

              <li>
                <a href="#h3">Services</a>
            </li>
            
              <li>
                 <a href="#project">Projects</a>
                 </li>
                 <li>
              <button class="contact_me">
                Contact Me
              </button>
            </li>
              
              
              </li>
            </ul>
              </div>
            </div>
      </header>

    </div>
    
  );
  
}


export default App;
