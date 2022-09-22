import Footer from '../Footer/Footer'
import './Contact.css'
import Aos from "aos";
import React, { useEffect } from 'react';
import "aos/dist/aos.css";

function Contact() {
    useEffect(() => {
        Aos.init({ duration: 3000 });
      }, [])    
  return (
    <div>
    <div className="conbody">
      <div class="contact container">
        <form action="https://formspree.io/f/maykevpe" method="POST">
          <div class="form">
            <div class="form-txt">
              <h1 data-aos="zoom-in-right">Contact Us</h1>
              <span>As you might expect of a company that began as a high-end interiors contractor, we pay strict
                attention.</span>
              <h3 data-aos="zoom-in-right">USA</h3>
              <p>195 E Parker Square Dr, Parker, CO 801 +43 982-314-0958</p>
              <h3 data-aos="zoom-in-right">Los Angeles</h3>
              <p>Palo Alto 12234 || newel Road</p>
            </div>
            <div class="form-details">
              <input type="text" name="name" id="name" placeholder="Name" required  data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="1000"/>
                <input type="email" name="email" id="email" placeholder="Email" required data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="2000"/>
                  <textarea name="message" id="message" cols="52" rows="7" placeholder="Message" required data-aos="fade-left"
                  data-aos-anchor="#example-anchor"
                  data-aos-offset="500"
                  data-aos-duration="3000"></textarea>
                  <button class="mybtn conbtn" data-aos="fade-left"
                  data-aos-anchor="#example-anchor"
                  data-aos-offset="500"
                  data-aos-duration="500">SEND MESSAGE</button>
                  </div>
            </div>
        </form>
      </div>
      <Footer />
      </div>
    </div>
  )
}

export default Contact