import React from 'react';
import './card.css';

export default props => {
    const cardStyle = {
        backgroundColor: props.color || '#e6e6ea'
    }

    return <div className="card" style={cardStyle}>
        <div className="card__title">{props.title}</div>
        <div className="card__content">{props.children}</div>
    </div>
};