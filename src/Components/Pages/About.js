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


     
      <div class="container container-2 py-5">
        <div class="row py-4 g-3 ">
          <div class="col-12 col-lg-6  ">
            <h1>Things we do 1</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nulla sequi sit a quidem animi placeat incidunt eveniet ratione voluptas aspernatur delectus excepturi perspiciatis, hic labore eligendi quod! Culpa animi quaerat accusantium sapiente eius earum, temporibus mollitia in rerum nam error laborum illo maiores, numquam nobis similique architecto dolor saepe?</p>
          </div>
          <div class="col-12 col-lg-6">
            <img class="img-fluid" src="sec2.jpg" width="500px" />
          </div>
        </div>
        <div class="row py-4">
          <div class="col-12 col-lg-6">
          <img class="img-fluid" src="sec1.jpg" width="500px" />
          </div>
          <div class="col-12 col-lg-6 ">
            <h1>Things we do 2</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nulla sequi sit a quidem animi placeat incidunt eveniet ratione voluptas aspernatur delectus excepturi perspiciatis, hic labore eligendi quod! Culpa animi quaerat accusantium sapiente eius earum, temporibus mollitia in rerum nam error laborum illo maiores, numquam nobis similique architecto dolor saepe?</p>
          </div>
        </div>

        <div class="row py-4">
          <div class="col-12 col-lg-6 ">
            <h1>Things we do 3</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nulla sequi sit a quidem animi placeat incidunt eveniet ratione voluptas aspernatur delectus excepturi perspiciatis, hic labore eligendi quod! Culpa animi quaerat accusantium sapiente eius earum, temporibus mollitia in rerum nam error laborum illo maiores, numquam nobis similique architecto dolor saepe?</p>
          </div>
          <div class="col-12 col-lg-6">
          <img class="img-fluid" src="sec1.jpg" width="500px" />
          </div>
        </div>

        <div class="row py-4">
          <div class="col-12 col-lg-6">
          <img class="img-fluid" src="sec2.jpg" width="500px" />
          </div>
          <div class="col-12 col-lg-6"><div class="content">

            <h1>Things we do 4</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nulla sequi sit a quidem animi placeat incidunt eveniet ratione voluptas aspernatur delectus excepturi perspiciatis, hic labore eligendi quod! Culpa animi quaerat accusantium sapiente eius earum, temporibus mollitia in rerum nam error laborum illo maiores, numquam nobis similique architecto dolor saepe?</p>
          </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About