import React from 'react';

export default props => {
    return (
        <div>
            <div>
                <label htmlFor="stepInput">Passo:</label>
                <input id="stepInput" type="number" value={props.step} onChange={e => props.setStep(+e.target.value)}></input>
            </div>
        </div>
    )
}