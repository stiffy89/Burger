import React, {Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary.js';
import BuildControls from'../../components/Burger/BuildControls/BuildControls.js';
import Burger from '../../components/Burger/Burger.js';

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }

    render () {
        return (

            <Auxiliary>
                {/*first we want to create the GUI for the burger*/}
                <Burger ingredients = {this.state.ingredients}>
                    
                </Burger>

                {/*next, we want to create something for the build controls*/}
                <BuildControls />
            </Auxiliary>
            
        );
    }
}

export default BurgerBuilder;