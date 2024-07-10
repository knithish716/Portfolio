import React from "react";
import './Contact.css'

function contact (){
    return(

        <div className='Contact'>
              <div className='contact-input'>
                <p>How can you communicate?</p>
                <h2>Contact Me</h2>
                <div className="input-box">
                <input type="text" placeholder="Your Name"/>
                <input type="text" placeholder="Your Email"/>
                </div>
                <textarea className="message" type="text" placeholder="Write Something"></textarea>
                <div className="sub-btn">
                <button>Send Message</button>

                </div>

              </div>

            </div>
            
    )
}

export default contact