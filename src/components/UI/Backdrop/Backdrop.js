import React from 'react';
import OrderSummary from '../../Burger/OrderSummary/OrderSummary.js';
import BurgerBuilder from '../../../containers/BurgerBuilder/BurgerBuilder.js';

import './Backdrop.css';
import { tsPropertySignature } from '@babel/types';
import orderSummary from '../../Burger/OrderSummary/OrderSummary.js';

const backdrop = (props) => {

    let showOrderSummary = null;
    
    if (props.show){
        showOrderSummary = 
        <div 
            className="Modal"
            style = {{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            
                <OrderSummary 
                ingredients = {props.ingredients}
                purchaseCancelled = {props.purchaseCancelled}
                purchaseContinued = {props.purchaseContinued}
                price = {props.price}
                />
        </div>
    }

    if (props.show)
    {
        return (
            <div className = "Backdrop" onClick = {props.backDropClicked}>
                    {showOrderSummary}
            </div>
        )
    }

    else if (props.showSideDraw) 
    {
        return (
            <div className = "Backdrop" onClick = {props.backDropClicked}>
                    {showOrderSummary}
            </div>
        )
    }

    else{
        return null;
    }
};

export default backdrop;