import React, { Component } from 'react'
import { Grid, TextField, Button } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

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
                <Grid container spacing={3} justify="flex-start">
                    <Grid item>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Hearing problem</FormLabel>
                            <RadioGroup row value={values.hl_hearing_prob} onChange={handleChange('hl_hearing_prob')}>
                                <FormControlLabel value="Y" control={<Radio />} label="Y" />
                                <FormControlLabel value="N" control={<Radio />} label="N" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Hearing Aid(s)</FormLabel>
                            <RadioGroup row value={values.hl_hearing_aid} onChange={handleChange('hl_hearing_aid')}>
                                <FormControlLabel value="Y" control={<Radio />} label="Y" />
                                <FormControlLabel value="N" control={<Radio />} label="N" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <TextField 
                            label="type:"
                            onChange={handleChange('hl_hearing_aid_type')}
                            defaultValue={values.hl_hearing_aid_type}
                        />
                    </Grid>
                    <Grid item>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Ever recommended</FormLabel>
                            <RadioGroup row value={values.hl_ever_rec} onChange={handleChange('hl_ever_rec')}>
                                <FormControlLabel value="Y" control={<Radio />} label="Y" />
                                <FormControlLabel value="N" control={<Radio />} label="N" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                </Grid>
                <br/>
                <hr/>
                <br/>
                <Grid container spacing={3} justify="flex-start">
                    <Grid item>
                        <FormLabel component="legend">Category:</FormLabel>
                        <TextField 
                            label=""
                            onChange={handleChange('hl_category')}
                            defaultValue={values.hl_category}
                        />
                    </Grid>
                    <Grid item>
                        <FormLabel component="legend">Recommendation:</FormLabel>
                        <TextField 
                            label=""
                            onChange={handleChange('hl_rec')}
                            defaultValue={values.hl_rec}
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
