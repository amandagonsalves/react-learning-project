import React from 'react';

export default class Counter extends React.Component {
    state = {
        number: this.props.initialValue,

    }

    inc = () => {
        this.setState({
            number: this.state.number + 1
        })
    }

    dec = () => {
        this.setState({
            number: this.state.number - 1
        })
    }

    render() {
        return(
            <div>
                <p>Valor atual: {this.state.number}</p>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
            </div>
        )
    }
} 