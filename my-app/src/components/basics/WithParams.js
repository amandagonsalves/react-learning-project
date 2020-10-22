import React from 'react';

export default function WithParams(props) {
    const status = props.note >= 7 ? 'Aprovado' : 'Reprovado';
    return(
        <React.Fragment>
            <h1>{ props.name }</h1>
            <h2>{ props.note }</h2>
            <h1>{ status }</h1>
        </React.Fragment>
    )
}