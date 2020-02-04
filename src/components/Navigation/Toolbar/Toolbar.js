import React from 'react';
import './Toolbar.css';
import "../../Logo/Logo.css";
import Logo from '../../../components/Logo/Logo.js';
import NavigationItems from '../NavigationItems/NavigationItems.js';

const toolbar = (props) => {
    return (
        <header className = "Toolbar">
            <div>MENU</div>
            <div className = "Logo">
                <Logo />
            </div>
            
            <nav>
                <NavigationItems/>
            </nav>
        </header>
    )

}

export default toolbar;