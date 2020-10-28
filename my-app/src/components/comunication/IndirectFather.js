import React from 'react';
import IndirectSon from './IndirectSon';

export default props => {
    function getInfo(name, age, nerd) {
        console.log(name, age, nerd);
    };
    
    return(
        <div>
            pai
            <IndirectSon onClick={getInfo}/>
        </div>
    )
}