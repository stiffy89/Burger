import React, {Component} from 'react';
import Auxiliary from '../../../hoc/Auxiliary.js';
import Button from '../../UI/Button/Button.js';

class OrderSummary extends Component {

    render () {

        console.log("order summary image");

        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span> : {this.props.ingredients[igKey]} </li>
        });
    
        return (
            <Auxiliary>
                <h3>Your Order</h3>
                <p>Current Ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p>Total Price: {this.props.price}</p>
                <p>Continue to Checkout?</p>
                <Button buttonType = "Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button buttonType = "Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Auxiliary>
        )
    }
}

export default OrderSummary;