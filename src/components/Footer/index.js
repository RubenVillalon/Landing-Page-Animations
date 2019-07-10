import React from 'react';
import facebook from './assets/facebook.svg'
import twitter from './assets/twitter.svg'
import linkedIn from './assets/linkedin.svg'
import instagram from './assets/instagram.svg'
import './index.scss'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='left'>
                Research
            </div>
            <div>
                ©Propulsion Academy. All rights reserved
            </div>

            <div className='right'>
                <p>Connect</p>
                <img className='icon' src={facebook} alt='facebook'/>
                <img className='icon' src={twitter} alt='twitter'/>
                <img className='icon' src={linkedIn} alt='linkedIn'/>
                <img className='icon' src={instagram} alt='instagram'/>
            </div>

        </div>
    );
};

export default Footer;