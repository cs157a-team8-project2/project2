import React, { Component } from 'react'
import { Grid, TextField, Button } from '@material-ui/core';

const styles = {
    button: {
        margin: 15
    }
}
export default class TinnitusForm extends Component {
    
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    handleRadio = event => {
        // setValue(event.target.value);
    }

    render() {
        const { values, handleChange } = this.props;

        return (
            <React.Fragment>
			<h3>Patient info</h3>
                <Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="First Name"
                            onChange={handleChange('firstName')}
                            //defaultValue={values.firstName}
                        />
                    </Grid>
                    <Grid item>
                        <TextField 
                            label="Last Name"
                            onChange={handleChange('lastName')}
                            //defaultValue={values.lastName}
                        />
                    </Grid>
                </Grid>
                <br/>
                <h3>Tinnitus</h3>
                <Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="T Area"
                            onChange={handleChange('tin_area')}
                            ////defaultValue={values.tin_area}
                        />
                    </Grid>
                </Grid>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="T Frequency"
                            onChange={handleChange('tin_area_freq')}
                            //defaultValue={values.tin_area_freq}
                        />
                    </Grid>
                </Grid>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="T Onset"
                            onChange={handleChange('tin_onset')}
                            //defaultValue={values.tin_onset}
                        />
                    </Grid>
                </Grid>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="T When"
                            onChange={handleChange('tin_when')}
                            //defaultValue={values.tin_when}
                        />
                    </Grid>
                </Grid>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="T Fluctuations"
                            onChange={handleChange('tin_fluctuatioons')}
                            //defaultValue={values.tin_fluctuations}
                        />
                    </Grid>
                </Grid>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="T Descriptions of T Sound"
                            onChange={handleChange('tin_desc_of_t_sound')}
                            //defaultValue={values.tin_desc_of_t_sound}
                        />
                    </Grid>
                </Grid>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="T Activities Concentration"
                            onChange={handleChange('tin_activities_concentration')}
                            //defaultValue={values.tin_activities_concentration}
                        />
                    </Grid>
                </Grid>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="T Activities Sleep"
                            onChange={handleChange('tin_activities_sleep')}
                            //defaultValue={values.tin_activities_sleep}
                        />
                    </Grid>
                </Grid>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="T Activities QRA"
                            onChange={handleChange('tin_activities_qra')}
                            //defaultValue={values.tin_activities_qra}
                        />
                    </Grid>
                </Grid>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="T Activities Work"
                            onChange={handleChange('tin_activities_work')}
                            //defaultValue={values.tin_activities_work}
                        />
                    </Grid>
                </Grid>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="T Activities Restaurants"
                            onChange={handleChange('tin_activities_restaurants')}
                            //defaultValue={values.tin_activities_restaurants}
                        />
                    </Grid>
                </Grid>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="T Activities Sports"
                            onChange={handleChange('tin_activities_sports')}
                            //defaultValue={values.tin_activities_sports}
                        />
                    </Grid>
                </Grid>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="T Activities Social"
                            onChange={handleChange('tin_activities_social')}
                            //defaultValue={values.tin_activities_social}
                        />
                    </Grid>
                </Grid>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="T Activities Other"
                            onChange={handleChange('tin_activities_other')}
                            //defaultValue={values.tin_activities_other}
                        />
                    </Grid>
                </Grid>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="T Severity"
                            onChange={handleChange('tin_activities_severity')}
                            //defaultValue={values.tin_activities_severity}
                        />
                    </Grid>
                </Grid>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="T Annoyance"
                            onChange={handleChange('tin_annoyance')}
                            //defaultValue={values.tin_annoyance}
                        />
                    </Grid>
                </Grid>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="T Effect on Life"
                            onChange={handleChange('tin_effectonlife')}
                            //defaultValue={values.tin_effectonlife}
                        />
                    </Grid>
                </Grid>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="T Comments"
                            onChange={handleChange('tin_comments')}
                            //defaultValue={values.tin_comments}
                        />
                    </Grid>
                </Grid>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="T Bad Day"
                            onChange={handleChange('tin_bd')}
                            //defaultValue={values.tin_bd_freq}
                        />
                    </Grid>
                </Grid>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="T Bad Day Frequency"
                            onChange={handleChange('tin_bd_freq')}
                            //defaultValue={values.tin_bd_freq}
                        />
                    </Grid>
                </Grid>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="T Effect of Sound"
                            onChange={handleChange('tin_eff_of_sound')}
                            //defaultValue={values.tin_eff_of_sound}
                        />
                    </Grid>
                </Grid>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="T Effect on Sound How Long"
                            onChange={handleChange('tin_eof_how_long')}
                            //defaultValue={values.tin_eof_how_long}
                        />
                    </Grid>
                </Grid>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="T Ear Over Protection"
                            onChange={handleChange('tin_ear_over')}
                            //defaultValue={values.tin_ear_over}
                        />
                    </Grid>
                </Grid>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="T Ear Over Protection %"
                            onChange={handleChange('tin_ear_over_perc')}
                            //defaultValue={values.tin_ear_over_perc}
                        />
                    </Grid>
                </Grid>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="T Ear Over Protection in Quiet"
                            onChange={handleChange('tin_ear_over_inquiet')}
                            //defaultValue={values.tin_ear_over_inquiet}
                        />
                    </Grid>
                </Grid>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="T Other T Specific Treatment"
                            onChange={handleChange('tin_other_t_treat')}
                            //defaultValue={values.tin_other_t_treat}
                        />
                    </Grid>
                </Grid>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="T Why T Problem"
                            onChange={handleChange('tin_why_t_prob')}
                            //defaultValue={values.tin_why_t_prob}
                        />
                    </Grid>
                </Grid>
                <br/>
                <Grid container direction="row" justify="flex-end" alignItems="center">
                    <Grid item>
                        <Button
                            variant="contained"
                            color="primary"
                            styles={styles.button}
                            onClick={this.continue}
                        >Continue</Button>
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }
}
