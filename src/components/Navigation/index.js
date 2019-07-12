import React from "react";
import "./index.scss";
import {useSpring } from "react-spring";
import logo from './assets/logo.png'

const Navigation = () => {

    const InitialNavBar = useSpring({
        to: {opacity: 1},
        config: {duration: 3000},
        delay: {duration: 2000}
    });

    return (
        <div style={InitialNavBar} className="navigation-container">
            <div className='left'>
                <img className='logo' src={logo} alt='logo'/>
            </div>
            <div className='right'>
                <p  className='navigation-items'>Company</p>
                <p className='navigation-items'>Features</p>
                <p className='navigation-items'>Contact</p>
                <button className='register-button'>Register</button>
            </div>
        </div>
    );
};

export default Navigation;
