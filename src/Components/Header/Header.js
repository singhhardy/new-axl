import React from 'react';
import './Header.css'

function Header() {
    return (
        <div className='head-comp'>
            <header>
                <div class="nav nav-box-shadow">
                    <input type="checkbox" id="nav-check"></input>
                    <div class="nav-header">
                        <div class="nav-title">
                            <img src="Axllogo.png" class="navbar-brand-img" alt="Logo" />
                        </div>
                    </div>
                    <div class="nav-btn">
                        <label for="nav-check">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    </div>
                    <div class="nav-items">
                        <a href="/">Home</a>
                        <a href="/About">About</a>
                        <a href="/Contact">Contact</a>
                        <a href="/Cart"><button className='log-btn'>Login/Signup</button></a>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header