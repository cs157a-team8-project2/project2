import React, { Component } from 'react'
import { Grid, TextField, Button } from '@material-ui/core';

const styles = {
    button: {
        margin: 15
    }
}
export default class SoundToleranceForm extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values, handleChange } = this.props;

        return (
            <React.Fragment>
                <h3>Sound Tolerance</h3>
                <Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="ST Oversensitivity"
                            onChange={handleChange('st_oversensitivity')}
                            //defaultValue={values.st_oversensitivity}
                        />
                    </Grid>
                </Grid>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="ST Physical Discomfort"
                            onChange={handleChange('st_phys_dis')}
                            //defaultValue={values.st_phys_dis}
                        />
                    </Grid>
                </Grid>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="ST Description of Troublesome Sounds"
                            onChange={handleChange('st_desc_of_troub_sounds')}
                            //defaultValue={values.st_desc_of_troub_sounds}
                        />
                    </Grid>
                </Grid>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="ST Activities Concerts"
                            onChange={handleChange('st_activities_concerts')}
                            //defaultValue={values.st_activities_concerts}
                        />
                    </Grid>
                </Grid>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="ST Activities Shopping"
                            onChange={handleChange('st_activities_shopping')}
                            //defaultValue={values.st_activities_shopping}
                        />
                    </Grid>
                </Grid>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="ST Activities Movies"
                            onChange={handleChange('st_activities_movies')}
                            //defaultValue={values.st_activities_movies}
                        />
                    </Grid>
                </Grid>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="ST Activities Work"
                            onChange={handleChange('st_activities_work')}
                            //defaultValue={values.st_activities_work}
                        />
                    </Grid>
                </Grid>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="ST Activities Restaurants"
                            onChange={handleChange('st_activities_restaurants')}
                            //defaultValue={values.st_activities_restaurants}
                        />
                    </Grid>
                </Grid>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="ST Activities Driving"
                            onChange={handleChange('st_activities_driving')}
                            //defaultValue={values.st_activities_driving}
                        />
                    </Grid>
                </Grid>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="ST Activities Sports"
                            onChange={handleChange('st_activities_sports')}
                            //defaultValue={values.st_activities_sports}
                        />
                    </Grid>
                </Grid>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="ST Activities Church"
                            onChange={handleChange('st_activities_church')}
                            //defaultValue={values.st_activities_church}
                        />
                    </Grid>
                </Grid>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="ST Activities Housekeeping"
                            onChange={handleChange('st_activities_housekeeping')}
                            //defaultValue={values.st_activities_housekeeping}
                        />
                    </Grid>
                </Grid>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="ST Activities Childcare"
                            onChange={handleChange('st_activities_childcare')}
                            //defaultValue={values.st_activities_childcare}
                        />
                    </Grid>
                </Grid>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="ST Activities Social"
                            onChange={handleChange('st_activities_social')}
                            //defaultValue={values.st_activities_social}
                        />
                    </Grid>
                </Grid>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="ST Activities Other"
                            onChange={handleChange('st_activities_other')}
                            //defaultValue={values.st_activities_other}
                        />
                    </Grid>
                </Grid>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="ST Severity"
                            onChange={handleChange('st_severity')}
                            //defaultValue={values.st_severity}
                        />
                    </Grid>
                </Grid>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="ST Annoyance"
                            onChange={handleChange('st_annoyance')}
                            //defaultValue={values.st_annoyance}
                        />
                    </Grid>
                </Grid>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="ST Effect on Life"
                            onChange={handleChange('st_effectonlife')}
                            //defaultValue={values.st_effectonlife}
                        />
                    </Grid>
                </Grid>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="ST Comments"
                            onChange={handleChange('st_comments')}
                            //defaultValue={values.st_comments}
                        />
                    </Grid>
                </Grid>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="ST Bad Day"
                            onChange={handleChange('st_bd')}
                            //defaultValue={values.st_bd}
                        />
                    </Grid>
                </Grid>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="ST Bad Day Frequency"
                            onChange={handleChange('st_bd_freq')}
                            //defaultValue={values.st_bd_freq}
                        />
                    </Grid>
                </Grid>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="ST Effect of Sound"
                            onChange={handleChange('st_eff_of_sound')}
                            //defaultValue={values.st_eff_of_sound}
                        />
                    </Grid>
                </Grid>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="ST Effect of Sound How long"
                            onChange={handleChange('st_eof_how_long')}
                            //defaultValue={values.st_eof_how_long}
                        />
                    </Grid>
                </Grid>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="ST Ear Over Protection"
                            onChange={handleChange('st_ear_over')}
                            //defaultValue={values.st_ear_over}
                        />
                    </Grid>
                </Grid>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="ST Ear Over Protection %"
                            onChange={handleChange('st_ear_over_perc')}
                            //defaultValue={values.st_ear_over_perc}
                        />
                    </Grid>
                </Grid>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="ST Ear Over Protection in quiet"
                            onChange={handleChange('st_ear_over_inquiet')}
                            //defaultValue={values.st_ear_over_inquiet}
                        />
                    </Grid>
                </Grid>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="ST Other treatments"
                            onChange={handleChange('st_other_st_treat')}
                            //defaultValue={values.st_other_st_treat}
                        />
                    </Grid>
                </Grid>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="ST Why ST Problem"
                            onChange={handleChange('st_why_st_prob')}
                            //defaultValue={values.st_why_st_prob}
                        />
                    </Grid>
                </Grid>
                <br/>
                <Grid container direction="row" justify="space-between" alignItems="center">
                    <Grid item>
                        <Button
                            variant="contained"
                            styles={styles.button}
                            onClick={this.back}
                        >Back</Button>
                    </Grid>
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
