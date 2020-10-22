import React from 'react';

export default props => {
    const number = Math.random() * (props.maxValue - props.minValue)
    return (
        <div>
            <h1>Valor aleatório</h1>
            <p>Valor mínimo: {props.minValue}</p>
            <p>Valor máximo: {props.maxValue}</p>
        </div>
    )
}

