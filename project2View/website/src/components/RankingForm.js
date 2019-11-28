import React, { Component } from 'react'
import { Grid, TextField, Button } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const styles = {
    button: {
        margin: 15
    }
}
export default class RankingForm extends Component {

    formSubmission = e => {
        e.preventDefault();
        this.props.formSubmission();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values, handleChange } = this.props;

        return (
            <React.Fragment>
                <h3>Ranking Problems</h3>
                <Grid container direction="row" spacing={3} justify="flex-start" alignItems="flex-start">
                    <Grid item>
                        <InputLabel>Tinnitus:</InputLabel>
                        <FormControl>
                            <Select
                            value={values.rank_tin}
                            onChange={handleChange('rank_tin')}
                            >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <InputLabel>Sound Tolerance:</InputLabel>
                        <FormControl>
                            <Select
                            value={values.rank_st}
                            onChange={handleChange('rank_st')}
                            >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <InputLabel>Hearing Loss:</InputLabel>
                        <FormControl>
                            <Select
                            value={values.rank_hearing}
                            onChange={handleChange('rank_hearing')}
                            >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <br/>
                <hr/>
                <br/>
                <Grid container spacing={3} justify="flex-start">
                    <Grid item>
                        <FormLabel component="legend">Ptn decision:</FormLabel>
                        <TextField 
                            label=""
                            onChange={handleChange('ptn_decision')}
                            defaultValue={values.ptn_decision}
                        />
                    </Grid>
                    <Grid item>
                        <FormLabel component="legend">Next Visit:</FormLabel>
                        <TextField 
                            label=""
                            onChange={handleChange('next_visit')}
                            defaultValue={values.next_visit}
                        />
                    </Grid>
                </Grid>
                

                <br/>
                <hr/>
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
                            color="secondary"
                            styles={styles.button}
                            onClick={this.formSubmission}
                        >Submit Form</Button>
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }
}
