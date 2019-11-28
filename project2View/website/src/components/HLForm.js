import React, { Component } from 'react'
import { Grid, TextField, Button } from '@material-ui/core';

const styles = {
    button: {
        margin: 15
    }
}
export default class HLForm extends Component {

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
                <h3>Hearing Loss</h3>
				
                <Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="HL Hearing Problem"
                            onChange={handleChange('hl_hearing_prob')}
                            //defaultValue={values.hl_hearing_prob}
                        />
                    </Grid>
				</Grid>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="HL Hearing Aid"
                            onChange={handleChange('hl_hearing_aid')}
                            //defaultValue={values.hl_hearing_aid}
                        />
                    </Grid>
                </Grid>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="HL Hearing Aid Type"
                            onChange={handleChange('hl_hearing_aid_type')}
                            //defaultValue={values.hl_hearing_aid_type}
                        />
                    </Grid>
                </Grid>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="HL Ever Recommendation"
                            onChange={handleChange('hl_ever_rec')}
                            //defaultValue={values.hl_ever_rec}
                        />
                    </Grid>
                </Grid>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="HL Category"
                            onChange={handleChange('hl_category')}
                            //defaultValue={values.hl_category}
                        />
                    </Grid>
                </Grid>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="HL Recommendation"
                            onChange={handleChange('hl_rec')}
                            //defaultValue={values.hl_rec}
                        />
                    </Grid>
                </Grid>
				<h3>Ranking</h3>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="Ranking of Tinnitus"
                            onChange={handleChange('rank_tin')}
                            //defaultValue={values.rank_tin}
                        />
                    </Grid>
                </Grid>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="Ranking of Sound Tolerance"
                            onChange={handleChange('rank_st')}
                            //defaultValue={values.rank_st}
                        />
                    </Grid>
                </Grid>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="Ranking of Hearing Loss"
                            onChange={handleChange('rank_hearing')}
                            //defaultValue={values.rank_hearing}
                        />
                    </Grid>
                </Grid>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="Ptn Decision"
                            onChange={handleChange('ptn_decision')}
                            //defaultValue={values.prn_decision}
                        />
                    </Grid>
                </Grid>
				<Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="Next Visit"
                            onChange={handleChange('next_visit')}
                            //defaultValue={values.next_visit}
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
