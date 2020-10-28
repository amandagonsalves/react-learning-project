import React from 'react';

export default props => {
    const isOddOrEven = (props.number % 2) === 0 ? 'Par' : 'Impar';
    return(
        <div>
            {isOddOrEven}
        </div>
    );
}