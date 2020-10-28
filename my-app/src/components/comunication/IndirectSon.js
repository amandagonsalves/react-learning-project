import React from 'react';

export default props => {
    return(
        <div>
            <div>filho</div>
            <button onClick={() => {
                props.onClick('Cleiton', 44, true)
            }}>Fornecer informações</button>
        </div>
    )
}