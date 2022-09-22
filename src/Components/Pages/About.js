import React from 'react'
import Footer from '../Footer/Footer'
import './About.css'

function About() {
  return (
    <div className='about-body'>

      <section class="showcase">
        <img src='Showcase.jpg' />
        <div class="overlay"></div>
        <div class="text">
          <h3>ABOUT US</h3>
          <p>At AXL Hub we use cutting edge technology built using Artificial Intelligence and Machine Learning. AXL is all in one console and your own personalized virtual assistant. The console is made in two configurations, Mirrors and Tables.  Different accessories
            will be offered to help transform your house or your office into a smart space</p>
        </div>
        {/* <ul class="social">
        <li><a href="https://www.instagram.com/visianistudios/" target="_blank"><img src="./ig.png" width="40px"></img></a></li>
        <li><a href="https://www.linkedin.com/in/visiani-studios-00828b235/"><img src="./linkedin.png" width="55px"></img></a></li>
        <li><a href="https://www.youtube.com/channel/UCGiqufRusa67eJ54Yeo09xg"><img src="./youtube.png" width="55px"></img></a></li>
        </ul> */}
      </section>

      <div className='about-content'>
        <div className='all-ab'>
          <div class="ab-right">
            <div class="ab1">
              <h1>THIS IS A HEADING</h1>
              <p>At AXL Hub we use cutting edge technology built using Artificial Intelligence and Machine Learning. AXL is all in one console and your own personalized virtual assistant. The console is made in two configurations, Mirrors and Tables.  Different accessories
                will be offered to help transform your house or your office into a smart space</p>
                <p>At AXL Hub we use cutting edge technology built using Artificial Intelligence and Machine Learning. AXL is all in one console and your own personalized virtual assistant. The console is made in two configurations, Mirrors and Tables.  Different accessories
                will be offered to help transform your house or your office into a smart space</p>
                <button className='mybtn'>Request Call</button>
                <a href='#'>Learn more <i class="fa-solid fa-arrow-right"></i></a>
      
            </div>
            <div className='ab-img'>
              <img src='sec2.jpg' width="400px"></img>
            </div>
          </div>

          <div class="ab-left">
          <div className='ab-img'>
          <img src='sec1.jpg' width="400px"></img>
        </div>
            <div class="ab2">
              <h1>THIS IS A HEADING</h1>
              <p>At AXL Hub we use cutting edge technology built using Artificial Intelligence and Machine Learning. AXL is all in one console and your own personalized virtual assistant. The console is made in two configurations, Mirrors and Tables.  Different accessories
                will be offered to help transform your house or your office into a smart space</p>
                <p>At AXL Hub we use cutting edge technology built using Artificial Intelligence and Machine Learning. AXL is all in one console and your own personalized virtual assistant. The console is made in two configurations, Mirrors and Tables.  Different accessories
                will be offered to help transform your house or your office into a smart space</p>
                <button className='mybtn'>Request Call</button>
                <a href='#'>Learn more <i class="fa-solid fa-arrow-right"></i></a>
      
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default About