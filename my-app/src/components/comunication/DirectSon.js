import React from 'react';

export default props => {
    return(
        <div>
            <span>{props.text}</span>
            <span>{props.number}</span>
            <span>{props.bool ? 'Verdadeiro' : 'Falso'}</span>
        </div>
    )
}