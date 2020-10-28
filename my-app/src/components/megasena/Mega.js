import React, { useState } from 'react';

export default props => {

    function generateNumber(min, max, array) {
        const number = parseInt(Math.random() * (max + 1 - min) + min);
    
        return array.includes(number) ? generateNumber(min, max, array) : number;
    }
    
    function generateNumbers(quantity) {
        const numbers = Array(quantity).fill(0).reduce((nums) => {
    
            const newNumber = generateNumber(1, 60, nums);
            console.log([...nums, newNumber])
    
            return [ ...nums, newNumber ];
        }, []).sort((n1, n2) => n1 - n2)
    
        return numbers;
    }
    
    const quantity = props.quantity || 6;

    const initialNumbers = Array(quantity).fill(0);

    const [numbers, setNumbers] = useState(initialNumbers);

    return(
        <div>
            <p>{numbers.join(' ')}</p>
            <button onClick={_ => setNumbers(generateNumbers(quantity))}>Gerar</button>
        </div>
    )
}