import React from 'react';
import './Burger.css';
import Ingredient from './Ingredients/Ingredients.js';

import { array } from 'prop-types';

const burger = (props) => {

    //this will return an array eg.[cheese, salad] of ingredients
    let selectedIngredients = Object.keys(props.ingredients).map(
        igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
               return <Ingredient key={igKey + i} type={igKey}/>});
                })
                //reduce will allow us to flatten out the array
                .reduce((prev, curr) => {
                    return prev.concat(curr)
                }, []);

    //now lets check if the length of this "flattened array" is 0 and if so, then 
    //lets display some info to the user

    if (selectedIngredients.length === 0)
    {
        selectedIngredients = (<div>
            Please add some ingredients to the burger!
        </div>)
    }

    return (
        <div className = "Burger">
            <Ingredient type="bread-top" />
            {selectedIngredients}
            <Ingredient type="bread-bottom" />
        </div>
    );
};

export default burger;