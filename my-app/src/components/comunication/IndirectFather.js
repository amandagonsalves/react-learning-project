import React, { useState } from 'react';
import IndirectSon from './IndirectSon';

export default props => {
    const [name, setName] = useState('?');
    const [age, setAge] = useState(0);
    const [nerd, setNerd] = useState(true);

    function getInfo(name, age, nerd) {
        setName(name);
        setAge(age);
        setNerd(nerd);
    };

    return (
        <div>
            <span>{name}</span>
            <span>{age}</span>
            <span>{nerd ? 'Verdadeiro' : 'Falso'}</span>

            <IndirectSon onClick={getInfo} />
        </div>
    )
}