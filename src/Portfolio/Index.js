import React from 'react'
import '../Portfolio/Index.css'
import Header from '../Header/Header'
import Image from '../Images/intro-section-illustration.png'
import Resume from '../resume/Nithish Kumar - CV.pdf'
import Nafter from '../Images/Group_34-removebg-preview.png'
import Knackbay from '../Images/Group_21-removebg-preview 1.png'
import Men from '../Images/man-removebg-preview.png'
import UI from '../Images/UI.png'
import WD from '../Images/Web Development.png'
import Ecom from '../Images/E-Com.png'
import Person1 from '../Images/person1.jpeg'
import Person2 from '../Images/person2.jpg'
import Star from '../Images/rating.png'
import Contact from '../Contact/Contact'

function portfolio () {
    return(
        <div className='Portfolio'>
          <Header/>
          <div className='profile'>
            <div className='container'>
              <div className='contant'>
                <h1><span>Hi!</span>
                <span>I'm Nithish Kumar</span>
                <span>Front-end Developer</span>
                </h1>
                <p>Experienced front-end developer specializing in creating responsive, user-friendly
                   interfaces with HTML, CSS, and JavaScript. Proficient in modern frameworks like React,
                   dedicated to optimizing performance and usability.
                </p>
                <div>
                <a  className='CV-button' target='blank'  href={Resume} download>Download CV</a>
              </div>
              </div>
              <div className='image'>
                <img src={Image} />
              </div>
            </div>

          </div>

          <div className='about-us'>
            <div className='men'>
              <img src={Men}/>
            </div>

            <div className='about-contant'>
              <p>Who Am I ?</p>
              <h3>About Me</h3>
              <p>  Experienced Front-End Developer proficient in HTML5, CSS3, 
                and JavaScript/ES6+. Skilled in React.js for building 
                responsive and dynamic web applications. Strong background in UI/UX 
                design principles, ensuring intuitive user experiences. Expertise in 
                cross-browser compatibility, performance optimization, and version control (Git). 
                Dedicated to delivering clean, efficient code and collaborating effectively in Agile 
                environments. Passionate about leveraging technology to create compelling digital 
                experiences that align with business goals.</p>
                
            </div>

        </div>

        <div className='Hireing'>
              <div className='hire-contant'>
                <h3>want to work with me?</h3>
                <p>Always feel Free to contact & Hire me</p>
              </div>
              <div className='hire-button'>
                <button>Hire Me</button>
              </div>

            </div>

          <div className='skills'>
            <p>What I Do?</p>
            <h1>Service</h1>
              <div className='user'>
              <div className='user-image'>
                <img src={UI}/>
              </div>
              <div className='user-contant'>
                <h2>UI/UX Design</h2>
                <p>We specialize in creating intuitive interfaces that blend functionality 
                  with aesthetic appeal. Our portfolios showcase seamless user experiences 
                  crafted through meticulous research and innovative design solutions.
                   From wireframes to interactive prototypes, we bring your vision to life 
                   with precision and creativity. Transform your ideas into compelling digital 
                   journeys that captivate and convert.
                </p>
                <button>Learn More</button>
              </div>

              </div>
              <div className='Web-Development'>
              <div className='wd-contant'>
                <h2>Web Development</h2>
                <p>Our web development service specializes in crafting responsive and intuitive websites 
                  using React.js and JavaScript. We blend modern design aesthetics with robust backend 
                  solutions to ensure optimal performance. From custom CMS implementations to dynamic 
                  e-commerce platforms, our solutions are tailored to meet your business objectives. 
                  Elevate your online presence with websites that not only look great but also deliver 
                  seamless user experiences. Harness the power of React.js and JavaScript to engage your 
                  audience and drive business growth effectively.</p>
                <button>Learn More</button>
              </div>

              <div className='wd-image'>
                <img src={WD}/>
              </div>

              </div>
              <div className='E-com'>
              <div className='E-image'>
                <img src={Ecom}/>
              </div>
              <div className='E-contant'>
                <h2>Wordpress Website</h2>
                <p>Explore our WordPress portfolio service, specializing in custom themes and plugins 
                  that enhance your online presence. We create dynamic websites optimized for user experience 
                  and search engine visibility. Our expertise includes e-commerce integration, content 
                  management solutions, and responsive design. Elevate your brand with a WordPress site 
                  that combines aesthetics with functionality, tailored to your business goals. Discover 
                  how we can transform your ideas into a powerful digital presence.</p>
                <button>Learn More</button>
              </div>

              </div>
           
          </div>

          <div className='Companey'>
            <h1>Company</h1>
            <div className='company-logo'>
            <img src={Nafter}/>
            <img src={Knackbay}/>
            </div>
          </div>

          <div className='Testimonial'>
            <h1>Testimonial</h1>
            <h3>What our clients are saying</h3>
          
            <div className='quotes'>
              <p>"I'm impressed by how seamlessly your code integrates with the backend functionalities.
                 The way you've structured everything ensures both efficiency and maintainability. 
                 Keep up the excellent work!"</p>
              <img src={Star} />
              </div>
              <div className='profile-contant'>
                <img src={Person1} />
              </div>
              <h2>Uhuru Kenyatta</h2>
            
              {/* <div className='quotes'>
              <p>"Your innovative approach to incorporating new technologies has really paid off here. 
                The interactive elements you've implemented add a dynamic layer that engages users from 
                the moment they interact. Well done!"</p>
              <img src={Star}  />
              </div> 
              <div className='profile-contant'>
                <img src={Person2} />
              </div>
              <h2>ClaireBelle Zawadi</h2> */}
              
            </div>

            <Contact/>

            <div className='Footer'>
              <p>Copyright 2024 © </p>

            </div>

          </div>

    )
}

export default portfolio;