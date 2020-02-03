import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary.js';
import Backdrop from '../Backdrop/Backdrop.js';
import OrderSummary from '../../Burger/OrderSummary/OrderSummary.js';
import './Modal.css';

const modal = (props) => {
    return (
       /* <Auxiliary>
            <Backdrop show = {props.show} backDropClicked={props.modalClosed}>
                <div 
                    className="Modal"
                    style = {{
                        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: props.show ? '1' : '0'
                    }}>
                    <OrderSummary ingredients = {props.ingredients}/>
                </div>
            </Backdrop>
        </Auxiliary>*/
            <Backdrop show = {props.show} backDropClicked={props.modalClosed} ingredients = {props.ingredients}>
                
            </Backdrop>

    )
};

export default modal;