import React from 'react';
import Auxiliary from '../../hoc/Auxiliary.js';
import Toolbar from '../Navigation/Toolbar/Toolbar.js';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer.js';
import './Layout.css';

const layout = (props) => {
    return (
        <Auxiliary>
            <Toolbar/>
            <SideDrawer/>
            <main className = "Content">
                {props.children}
            </main>
        </Auxiliary>
    )  
};

export default layout;