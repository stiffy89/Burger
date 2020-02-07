import React from 'react';
import './Toolbar.css';
//import "../../Logo/Logo.css";
import Logo from '../../../components/Logo/Logo.js';
import NavigationItems from '../NavigationItems/NavigationItems.js';
import HamburgerIcon from '../../UI/HamburgerIcon/HamburgerIcon.js';

const toolbar = (props) => {
    return (
        <header className = "Toolbar">
            <div onClick = {props.menuClicked}>
                <HamburgerIcon/>
            </div>
            <div className = "Logo">
                <Logo />
            </div>
            
            <nav className = "DesktopOnly">
                <NavigationItems/>
            </nav>
        </header>
    )

}

export default toolbar;