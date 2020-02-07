import React , {Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary.js';
import Toolbar from '../Navigation/Toolbar/Toolbar.js';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer.js';
import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder.js';

import './Layout.css';

class Layout extends Component {


    render () {
        return (
            <Auxiliary>
                <Toolbar menuClicked = {this.props.menuClicked}/>
                <SideDrawer open = {this.props.open} closed = {this.props.sideDrawClose}/>
                <main className = "Content">
                    {this.props.children}
                </main>
            </Auxiliary>
        )  
    }
};

export default Layout;