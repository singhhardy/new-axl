import React from 'react'
import './brands.css'

function Brands() {
    return (
        <div>
            <div class="container brands g-5">
                <div class="row mx-0 ">
                    <h1>
                        OUR INCREDIBLE PARTNERS
                    </h1>
                    <small>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur!
                    </small>
                </div>
                <div class="row  py-5 g-5 partners" >
                    <div class="col-6 col-lg-3">
                        <img class="part-img" src="mc.png" />
                    </div>

                    <div class="col-6 col-lg-3">
                        <img class="part-img" src="temp.png" />
                    </div>

                    <div class="col-6 col-lg-3">
                        <img class="part-img" src="dish.png" />
                    </div>

                    <div class="col-6 col-lg-3">
                        <img class="part-img" src="gclogo.png" />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Brands