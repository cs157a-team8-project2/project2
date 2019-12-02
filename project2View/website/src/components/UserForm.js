import React, { Component } from 'react'
import { Link } from "react-router-dom";
import TinnitusForm from './TinnitusForm';
import SoundToleranceForm from './SoundToleranceForm';
import HLForm from './HLForm';
import RankingForm from './RankingForm';
import { Button, Grid, TextField } from '@material-ui/core';




export class UserForm extends Component {
    state = {
        step: 0,

        visit_ID: '',
        date: '',
        visit_number: '',

        thc: '',
        ssn: '',
        dob: '',
        first_name: '',
        last_name: '',
        phone: '',
        email: '',
        insurance: '',


        //The table from the ddl
        //Tinnitus
        tin_area: '',
        tin_area_freq: '',
        tin_onset: '',
        tin_when: '',
        tin_fluctuations: '',
        tin_desc_of_t_sound: '',
        tin_activities_concentration: 'N',
        tin_activities_sleep: 'N',
        tin_activities_qra: 'N',
        tin_activities_work: 'N',
        tin_activities_restaurants: 'N',
        tin_activities_sports: 'N',
        tin_activities_social: 'N',
        tin_activities_other: 'N',
        tin_severity: 1,
        tin_annoyance: 1,
        tin_effectonlife: 1,
        tin_comments: '',
        tin_bd: '',
        tin_bd_freq: '',
        tin_eff_of_sound: '',
        tin_eof_how_long: '',
        tin_ear_over: '',
        tin_ear_over_perc: 1,
        tin_ear_over_inquiet: '',
        tin_other_t_treat: '',
        tin_why_t_prob: '',

        //ST
        st_oversensitivity: '',
        st_phys_dis: '',
        st_desc_of_troub_sounds: '',
        st_activities_concerts: 'N',
        st_activities_shopping: 'N',
        st_activities_movies: 'N',
        st_activities_work: 'N',
        st_activities_restaurants: 'N',
        st_activities_driving: 'N',
        st_activities_sports: 'N',
        st_activities_church: 'N',
        st_activities_housekeeping: 'N',
        st_activities_childcare: 'N',
        st_activities_social: 'N',
        st_activities_other: 'N',
        st_severity: 1,
        st_annoyance: 1,
        st_effectonlife: 1,
        st_comments: '',
        st_bd: '',
        st_bd_freq: '',
        st_eff_of_sound: '',
        st_eof_how_long: '',
        st_ear_over: '',
        st_ear_over_perc: 1,
        st_ear_over_inquiet: '',
        st_other_st_treat: '',
        st_why_st_prob: '',

        //HL
        hl_hearing_prob: '',
        hl_hearing_aid: '',
        hl_hearing_aid_type: '',
        hl_ever_rec: '',
        hl_category: '',
        hl_rec: '',

        //Rank
        rank_tin: 1,
        rank_st: 1,
        rank_hearing: 1,
        ptn_decision: '',
        next_visit: '',
        fui_tin_activities_changes: 'N',
        fui_st_activities_changes: 'N',
        fui_problem_in_general: '',
        fui_glad_started: '',
        fui_main_prob_disc: '',
        visit_visit_id: 0
    }

    componentDidMount() {
        this.loadPatient()
    }

    loadPatient = () => {
        // gets the patient data from the server by doing a fetch request to a php file
        // TODO change the url to a new php file
        return fetch('http://localhost:8080/api/contact/getData.php')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson) {
                    //set the states for the patient info
                    this.setState({ visit_ID:       responseJson['VISIT_ID']        })
                    this.setState({ date:           responseJson['Date']            })
                    this.setState({ visit_number:   responseJson['VISIT_NUMBER']    })
                    this.setState({ thc:            responseJson['THC']             })
                    this.setState({ ssn:            responseJson['SSN']             })
                    this.setState({ dob:            responseJson['DOB']             })
                    this.setState({ first_name:     responseJson['FIRST_NAME']      })
                    this.setState({ last_name:      responseJson['LAST_NAME']       })
                    this.setState({ phone:          responseJson['PHONE']           })
                    this.setState({ email:          responseJson['EMAIL']           })
                    this.setState({ insurance:      responseJson['INSURANCE']       })
                } else {
                    alert('Error: Page info failed to load')
                }
                return responseJson;
            })
            .catch((error) => {
                console.error(error);
            }
            );
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
        this.setState({ [input]: e.target.value })
    }

    handleChecked = name => event => {
        console.log(this.state[name])
        if (this.state[name] === 'N') {
            this.setState({ [name]: 'Y' });
        } else {
            this.setState({ [name]: 'N' });
        }
    }

    formSubmission = () => {
        //this will submit the data for the php server in the form of the "this.state" json and will be parsed by the php
        console.log(this.state)
        return fetch('http://localhost:8080/api/contact/test.php', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                // probably will do data check here if needed
                console.log(responseJson)
                if (responseJson) {
                    this.nextStep()
                } else {
                    alert('Error: Database failed to store data')
                }
                return responseJson;
            })
            .catch((error) => {
                console.error(error);
            }
            );
    }


    render() {
        const { step } = this.state;
        const {
            visit_ID, date, visit_number, thc, ssn, dob, first_name, last_name, phone, email, insurance,

            tin_area,
            tin_area_freq,
            tin_onset,
            tin_when,
            tin_fluctuations,
            tin_desc_of_t_sound,
            tin_activities_concentration,
            tin_activities_sleep,
            tin_activities_qra,
            tin_activities_work,
            tin_activities_restaurants,
            tin_activities_sports,
            tin_activities_social,
            tin_activities_other,
            tin_severity,
            tin_annoyance,
            tin_effectonlife,
            tin_comments,
            tin_bd,
            tin_bd_freq,
            tin_eff_of_sound,
            tin_eof_how_long,
            tin_ear_over,
            tin_ear_over_perc,
            tin_ear_over_inquiet,
            tin_other_t_treat,
            tin_why_t_prob,

            //ST
            st_oversensitivity,
            st_phys_dis,
            st_desc_of_troub_sounds,
            st_activities_concerts,
            st_activities_shopping,
            st_activities_movies,
            st_activities_work,
            st_activities_restaurants,
            st_activities_driving,
            st_activities_sports,
            st_activities_church,
            st_activities_housekeeping,
            st_activities_childcare,
            st_activities_social,
            st_activities_other,
            st_severity,
            st_annoyance,
            st_effectonlife,
            st_comments,
            st_bd,
            st_bd_freq,
            st_eff_of_sound,
            st_eof_how_long,
            st_ear_over,
            st_ear_over_perc,
            st_ear_over_inquiet,
            st_other_st_treat,
            st_why_st_prob,

            //HL
            hl_hearing_prob,
            hl_hearing_aid,
            hl_hearing_aid_type,
            hl_ever_rec,
            hl_category,
            hl_rec,

            //Rank
            rank_tin,
            rank_st,
            rank_hearing,
            ptn_decision,
            next_visit,
            fui_tin_activities_changes,
            fui_st_activities_changes,
            fui_problem_in_general,
            fui_glad_started,
            fui_main_prob_disc,
            visit_visit_id,
        } = this.state;

        // repeat to load
        const values = {
            visit_ID, date, visit_number, thc, ssn, dob, first_name, last_name, phone, email, insurance,

            tin_area,
            tin_area_freq,
            tin_onset,
            tin_when,
            tin_fluctuations,
            tin_desc_of_t_sound,
            tin_activities_concentration,
            tin_activities_sleep,
            tin_activities_qra,
            tin_activities_work,
            tin_activities_restaurants,
            tin_activities_sports,
            tin_activities_social,
            tin_activities_other,
            tin_severity,
            tin_annoyance,
            tin_effectonlife,
            tin_comments,
            tin_bd,
            tin_bd_freq,
            tin_eff_of_sound,
            tin_eof_how_long,
            tin_ear_over,
            tin_ear_over_perc,
            tin_ear_over_inquiet,
            tin_other_t_treat,
            tin_why_t_prob,

            //ST
            st_oversensitivity,
            st_phys_dis,
            st_desc_of_troub_sounds,
            st_activities_concerts,
            st_activities_shopping,
            st_activities_movies,
            st_activities_work,
            st_activities_restaurants,
            st_activities_driving,
            st_activities_sports,
            st_activities_church,
            st_activities_housekeeping,
            st_activities_childcare,
            st_activities_social,
            st_activities_other,
            st_severity,
            st_annoyance,
            st_effectonlife,
            st_comments,
            st_bd,
            st_bd_freq,
            st_eff_of_sound,
            st_eof_how_long,
            st_ear_over,
            st_ear_over_perc,
            st_ear_over_inquiet,
            st_other_st_treat,
            st_why_st_prob,

            //HL
            hl_hearing_prob,
            hl_hearing_aid,
            hl_hearing_aid_type,
            hl_ever_rec,
            hl_category,
            hl_rec,

            //Rank
            rank_tin,
            rank_st,
            rank_hearing,
            ptn_decision,
            next_visit,

            fui_tin_activities_changes,
            fui_st_activities_changes,
            fui_problem_in_general,
            fui_glad_started,
            fui_main_prob_disc,
            visit_visit_id,
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
                            defaultValue={values.first_name + ' ' + values.last_name}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            disabled
                            label="THC#:"
                            onChange={this.handleChange('THC_number')}
                            defaultValue={values.thc}
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
                <br />
                <hr />
                <br />
            </div>
        )

        const toVisit = (
            <div>
                <br />
                <Grid container direction="row" justify="flex-end" alignItems="center">
                    <Grid item>
                        <Link to="/AddNewVisit"><Button>{"<- Back to Visit"}</Button></Link>
                    </Grid>
                </Grid>
                <br /><br /><br />
            </div>
        )

        switch (step) {
            case 0:
                return (
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
                return (
                    <div>
                        {topInfo}
                        <TinnitusForm
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}
                            handleChecked={this.handleChecked}
                            values={values}
                        />
                        {toVisit}
                    </div>
                )
            case 2:
                return (
                    <div>
                        {topInfo}
                        <SoundToleranceForm
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            handleChecked={this.handleChecked}
                            formSubmission={this.formSubmission}
                            values={values}
                        />
                        {toVisit}
                    </div>
                )
            case 3:
                return (
                    <div>
                        {topInfo}
                        <HLForm
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            handleChecked={this.handleChecked}
                            values={values}
                        />
                        {toVisit}
                    </div>
                )
            case 4:
                return (
                    <div>
                        {topInfo}
                        <RankingForm
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            handleChecked={this.handleChecked}
                            formSubmission={this.formSubmission}
                            values={values}
                        />
                        {toVisit}
                    </div>
                )
            case 5:
                return (
                    <div>
                        {topInfo}
                        <h2>Form Submitted Successfully</h2>
                        {toVisit}
                    </div>
                )
            default:
                return (
                    <div>
                        {topInfo}
                        <h2>Err</h2>
                        {toVisit}
                    </div>
                )
        }

    }
}

export default UserForm
