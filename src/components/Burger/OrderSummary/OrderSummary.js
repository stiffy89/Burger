import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary.js';
import Button from '../../UI/Button/Button.js';

const orderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]} </li>
    });

    return (
        <Auxiliary>
            <h3>Your Order</h3>
            <p>Current Ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Total Price: {props.price}</p>
            <p>Continue to Checkout?</p>
            <Button buttonType = "Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button buttonType = "Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Auxiliary>
    )

};

export default orderSummary;