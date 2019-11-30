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

export default class TinnitusForm extends Component {
    
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  render() {
    const { values, handleChange, handleChecked } = this.props;

    return (
      <React.Fragment>
        <h3>Tinnitus</h3>
        <Grid container spacing={3}>
          <Grid item>
            <FormControl component="fieldset">
              <FormLabel component="legend">Tin Area</FormLabel>
              <RadioGroup row value={values.tin_area} onChange={handleChange('tin_area')}>
                <FormControlLabel value="RE" control={<Radio />} label="RE" />
                <FormControlLabel value="LE" control={<Radio />} label="LE" />
                <FormControlLabel value="Both" control={<Radio />} label="Both" />
                <FormControlLabel value="Head" control={<Radio />} label="Head" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl component="fieldset">
              <FormLabel component="legend">Tin Area Freq</FormLabel>
              <RadioGroup row value={values.tin_area_freq} onChange={handleChange('tin_area_freq')}>
                <FormControlLabel value="Intermittent" control={<Radio />} label="Intermittent" />
                <FormControlLabel value="Constant" control={<Radio />} label="Constant" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl component="fieldset">
              <FormLabel component="legend">Tin Onset</FormLabel>
              <RadioGroup row value={values.tin_onset} onChange={handleChange('tin_onset')}>
                <FormControlLabel value="Gradual" control={<Radio />} label="Gradual" />
                <FormControlLabel value="Sudden" control={<Radio />} label="Sudden" />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item>
            <TextField 
              label="When"
              onChange={handleChange('tin_when')}
              defaultValue={values.tin_when}
            />
          </Grid>
          <Grid item>
            <FormControl component="fieldset">
              <FormLabel component="legend">Tin Fluctuations</FormLabel>
              <RadioGroup row value={values.tin_fluctuations} onChange={handleChange('tin_fluctuations')}>
                <FormControlLabel value="Y" control={<Radio />} label="Y" />
                <FormControlLabel value="N" control={<Radio />} label="N" />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item>
            <TextField 
              label="Tin Sound desc."
              onChange={handleChange('tin_desc_of_t_sound')}
              defaultValue={values.tin_desc_of_t_sound}
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
                      checked={values.tin_activities_concentration === 'Y'} 
                      onChange={handleChecked('tin_activities_concentration')} 
                      value="Concentration" 
                    />
                  }
                  label="Concentration"
                />
                <FormControlLabel
                  control={
                    <Checkbox 
                      checked={values.tin_activities_sleep === 'Y'} 
                      onChange={handleChecked('tin_activities_sleep')} 
                      value="Sleep" 
                    />
                  }
                  label="Sleep"
                />
                <FormControlLabel
                  control={
                    <Checkbox 
                      checked={values.tin_activities_qra === 'Y'} 
                      onChange={handleChecked('tin_activities_qra')} 
                      value="QRA" 
                    />
                  }
                  label="QRA"
                />
                <FormControlLabel
                  control={
                    <Checkbox 
                      checked={values.tin_activities_work === 'Y'} 
                      onChange={handleChecked('tin_activities_work')} 
                      value="Work" 
                    />
                  }
                  label="Work"
                />
                <FormControlLabel
                  control={
                    <Checkbox 
                      checked={values.tin_activities_restaurants === 'Y'} 
                      onChange={handleChecked('tin_activities_restaurants')} 
                      value="Restaurants" 
                    />
                  }
                  label="Restaurants"
                />
                <FormControlLabel
                  control={
                    <Checkbox 
                      checked={values.tin_activities_sports === 'Y'} 
                      onChange={handleChecked('tin_activities_sports')} 
                      value="Sports" 
                    />
                  }
                  label="Sports"
                />
                <FormControlLabel
                  control={
                    <Checkbox 
                      checked={values.tin_activities_social === 'Y'} 
                      onChange={handleChecked('tin_activities_social')} 
                      value="Social" 
                    />
                  }
                  label="Social"
                />
                <FormControlLabel
                  control={
                    <Checkbox 
                      checked={values.tin_activities_other === 'Y'} 
                      onChange={handleChecked('tin_activities_other')} 
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
        <FormLabel component="legend">% of time when: Aware(1) - Annoyed(10)</FormLabel>
        <br/>
        <Grid container direction="row" spacing={3} justify="flex-start" alignItems="flex-start">
          

          <Grid item>
            <InputLabel>Severity:</InputLabel>
            <FormControl>
              <Select
                value={values.tin_severity}
                onChange={handleChange('tin_severity')}
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
                value={values.tin_annoyance}
                onChange={handleChange('tin_annoyance')}
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
                value={values.tin_effectonlife}
                onChange={handleChange('tin_effectonlife')}
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
              onChange={handleChange('tin_comments')}
              defaultValue={values.tin_comments}
            />
          </Grid>
        </Grid>
        <br/>
        <hr/>
        <Grid container direction="row" spacing={3} justify="flex-start" alignItems="flex-start">
          <Grid item>
            <FormControl component="fieldset">
              <FormLabel component="legend">"Bad Days"</FormLabel>
              <RadioGroup row value={values.tin_bd} onChange={handleChange('tin_bd')}>
                <FormControlLabel value="Y" control={<Radio />} label="Y" />
                <FormControlLabel value="N" control={<Radio />} label="N" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item>
            <TextField 
              label="Frequency"
              onChange={handleChange('tin_bd_freq')}
              defaultValue={values.tin_bd_freq}
            />
          </Grid>
        </Grid>
        <br/>
        <hr/>
        <Grid container direction="row" spacing={3} justify="flex-start" alignItems="flex-start">
          <Grid item>
            <FormControl component="fieldset">
              <FormLabel component="legend">Effect of Sound:</FormLabel>
              <RadioGroup row value={values.tin_eff_of_sound} onChange={handleChange('tin_eff_of_sound')}>
                <FormControlLabel value="None" control={<Radio />} label="None" />
                <FormControlLabel value="Louder" control={<Radio />} label="Louder" />
                <FormControlLabel value="Softer" control={<Radio />} label="Softer" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl component="fieldset">
              <FormLabel component="legend">How Long:</FormLabel>
              <RadioGroup row value={values.tin_eof_how_long} onChange={handleChange('tin_eof_how_long')}>
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
              <RadioGroup row value={values.tin_ear_over} onChange={handleChange('tin_ear_over')}>
                <FormControlLabel value="Y" control={<Radio />} label="Y" />
                <FormControlLabel value="N" control={<Radio />} label="N" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item>
            <TextField 
              label="% of time"
              onChange={handleChange('tin_ear_over_perc')}
              defaultValue={values.tin_ear_over_perc}
            />
          </Grid>
          <Grid item>
            <FormControl component="fieldset">
              <FormLabel component="legend">In quiet</FormLabel>
              <RadioGroup row value={values.tin_ear_over_inquiet} onChange={handleChange('tin_ear_over_inquiet')}>
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
          <FormLabel component="legend">Any other Tinnitus sepecific treatments</FormLabel>
            <TextField 
              label=""
              onChange={handleChange('tin_other_t_treat')}
              defaultValue={values.tin_other_t_treat}
            />
          </Grid>
        </Grid>
        <br/>
        <hr/>
        <Grid container direction="row" spacing={3} justify="flex-start" alignItems="flex-start">
          <Grid item>
            <FormLabel component="legend">Why is Tinnitus a problem</FormLabel>
            <TextField 
              label=""
              onChange={handleChange('tin_why_t_prob')}
              defaultValue={values.tin_why_t_prob}
            />
          </Grid>
        </Grid>
        <br/>
        <hr/>
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
