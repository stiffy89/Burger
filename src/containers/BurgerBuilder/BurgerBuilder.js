import React, {Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary.js';
import BuildControls from'../../components/Burger/BuildControls/BuildControls.js';
import Burger from '../../components/Burger/Burger.js';
import Modal from '../../components/UI/Modal/Modal.js';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary.js';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component {

    constructor (props) {
        super(props);
    }

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },

        totalPrice: 4,

        purchasable: false,

        purchasing: false
    }

    updatePurchaseState (ingredients) {

        let sum = 0;

        for (let key in ingredients)
        {

            if (ingredients[key] > 0)
            {
                sum += ingredients[key];
            }
        }

        if (sum > 0)
        {
            this.setState({purchasable: true});
        }
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        let updatedCount = oldCount - 1;
        if (updatedCount < 0)
        {
            updatedCount = 0;
        }
        
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler = () => {
        this.setState ({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState ({purchasing: false});
    }

    purchaseContinueHandler = () => {
        alert ("Continue");
    }

    render () {
        const disabledIngredients = {
            ...this.state.ingredients
        }

        for(let key in disabledIngredients) {
            if (disabledIngredients[key] <= 0)
            {
                disabledIngredients[key] = true;
            }
            else
            {
                disabledIngredients[key] = false;
            }
        }

        return (

            <Auxiliary>
                <Modal 
                    show={this.state.purchasing} 
                    modalClosed = {this.purchaseCancelHandler} 
                    ingredients = {this.state.ingredients}
                    purchaseContinued = {this.purchaseContinueHandler}
                    purchaseCancelled = {this.purchaseCancelHandler}
                    price = {this.state.totalPrice}
                    >
                </Modal>
                {/*first we want to create the GUI for the burger*/}
                <Burger ingredients = {this.state.ingredients}>
                    
                </Burger>

                {/*next, we want to create something for the build controls*/}
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientsRemoved = {this.removeIngredientHandler}
                    disabled={disabledIngredients}
                    price={this.state.totalPrice}
                    orderNow = {this.purchaseHandler}
                    purchasable ={this.state.purchasable}  />
            </Auxiliary>
            
        );
    }
}

export default BurgerBuilder;