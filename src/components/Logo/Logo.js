import React from 'react';
import burgerLogo from '../../assets/Images/burger-logo.png';
import './Logo.css';

const logo = (props) => {
    return (
        <div className = "Logo" style={{height: "height"}}>
            <img src={burgerLogo} alt="MyBurger">
            </img>
        </div>
    )
}

export default logo;