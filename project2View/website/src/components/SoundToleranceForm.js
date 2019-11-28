import React, { Component } from 'react'
import { Grid, TextField, Button } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

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
        const { values, handleChange, handleChecked } = this.props;

        return (
            <React.Fragment>
              <h3>Sound Tolerance</h3>
              <Grid container spacing={3}>
                <Grid item>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Oversensitivity:</FormLabel>
                    <RadioGroup row value={values.st_oversensitivity} onChange={handleChange('st_oversensitivity')}>
                        <FormControlLabel value="Y" control={<Radio />} label="Y" />
                        <FormControlLabel value="N" control={<Radio />} label="N" />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Physical discomfort?</FormLabel>
                    <RadioGroup row value={values.st_phys_dis} onChange={handleChange('st_phys_dis')}>
                        <FormControlLabel value="Y" control={<Radio />} label="Y" />
                        <FormControlLabel value="N" control={<Radio />} label="N" />
                    </RadioGroup>
                  </FormControl>
                </Grid>
      
                <Grid item>
                    <FormLabel component="legend">Description of troublesome sounds</FormLabel>
                    <TextField 
                        label=""
                        onChange={handleChange('st_desc_of_troub_sounds')}
                        defaultValue={values.st_desc_of_troub_sounds}
                    />
                </Grid>
              </Grid>
              <br/>
              <hr/>
              <Grid container spacing={3} justify="flex-start">
                <Grid item>
                  <FormControl component="fieldset" >
                    <FormLabel component="legend">Activities prevented or effected</FormLabel>
                    <FormGroup row>
                      <FormControlLabel
                        control={
                          <Checkbox 
                            checked={values.st_activities_concerts} 
                            onChange={handleChecked('st_activities_concerts')} 
                            value="Concerts" 
                          />
                        }
                        label="Concerts"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox 
                            checked={values.st_activities_shopping} 
                            onChange={handleChecked('st_activities_shopping')} 
                            value="Shopping" 
                          />
                        }
                        label="Shopping"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox 
                            checked={values.st_activities_movies} 
                            onChange={handleChecked('st_activities_movies')} 
                            value="Movies" 
                          />
                        }
                        label="Movies"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox 
                            checked={values.st_activities_work} 
                            onChange={handleChecked('st_activities_work')} 
                            value="Work" 
                          />
                        }
                        label="Work"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox 
                            checked={values.st_activities_restaurants} 
                            onChange={handleChecked('st_activities_restaurants')} 
                            value="Restaurants" 
                          />
                        }
                        label="Restaurants"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox 
                            checked={values.st_activities_driving} 
                            onChange={handleChecked('st_activities_driving')} 
                            value="Driving" 
                          />
                        }
                        label="Driving"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox 
                            checked={values.st_activities_sports} 
                            onChange={handleChecked('st_activities_sports')} 
                            value="Sports" 
                          />
                        }
                        label="Sports"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox 
                            checked={values.st_activities_church} 
                            onChange={handleChecked('st_activities_church')} 
                            value="Church" 
                          />
                        }
                        label="Church"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox 
                            checked={values.st_activities_housekeeping} 
                            onChange={handleChecked('st_activities_housekeeping')} 
                            value="Housekeeping" 
                          />
                        }
                        label="Housekeeping"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox 
                            checked={values.st_activities_childcare} 
                            onChange={handleChecked('st_activities_childcare')} 
                            value="Childcare" 
                          />
                        }
                        label="Childcare"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox 
                            checked={values.st_activities_social} 
                            onChange={handleChecked('st_activities_social')} 
                            value="Social" 
                          />
                        }
                        label="Social"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox 
                            checked={values.st_activities_other} 
                            onChange={handleChecked('st_activities_other')} 
                            value="Other" 
                          />
                        }
                        label="Other"
                      />
                    </FormGroup>
                  </FormControl>
      
                </Grid>
              </Grid>
              <hr/>
              <br/>
              <Grid container direction="row" spacing={3} justify="flex-start" alignItems="flex-start">
                <Grid item>
                  <InputLabel>Severity:</InputLabel>
                  <FormControl>
                    <Select
                      value={values.st_severity}
                      onChange={handleChange('st_severity')}
                    >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item>
                  <InputLabel>Annoyance:</InputLabel>
                  <FormControl>
                    <Select
                      value={values.st_annoyance}
                      onChange={handleChange('st_annoyance')}
                    >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item>
                  <InputLabel>Effect On Life:</InputLabel>
                  <FormControl>
                    <Select
                      value={values.st_effectonlife}
                      onChange={handleChange('st_effectonlife')}
                    >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item>
                  <TextField 
                    label="Comments"
                    onChange={handleChange('st_comments')}
                    defaultValue={values.st_comments}
                  />
                </Grid>
              </Grid>
              <br/>
              <hr/>
              <Grid container direction="row" spacing={3} justify="flex-start" alignItems="flex-start">
                <Grid item>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">"Bad Days"</FormLabel>
                    <RadioGroup row value={values.st_bd} onChange={handleChange('st_bd')}>
                      <FormControlLabel value="Y" control={<Radio />} label="Y" />
                      <FormControlLabel value="N" control={<Radio />} label="N" />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item>
                  <TextField 
                    label="Frequency"
                    onChange={handleChange('st_bd_freq')}
                    defaultValue={values.st_bd_freq}
                  />
                </Grid>
              </Grid>
              <br/>
              <hr/>
              <Grid container direction="row" spacing={3} justify="flex-start" alignItems="flex-start">
                <Grid item>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Effect of Sound:</FormLabel>
                    <RadioGroup row value={values.st_bd_freq} onChange={handleChange('st_bd_freq')}>
                      <FormControlLabel value="None" control={<Radio />} label="None" />
                      <FormControlLabel value="Stronger" control={<Radio />} label="Stronger" />
                      <FormControlLabel value="Weaker" control={<Radio />} label="Weaker" />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">How Long:</FormLabel>
                    <RadioGroup row value={values.st_eof_how_long} onChange={handleChange('st_eof_how_long')}>
                      <FormControlLabel value="min" control={<Radio />} label="min" />
                      <FormControlLabel value="hours" control={<Radio />} label="hours" />
                      <FormControlLabel value="days" control={<Radio />} label="days" />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>
              <br/>
              <hr/>
              <Grid container direction="row" spacing={3} justify="flex-start" alignItems="flex-start">
                <Grid item>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Ear Overprotection</FormLabel>
                    <RadioGroup row value={values.st_ear_over} onChange={handleChange('st_ear_over')}>
                      <FormControlLabel value="Y" control={<Radio />} label="Y" />
                      <FormControlLabel value="N" control={<Radio />} label="N" />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item>
                  <TextField 
                    label="% of time"
                    onChange={handleChange('st_ear_over_perc')}
                    defaultValue={values.st_ear_over_perc}
                  />
                </Grid>
                <Grid item>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">In quiet</FormLabel>
                    <RadioGroup row value={values.st_ear_over_inquiet} onChange={handleChange('st_ear_over_inquiet')}>
                      <FormControlLabel value="Y" control={<Radio />} label="Y" />
                      <FormControlLabel value="N" control={<Radio />} label="N" />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>
              <br/>
              <hr/>
              <Grid container direction="row" spacing={3} justify="flex-start" alignItems="flex-start">
                <Grid item>
                <FormLabel component="legend">Any other Sound Tolerance sepecific treatments</FormLabel>
                  <TextField 
                    label=""
                    onChange={handleChange('st_other_st_treat')}
                    defaultValue={values.st_other_st_treat}
                  />
                </Grid>
              </Grid>
              <br/>
              <hr/>
              <Grid container direction="row" spacing={3} justify="flex-start" alignItems="flex-start">
                <Grid item>
                  <FormLabel component="legend">Why is Sound Tolerance a problem</FormLabel>
                  <TextField 
                    label=""
                    onChange={handleChange('st_why_st_prob')}
                    defaultValue={values.st_why_st_prob}
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
