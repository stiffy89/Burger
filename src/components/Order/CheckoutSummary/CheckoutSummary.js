import React from 'react';
import Burger from'../../Burger/Burger.js';
import Button from '../../UI/Button/Button.js';
import './CheckoutSummary.css';

const CheckoutSummary = (props) => {

    return (
        <div className = "CheckoutSummary">
            <h1>We hope it tastes well</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients= {props.ingredients}/>
            </div>

            <Button 
                buttonType = "Danger"
                clicked = {props.checkoutCancelled}
            >Cancel
            </Button>

            <Button 
                buttonType = "Success"
                clicked = {props.checkoutContinued}
            >Continue</Button>
        </div>
        

    )

}

export default CheckoutSummary;