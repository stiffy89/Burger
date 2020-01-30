import React from 'react';
import Auxiliary from '../../hoc/Auxiliary.js';
import './Layout.css';

const layout = (props) => {
    return (
        <Auxiliary>
            <div>Toolbar, SideDrawer, Backdrop</div>
            <main className = "Content">
                {props.children}
            </main>
        </Auxiliary>
    )  
};

export default layout;