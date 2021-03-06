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
            <Backdrop 
                show = {props.show} 
                backDropClicked={props.modalClosed} 
                closeSideDraw ={props.closeSideDraw}
                ingredients = {props.ingredients}
                purchaseCancelled = {props.purchaseCancelled}
                purchaseContinued = {props.purchaseContinued}
                price = {props.price}
                showSideDraw = {props.showSideDraw}
                >
                
            </Backdrop>

    )
};

export default modal;