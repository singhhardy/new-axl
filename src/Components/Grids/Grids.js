import React, { useEffect } from 'react';
import './Grids.css';
import Aos from "aos";
import "aos/dist/aos.css";

function Grids() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])
    return (
        <div className='Gridi'>
        <h1>OUR MAIN SERVICES</h1>
        <p>These are our services check the fuck out</p>
        <div className='Grids'>
            <div className='grido' >
                <h1><i class="fa-regular fa-lightbulb"></i></h1>
                <h1>HEADING</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis neque commodi soluta aut eum ipsam beatae</p>
            </div>
            <div className='grido' >
                <h1><i class="fa-solid fa-phone-volume"></i></h1>
                <h1>HEADING</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis neque commodi soluta aut eum ipsam beatae</p>
            </div>
            <div className='grido'>
                <h1><i class="fa-sharp fa-solid fa-microphone"></i></h1>
                <h1>HEADING</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis neque commodi soluta aut eum ipsam beatae</p>
            </div>
            <div className='grido' >
                <h1><i class="fa-sharp fa-solid fa-user-plus"></i></h1>
                <h1>HEADING</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis neque commodi soluta aut eum ipsam beatae</p>
            </div>
            <div className='grido'>
                <h1><i class="fa-solid fa-star"></i></h1>
                <h1>HEADING</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis neque commodi soluta aut eum ipsam beatae</p>
            </div>
            <div className='grido'>
                <h1><i class="fa-solid fa-check"></i></h1>
                <h1>HEADING</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis neque commodi soluta aut eum ipsam beatae</p>
            </div>
            </div>
        </div>
    )
}

export default Grids