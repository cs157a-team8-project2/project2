import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


const styles = {
    button: {
      margin: "15px 5px 15px 5px",
    },
}

export function CenteredGrid() {
  
    return (
        <div>
            <Grid container direction="row" justify="center" alignItems="center" spacing={3}>
                <Grid item xs>
                    <div style={styles.button}>
                        <Button variant="contained" disabled><h2>Patients</h2></Button>
                    </div>
                </Grid>
                <Grid item xs>
                    <div style={styles.button}>
                        <Link to="/Visits"><Button variant="contained" color="primary"><h2>Visits</h2></Button></Link>
                    </div>
                </Grid>
                <Grid item xs>
                    <div style={styles.button}>
                        <Button variant="contained" disabled><h2>Analytics</h2></Button>
                    </div>
                </Grid>
                <Grid item xs>
                    <div style={styles.button}>
                        <Button variant="contained" disabled><h2>Other</h2></Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    ); 
}

export default class Main extends Component {

    render() {

        return (
            <div>
                <h1>Home Page</h1>
                { CenteredGrid() }
            </div>
        )
    }
}
