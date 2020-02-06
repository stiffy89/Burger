import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems.js';
import './sideDrawer.css';

const sideDrawer = (props) => {

    let attachedClasses = ["SideDrawer", "Close"];

    if (props.closed) {
        attachedClasses = ["SideDrawer", "Close"];
    }

    if (props.open) {
        attachedClasses = ["SideDrawer", "Open"];
    }

    return (
        <div className = {attachedClasses[0] + " " + attachedClasses[1]}>
                <div className = "Logo">
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
        
        </div>
    )
};

export default sideDrawer;

