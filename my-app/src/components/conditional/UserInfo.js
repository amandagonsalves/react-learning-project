import React from 'react';
import If, { Else } from './If';

export default props => {
    const user = props.user;
    return (
        <div>
            <If test={user && user.name}>
                <p>Seja bem vindo {user.name}</p>

                <Else>
                <p>Seja bem vindo amigão</p>
                </Else>
            </If>
        </div>
    )
}