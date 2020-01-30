import React from 'react';
import './Burger.css';
import Ingredient from './Ingredients/Ingredients.js';

const burger = (props) => {
    return (
        <div className = "Burger">
            <Ingredient type="bread-top" />
            <Ingredient type="salad"/>
            <Ingredient type="cheese" />
            <Ingredient type="meat" />
            <Ingredient type="bread-bottom" />
        </div>
    );
};

export default burger;