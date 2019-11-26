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
                            label="ST Frequency"
                            onChange={handleChange('st_freq')}
                            defaultValue={values.st_freq}
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
