import React from 'react';
import close from '../assets/images/icon-close.svg';
import hamburger from '../assets/images/icon-hamburger.svg';
import logo from '../assets/images/logo.svg';

import './NavBar.css';

const NavBar = ( props ) => {

    const [showMenu, setShowMenu] = React.useState(false);
    
    window.addEventListener('resize', () =>{
        let mqlist = window.matchMedia('(min-width:400px');
        if(mqlist.matches)
            setShowMenu(true);
        else
            setShowMenu(false);
    });

    
    return (
        <div className='nav'>
            <div className='mobile-container'>
                <img src={logo} alt='logo' className='logo' />
                {
                    (showMenu === false) ?
                    <img 
                        src={hamburger} 
                        alt='hamburger-menu' 
                        className='hamburger'
                        onClick={() => setShowMenu(!showMenu)}
                    />
                    :
                    null
                }

                {
                    showMenu ?
                        <img
                            src={close} 
                            alt='close-icon' 
                            className='close'
                            onClick={ () => setShowMenu(!showMenu)}
                        />
                        :
                        null
                }

                {
                (showMenu) ?
                    <div className='menu-container' >
                        <ul className='barlow-condensed'>
                            <li>Product</li>
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>Login</li>
                        </ul>
                    </div> 
                    :
                    null
                }

            </div>
        </div>
    );
};

export {NavBar};