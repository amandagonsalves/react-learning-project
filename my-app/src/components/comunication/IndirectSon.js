import React from 'react';

export default props => {
    const cb = props.onClick;
    const min = 20;
    const max = 50;
    const getAge = () => parseInt(Math.random() * (max - min) + min);
    return(
        <div>
            <div>filho</div>
            <button onClick={_ => cb('Cleiton', getAge(), true)}
            >Fornecer informações</button>
        </div>
    )
}