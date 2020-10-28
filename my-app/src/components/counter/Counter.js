import React from 'react';

export default class Counter extends React.Component {
    state = {
        number: this.props.initialValue,
        step: this.props.initialStep

    }

    inc = () => {
        this.setState({
            number: this.state.number + this.state.step
        })
    };

    dec = () => {
        this.setState({
            number: this.state.number - this.state.step
        })
    };

    setStep = (e) => {
        this.setState({
            step: +e.target.value
        })
    }

    render() {
        return(
            <div>
                <p>Valor atual: {this.state.number}</p>
                <div>
                    <label htmlFor="stepInput">Passo:</label>
                    <input id="stepInput" type="number" value={this.state.step} onChange={this.setStep}></input>
                </div>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
            </div>
        )
    }
} 