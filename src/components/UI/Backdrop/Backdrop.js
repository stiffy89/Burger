import React from 'react';
import OrderSummary from '../../Burger/OrderSummary/OrderSummary.js';

import './Backdrop.css';

const backdrop = (props) => {

    if (props.show)
    {
        return (
            <div className = "Backdrop" onClick = {props.backDropClicked}>
                    <div 
                        className="Modal"
                        style = {{
                            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                            opacity: props.show ? '1' : '0'
                        }}>
                        
                            <OrderSummary ingredients = {props.ingredients}/>
                    </div>
            </div>
        )
    }
    else{
        return null;
    }
};

export default backdrop;