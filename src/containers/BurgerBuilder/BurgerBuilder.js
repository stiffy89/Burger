import React, {Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary.js';

class BurgerBuilder extends Component {

    render () {
        return (

            <Auxiliary>
                {/*first we want to create the GUI for the burger*/}
                <div>
                    Burger
                </div>

                {/*next, we want to create something for the build controls*/}
                <div>
                    Build Controls
                </div>


            </Auxiliary>
            
        );
    }
}

export default BurgerBuilder;