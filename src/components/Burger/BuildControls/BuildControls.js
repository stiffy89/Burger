import React from 'react';
import './BuildControls.css';

import BuildControl from './BuildControl/BuildControl.js';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Meat', type: 'meat'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
];

const buildControls = (props) => {

    return (
        <div className = "BuildControls">
            {controls.map(ctrl => (
                <BuildControl key={ctrl.label} label={ctrl.label} />
            ))}
        </div>
    )
}

export default buildControls;