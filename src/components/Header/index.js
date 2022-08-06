import React, { useState, useContext } from 'react';
import logo from '../../images/logo.png';
import { IconMinicart } from './components/IconMinicart'
import ShoppingCart from '../Cart';

import './styles.css';

function Header() {
    return (
        <header className='container-header'>
            <div className='header-content'>
                <div className='header-content-logo'>
                    <img className="logo-pokemon" src={logo} alt="logo-pokemon" />
                    
                    {/* <button>
                        <IconMinicart />
                    </button> */}

                </div>
            </div>
            <ShoppingCart />

        </header>
    );
}

export default Header;