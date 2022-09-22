import React, { useEffect } from 'react';
import './Showcase.css'
import Aos from "aos";
import "aos/dist/aos.css";



export const Showcase = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, [])
    
    return (
        <div className='Showcase'>
            <h1>
                <style>{'body { background-color: var(--primary-color); }'}</style>
            </h1>
            <h1 data-aos="fade-up-right">MANAGE YOUR HOME WITH </h1>
            <h1>SMART HOME TECHNOLOGY</h1>


            <div className='cat-bar'>
                <div className='button-group'>
                <div class="share">
                <a href="#">Location</a>
                <div>
                  <ul>
                    <li><a href="#">New York</a></li>
                    <li><a href="#">California</a></li>
                    <li><a href="#">Boston</a></li>
                  </ul>
                </div>
              </div>
              
              <div class="share orange">
                <a href="#">Type</a>
                <div>
                  <ul>
                    <li><a href="#">Smart Table</a></li>
                    <li><a href="#">Smart Mirror</a></li>
                    <li><a href="#">Office Table</a></li>
                  </ul>
                </div>
              </div>
              
              <div class="share yellow">
                <a href="#">Design</a>
                <div>
                  <ul>
                    <li><a href="#">Demo</a></li>
                    <li><a href="#">Demo</a></li>
                    <li><a href="#">Demo</a></li>
                  </ul>
                </div>
              </div>
              
              <div class="share">
                <a href="#">Price Range</a>
                <div>
                  <ul>
                    <li><a href="#">$500 - $1k</a></li>
                    <li><a href="#">$1k - $2k</a></li>
                    <li><a href="#">$2k - $5k</a></li>
                  </ul>
                </div>
              </div>     
              <button className='mybtn show-btn'>Search</button>          
                </div>
            </div>



            <div className='Showcase-img'>
                <img src='Showcase.jpg' width="500px" />
            </div>

        </div>
    )
}

export default Showcase;