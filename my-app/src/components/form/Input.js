import React, { useState } from 'react';
import './input.css';

export default props => {
    const [value, setValue] = useState('inicial');

    function onChange(e) {
        setValue(e.target.value)
    }
    return(
        <div className="input">
            <h2>{value}</h2>
            <input value={value} onChange={onChange}></input>
            <input value={undefined}></input>
        </div>
    )
}