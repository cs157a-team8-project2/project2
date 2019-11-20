import React, { Component } from 'react'
import TinnitusForm from './TinnitusForm';
import SoundToleranceForm from './SoundToleranceForm';
import HLForm from './HLForm';

export class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        visit_ID: '',
        date: '',
        patient_THC_number: '',
        THC_number: '',
        visit_number: ''
    }

    // Procceed to the next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    // Go back to the prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    //Handle Fields change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value})
    }

    render() {
        const { step } = this.state;
        const { firstName, lastName } = this.state;
        // repeat to load
        const values = { firstName, lastName } 
        const topInfo = (<h4>Top info... {firstName} {lastName}</h4>)
        
        switch(step) {
            case 1:
                return(
                    <div>
                        {topInfo}
                        <TinnitusForm
                        nextStep = {this.nextStep}
                        //prevStep = {this.prevStep}
                        handleChange = {this.handleChange}
                        values = {values}
                        />
                    </div>
                )
            case 2:
                return (
                    <div>
                        {topInfo}
                        <SoundToleranceForm
                            nextStep = {this.nextStep}
                            prevStep = {this.prevStep}
                            handleChange = {this.handleChange}
                            values = {values}
                        />
                    </div>
                )
            case 3: 
                return (
                    <div>
                        {topInfo}
                        <HLForm
                            nextStep = {this.nextStep}
                            prevStep = {this.prevStep}
                            handleChange = {this.handleChange}
                            values = {values}
                        />
                    </div>
                )
            case 4:
                return <h1>Confirm</h1>
            case 5:
                return <h1>Success</h1>
            default:
                return <h1>Err</h1>
        }
        
    }
}

export default UserForm
