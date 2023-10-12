import React from 'react';
import './header.css';
import './Slider.css';
const MenuBar = () => {
    return (
        <div className="menu-bar">
            <ul>
                <li className="logo-company">
                    <div className="logo">
                        <img src="/icons8-music-48.png" alt="Company Logo" />
                    </div>
                    <div className="company-name">
                        <h1>M&L</h1>
                    </div>
                </li>
                <li className='Func' ><a href="/">Home</a></li>
                <li className='Func' ><a href="/songs">Song</a></li>
                <li className='Func' ><a href="/about">About us</a></li>
                <li className='Func' ><a href="/contact">Contact</a></li>

            </ul>
            <li className='Login'><a href='/Login'>Log in</a></li>
            <li className='Signin'><a href='/Signin'>Sign in</a></li>
        </div>
    );
}

export default MenuBar;