import React from 'react';
import If from './If';

export default props => {
    const user = props.user;
    return (
        <div>
            <If test={user && user.name}>
                <p>Seja bem vindo {user.name}</p>
            </If>
            <If test={!user || !user.name}>
                <p>Seja bem vindo amigão</p>
            </If>
        </div>
    )
}