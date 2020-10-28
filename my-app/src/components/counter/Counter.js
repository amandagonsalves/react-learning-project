import React from 'react';
import Buttons from './Buttons';
import Display from './Display';
import StepForm from './StepForm';

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

    setStep = (newStep) => {
        this.setState({
            step: newStep
        })
    }

    render() {
        return(
            <div>
                <Display number={this.state.number}/>
               <StepForm step={this.state.step} setStep={this.setStep} />
               <Buttons setInc={this.inc} setDec={this.dec} />
            </div>
        )
    }
} 