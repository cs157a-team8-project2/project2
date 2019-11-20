import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { TextField, RaisedButton } from 'material-ui';

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
            <MuiThemeProvider>
                <React.Fragment>
                    <TextField 
                        hintText="Enter first name"
                        floatingLabelText="First Name"
                        onChange={handleChange('firstName')}
                        defualtValue={values.firstName}
                    />
                    <br/>
                    <TextField 
                        hintText="Enter last name"
                        floatingLabelText="Last Name"
                        onChange={handleChange('lastName')}
                        defualtValue={values.lastName}
                    />
                    <br/>
                    <RaisedButton 
                        label="Continue"
                        primary={true}
                        styles={styles.button}
                        onClick={this.continue}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}
