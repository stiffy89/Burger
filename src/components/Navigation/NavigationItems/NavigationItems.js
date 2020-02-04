import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem.js';
import './NavigationItems.css';

const navigationItems = () => {

    return (
        <ul className = "NavigationItems">
            <NavigationItem link="/" active>Burger Builder</NavigationItem>
            <NavigationItem link="/">Checkout</NavigationItem>
            
        </ul>
    )

}

export default navigationItems;