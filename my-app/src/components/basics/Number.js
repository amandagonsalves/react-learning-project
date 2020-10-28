import React from 'react';

export default props => {
    const { maxValue, minValue } = props;
    const number = parseInt(Math.random() * (maxValue - minValue)) + minValue;
    return (
        <div>
            <h1>Valor aleatório</h1>
            <p>Valor mínimo: {minValue}</p>
            <p>Valor máximo: {maxValue}</p>
            <p>Valor escolhido: { number }</p>
        </div>
    )
}

