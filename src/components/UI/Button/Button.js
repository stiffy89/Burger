import React from 'react';
import './Button.css';

const button = (props) => {
    //these are all the various button components from the css class
    const classNames = ["Button", "Button:first-of-type", "Success", "Danger"];

    return (
        <button 
            className = {props.buttonType}
            onClick = {props.clicked}>
            {props.children}
        </button>
    )

}

export default button;