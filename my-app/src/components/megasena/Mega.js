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

    const [quantity, setQuantity] = useState(props.quantity || 6);

    const initialNumbers = generateNumbers(quantity)

    const [numbers, setNumbers] = useState(initialNumbers);

    return(
        <div>
            <p>{numbers.join(' ')}</p>
            <div>
                <label>Quantidade de números</label>
                <input type="number" value={quantity} onChange={e => setQuantity(+e.target.value)}></input>
            </div>
            <button onClick={_ => setNumbers(generateNumbers(quantity))}>Gerar</button>
        </div>
    )
}