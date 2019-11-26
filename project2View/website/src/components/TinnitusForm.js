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

    render() {
        const { values, handleChange } = this.props;

        return (
            <React.Fragment>
                <h3>Tinnitus</h3>
                <Grid container spacing={3}>
                    <Grid item>
                        <TextField 
                            label="T Frequency"
                            onChange={handleChange('t_freq')}
                            defaultValue={values.t_freq}
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
