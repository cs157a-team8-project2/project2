import React, { Component } from 'react'
import { Link } from "react-router-dom";
import TinnitusForm from './TinnitusForm';
import SoundToleranceForm from './SoundToleranceForm';
import HLForm from './HLForm';
import { Button, Grid, TextField } from '@material-ui/core';


export class UserForm extends Component {
    state = {
        step: 0,
        firstName: '',
        lastName: '',
        visit_ID: '',
        date: '',
        patient_THC_number: '',
        THC_number: '',
        visit_number: '',
        
        //Tinnitus
        t_freq:'',

        //ST
        st_freq:''
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
        const { 
            firstName, lastName, visit_ID, date, patient_THC_number, THC_number, visit_number, 
            t_freq, 
            st_freq 
        } = this.state;
        // repeat to load
        const values = { 
            firstName, lastName, visit_ID, date, patient_THC_number, THC_number, visit_number, 
            t_freq, 
            st_freq 
        } 

        const topInfo = (
        <div>
            <Grid container direction="row" spacing={3}>
                <Grid item xs={4}>
                    <TextField 
                        disabled
                        label="Visit ID:"
                        onChange={this.handleChange('visit_ID')}
                        defaultValue={values.visit_ID}

                    />
                </Grid>
                <Grid item xs={8}>
                    <TextField 
                        disabled
                        label="Date:"
                        onChange={this.handleChange('date')}
                        defaultValue={values.date}
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField 
                        disabled
                        label="Patient THC#:"
                        onChange={this.handleChange('patient_THC_number')}
                        defaultValue={values.patient_THC_number}
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField 
                        disabled
                        label="THC#:"
                        onChange={this.handleChange('THC_number')}
                        defaultValue={values.THC_number}
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField 
                        disabled
                        label="Visit no."
                        onChange={this.handleChange('visit_number')}
                        defaultValue={values.visit_number}
                    />
                </Grid>
            </Grid>
            <br/>
            <hr/>
            <br/>
        </div>
        )

        const toVisit = (
            <div>
                <br/>
                    <Grid container direction="row" justify="flex-end" alignItems="center">
                        <Grid item>
                            <Link to="/AddNewVisit"><Button>{"<- Back to Visit"}</Button></Link>
                        </Grid>
                    </Grid>
            </div>
        )
        
        switch(step) {
            case 0:
                return(
                    <div>
                        {topInfo}
                        <Grid container direction="row" spacing={3}>
                            <Grid item xs={4}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.nextStep}
                                >Initial/ Follow Up Interview</Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button
                                    variant="contained"
                                    disabled
                                >Tinnitus Handicap Inventory (THI)</Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button
                                    variant="contained"
                                    disabled
                                >Tinnitus Functional Index (TFI)</Button>
                            </Grid>
                        </Grid>
                        {toVisit}
                    </div>
                )
            case 1:
                return(
                    <div>
                        {topInfo}
                        <TinnitusForm
                            nextStep = {this.nextStep}
                            handleChange = {this.handleChange}
                            values = {values}
                        />
                        {toVisit}
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
                        {toVisit}
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
                        {toVisit}
                    </div>
                )
            case 4:
                return (
                    <div>
                        {topInfo}
                        <h1>Final questions</h1>
                        {toVisit}
                    </div>
                )
            case 5:
                return (
                    <div>
                        {topInfo}
                        <h1>Success</h1>
                        {toVisit}
                    </div>
                )
            default:
                return <h1>Err</h1>
        }
        
    }
}

export default UserForm
