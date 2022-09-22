import React, { useEffect } from 'react';
import './Sections.css';
import Aos from "aos";
import "aos/dist/aos.css";


function Sections() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  return (
    <div className='Sections'>
      <div className='Sec1'>
        <div className='sec1-content' >
          <h1>THIS IS SECTION ONE</h1>
          <p>Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Quis neque commodi soluta aut
            eum ipsam beatae voluptates illum? Dicta, alias ipsa.
            Quae quibusdam est mollitia! Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Quis neque commodi soluta aut eum ipsam beatae voluptates illum? Dicta, alias ipsa. Quae quibusdam est mollitia!</p>
          <p>Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Quis neque commodi soluta aut
            eum ipsam beatae voluptates illum? Dicta, alias ipsa.
            Quae quibusdam est mollitia! Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Quis neque commodi soluta aut eum ipsam beatae voluptates illum? Dicta, alias ipsa. Quae quibusdam est mollitia!</p>
          <button className='mybtn'>Request Call</button>
          <a href='#'>Learn more <i class="fa-solid fa-arrow-right"></i></a>
        </div>
        <div className='sec1-img'>
          <img src='sec1.jpg' width="400px" />
        </div>
      </div>

      <div className='Sec2'>
        <div className='sec1-img' >
          <img src='sec2.jpg' width="400px" />
        </div>
        <div className='sec1-content'>
          <h1>THIS IS SECTION TWO</h1>
          <p>Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Quis neque commodi soluta aut
            eum ipsam beatae voluptates illum? Dicta, alias ipsa.
            Quae quibusdam est mollitia! Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Quis neque commodi soluta aut eum ipsam beatae voluptates illum? Dicta, alias ipsa. Quae quibusdam est mollitia!</p>
          <p>Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Quis neque commodi soluta aut
            eum ipsam beatae voluptates illum? Dicta, alias ipsa.
            Quae quibusdam est mollitia! Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Quis neque commodi soluta aut eum ipsam beatae voluptates illum? Dicta,
            alias ipsa. Quae quibusdam est mollitia!</p>
          <button className='mybtn'>Request Call</button>
          <a href='#'>Learn more <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>

    </div>
  )
}

export default Sections