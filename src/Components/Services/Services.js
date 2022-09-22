import React, { useEffect } from 'react';
import './Services.css'
import Aos from "aos";
import "aos/dist/aos.css";


function Services() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
      }, [])
    
    return (
        <div className='services-section'>
        <div class="container">

        <div class="row text-center test-head">
            <h1>Real stories from real customers</h1>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora saepe fugiat maxime, eum in dicta?</p>
        </div>




        <div class="row g-5">

            <div class="col-12 col-lg-6">

                <div class="card">

                    <div class="card-body" >
                        <i class="fa-solid fa-quote-left"></i>
                        <p class="card-text">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis neque commodi soluta aut eum
                            ipsam beatae voluptates illum? Dicta, alias ipsa. Quae quibusdam est mollitia!
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis neque commodi soluta aut eum
                            ipsam beatae voluptates illum? Dicta, alias ipsa. Quae quibusdam est mollitia!
                        </p>

                        <div class="container-cus">

                            <div class="cus-img">
                                <img src="user.png" width="50px" />
                            </div>

                            <div class="customer-content">
                                <h6>Customer Name</h6>
                                <small class="text-muted">Customer Address</small>
                            </div>

                        </div>

                    </div>

                </div>

            </div>




            <div class="col-12 col-lg-6">
                <div class="card">
                    <div class="card-body">
                        <i class="fa-solid fa-quote-left"></i>
                        <p class="card-text">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis neque commodi soluta aut eum
                            ipsam beatae voluptates illum? Dicta, alias ipsa. Quae quibusdam est mollitia!
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis neque commodi soluta aut eum
                            ipsam beatae voluptates illum? Dicta, alias ipsa. Quae quibusdam est mollitia!
                        </p>
                        <div class="container-cus">
                            <div class="cus-img">
                                <img src="user.png" width="50px" />
                            </div>
                            <div class="customer-content">
                                <h6>Customer Name</h6>
                                <small class="text-muted">Customer Address</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
        </div>
    )
}

export default Services