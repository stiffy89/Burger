import React from 'react';
import NavigationItems from '../NavigationItems';

import './NavigationItem.css';

const navigationItem = (props) => {

    return (
        <ul>
            <li className = "NavigationItem">
                <a 
                    href={props.link}
                    className = {props.active ? "active" : null}
                >
                    {props.children}
                </a>
            </li>
        </ul>
    )

}

export default navigationItem;
