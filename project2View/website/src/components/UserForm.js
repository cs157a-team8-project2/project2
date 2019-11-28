import React, { Component } from 'react'
import { Link } from "react-router-dom";
import TinnitusForm from './TinnitusForm';
import SoundToleranceForm from './SoundToleranceForm';
import HLForm from './HLForm';
import { Button, Grid, TextField } from '@material-ui/core';
import axios from 'axios';

const API_PATH = 'http://localhost/api/contact/oracle.php';

export class UserForm extends Component {
    state = {
        step: 0,
        visit_ID: 'temp1',
        date: 'temp2',
        visit_number: 'temp3',


        thc          :'temp4',
        ssn          :'',
        dob          :'',
        first_name   :'temp5',
        last_name    :'temp6',
        phone        :'',
        email        :'',
        insurance    :'',
        

        //The table from the ddl
        //Tinnitus
        tin_area                       :'',
        tin_area_freq                  :'',
        tin_onset                      :'',
        tin_when                       :'',
        tin_fluctuations               :'',
        tin_desc_of_t_sound            :'',
        tin_activities_concentration   :'',
        tin_activities_sleep           :'',
        tin_activities_qra             :'',
        tin_activities_work            :'',
        tin_activities_restaurants     :'',
        tin_activities_sports          :'',
        tin_activities_social          :'',
        tin_activities_other           :'',
        tin_severity                   :0,
        tin_annoyance                  :0,
        tin_effectonlife               :0,
        tin_comments                   :'',
        tin_bd                         :'',
        tin_bd_freq                    :'',
        tin_eff_of_sound               :'',
        tin_eof_how_long               :'',
        tin_ear_over                   :'',
        tin_ear_over_perc              :0,
        tin_ear_over_inquiet           :'',
        tin_other_t_treat              :'',
        tin_why_t_prob                 :'',

        //ST
        st_oversensitivity             :'',
        st_phys_dis                    :'',
        st_desc_of_troub_sounds        :'',
        st_activities_concerts         :'',
        st_activities_shopping         :'',
        st_activities_movies           :'',
        st_activities_work             :'',
        st_activities_restaurants      :'',
        st_activities_driving          :'',
        st_activities_sports           :'',
        st_activities_church           :'',
        st_activities_housekeeping     :'',
        st_activities_childcare        :'',
        st_activities_social           :'',
        st_activities_other            :'',
        st_severity                    :0,
        st_annoyance                   :0,
        st_effectonlife                :0,
        st_comments                    :'',
        st_bd                          :'',
        st_bd_freq                     :'',
        st_eff_of_sound                :'',
        st_eof_how_long                :'',
        st_ear_over                    :'',
        st_ear_over_perc               :0,
        st_ear_over_inquiet            :'',
        st_other_st_treat              :'',
        st_why_st_prob                 :'',

        //HL
        hl_hearing_prob                :'',
        hl_hearing_aid                 :'',
        hl_hearing_aid_type            :'',
        hl_ever_rec                    :'',
        hl_category                    :'',
        hl_rec                         :'',

        //Rank
        rank_tin                       :0,
        rank_st                        :0,
        rank_hearing                   :0,
        ptn_decision                   :'',
        next_visit                     :'',
        fui_tin_activities_changes     :'',
        fui_st_activities_changes      :'',
        fui_problem_in_general         :'',
        fui_glad_started               :'',
        fui_main_prob_disc             :'',
        visit_visit_id                 :0
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

    formSubmission = (e) => {
        e.preventDefault()
        //this will submit the data for the php server in the form of the "this.state" json and will be parsed by the php
        console.log(this.state)
		axios({
		method: 'post',
		url: `${API_PATH}`,
		headers: { 'content-type': 'application/json' },
		data: this.state
		})
		
    }

    render() {
        const { step } = this.state;
        const { 
            visit_ID,  date, visit_number, thc, ssn, dob, first_name, last_name, phone, email, insurance,

            tin_area                    ,
            tin_area_freq               ,
            tin_onset                   ,
            tin_when                    ,
            tin_fluctuations            ,
            tin_desc_of_t_sound         ,
            tin_activities_concentration,
            tin_activities_sleep        ,
            tin_activities_qra          ,
            tin_activities_work         ,
            tin_activities_restaurants  ,
            tin_activities_sports       ,
            tin_activities_social       ,
            tin_activities_other        ,
            tin_severity               ,
            tin_annoyance              ,
            tin_effectonlife           ,
            tin_comments                ,
            tin_bd                      ,
            tin_bd_freq                 ,
            tin_eff_of_sound            ,
            tin_eof_how_long            ,
            tin_ear_over                ,
            tin_ear_over_perc          ,
            tin_ear_over_inquiet        ,
            tin_other_t_treat           ,
            tin_why_t_prob              ,

            //ST
            st_oversensitivity         ,
            st_phys_dis                ,
            st_desc_of_troub_sounds    ,
            st_activities_concerts     ,
            st_activities_shopping     ,
            st_activities_movies       ,
            st_activities_work         ,
            st_activities_restaurants  ,
            st_activities_driving      ,
            st_activities_sports       ,
            st_activities_church       ,
            st_activities_housekeeping ,
            st_activities_childcare    ,
            st_activities_social       ,
            st_activities_other        ,
            st_severity               ,
            st_annoyance              ,
            st_effectonlife           ,
            st_comments                ,
            st_bd                      ,
            st_bd_freq                 ,
            st_eff_of_sound            ,
            st_eof_how_long            ,
            st_ear_over                ,
            st_ear_over_perc          ,
            st_ear_over_inquiet        ,
            st_other_st_treat          ,
            st_why_st_prob             ,

            //HL
            hl_hearing_prob       ,
            hl_hearing_aid        ,
            hl_hearing_aid_type   ,
            hl_ever_rec           ,
            hl_category           ,
            hl_rec                ,

            //Rank
            rank_tin                  ,
            rank_st                   ,
            rank_hearing              ,
            ptn_decision               ,
            next_visit                 ,
            fui_tin_activities_changes ,
            fui_st_activities_changes  ,
            fui_problem_in_general     ,
            fui_glad_started           ,
            fui_main_prob_disc         ,
            visit_visit_id           ,
        } = this.state;

        // repeat to load
        const values = { 
            visit_ID,  date, visit_number, thc, ssn, dob, first_name, last_name, phone, email, insurance,

            tin_area                    ,
            tin_area_freq               ,
            tin_onset                   ,
            tin_when                    ,
            tin_fluctuations            ,
            tin_desc_of_t_sound         ,
            tin_activities_concentration,
            tin_activities_sleep        ,
            tin_activities_qra          ,
            tin_activities_work         ,
            tin_activities_restaurants  ,
            tin_activities_sports       ,
            tin_activities_social       ,
            tin_activities_other        ,
            tin_severity               ,
            tin_annoyance              ,
            tin_effectonlife           ,
            tin_comments                ,
            tin_bd                      ,
            tin_bd_freq                 ,
            tin_eff_of_sound            ,
            tin_eof_how_long            ,
            tin_ear_over                ,
            tin_ear_over_perc          ,
            tin_ear_over_inquiet        ,
            tin_other_t_treat           ,
            tin_why_t_prob              ,
            
            //ST
            st_oversensitivity         ,
            st_phys_dis                ,
            st_desc_of_troub_sounds    ,
            st_activities_concerts     ,
            st_activities_shopping     ,
            st_activities_movies       ,
            st_activities_work         ,
            st_activities_restaurants  ,
            st_activities_driving      ,
            st_activities_sports       ,
            st_activities_church       ,
            st_activities_housekeeping ,
            st_activities_childcare    ,
            st_activities_social       ,
            st_activities_other        ,
            st_severity               ,
            st_annoyance              ,
            st_effectonlife           ,
            st_comments                ,
            st_bd                      ,
            st_bd_freq                 ,
            st_eff_of_sound            ,
            st_eof_how_long            ,
            st_ear_over                ,
            st_ear_over_perc          ,
            st_ear_over_inquiet        ,
            st_other_st_treat          ,
            st_why_st_prob             ,

            //HL
            hl_hearing_prob       ,
            hl_hearing_aid        ,
            hl_hearing_aid_type   ,
            hl_ever_rec           ,
            hl_category           ,
            hl_rec                ,

            //Rank
            rank_tin                  ,
            rank_st                   ,
            rank_hearing              ,
            ptn_decision               ,
            next_visit                 ,
            fui_tin_activities_changes ,
            fui_st_activities_changes  ,
            fui_problem_in_general     ,
            fui_glad_started           ,
            fui_main_prob_disc         ,
            visit_visit_id           ,
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
                        defaultValue={values.first_name+' '+values.last_name}
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
                        <h1>Success!</h1>
                        {toVisit}
						<Grid container spacing={3}>
                            <Grid item xs={4}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.formSubmission}
                                >Submit</Button>
                            </Grid>
						</Grid>
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
