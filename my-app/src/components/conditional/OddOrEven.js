import React from 'react';

export default props => {
    const isOddOrEven = props.number % 2 == 0 ? 'Par' : 'Ímpar';
    return(
        <div>
            {isOddOrEven}
        </div>
    )
}