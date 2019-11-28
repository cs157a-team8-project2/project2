import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar, FlatButton } from 'material-ui';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import UserForm from './components/UserForm';
import './App.css';
import Main from './components/Main';
import axios from 'axios';

const API_PATH = 'http://localhost:1992/api/contact/oracle.php';

const styles = {
  button: {
    margin: "15px 5px 15px 5px",
  },
  white: {
    color:"white"
  },
  center: {
    margin: "auto",
    width: "50%",
    border: "3px solid #868b96",
    padding: "10px",
  },
  appbar : {
    backgroundColor: "rgb(51, 66, 71)"
  }
}

function App() {
  return (
    <MuiThemeProvider>
      <Router>
        <div>
          <AppBar style={styles.appbar} title="eTRT" showMenuIconButton={false}>
            <div style={styles.button}>
              <Link to="/"><FlatButton><div style={styles.white}>Home</div></FlatButton></Link>
            </div>
            {/* <div style={styles.button}>
              <Link to="/Patients"><FlatButton><div style={styles.white}>Patients</div></FlatButton></Link>
            </div>
            <div style={styles.button}>
              <Link to="/Visits"><FlatButton><div style={styles.white}>Visits</div></FlatButton></Link>
            </div>
            <div style={styles.button}>
              <Link to="/Analytics"><FlatButton><div style={styles.white}>Analytics</div></FlatButton></Link>
            </div>
            <div style={styles.button}>
              <Link to="/Other"><FlatButton><div style={styles.white}>Other</div></FlatButton></Link>
            </div> */}
          </AppBar>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <div style={styles.center}>
            <Switch>
              <Route path="/Visits">
                <Visits />
              </Route>
              <Route path="/AddNewVisit">
                <AddNewVisit />
              </Route>
              <Route path="/AddInterview">
                <AddInterview />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </MuiThemeProvider>
  );
}

function Visits() {
  return ( 
    <div>
      <h2>Visits</h2>
      <Grid container direction="row" justify="center" alignItems="center" spacing={3}>
        <Grid item xs>
          <Link to="/AddNewVisit"><Button variant="contained" color="primary"><h2>Add New Visit</h2></Button></Link>
        </Grid>
        <Grid item xs>
          <Button variant="contained" disabled><h2>View / Edit Visits</h2></Button>
        </Grid>
      </Grid>
    </div>
  );
}
function AddNewVisit() {
  return ( 
    <div>
      <h2>Visit</h2>
      <Grid container direction="row" justify="center" alignItems="center" spacing={3}>
        <Grid item xs>
          <Link to="/AddInterview"><Button variant="contained" color="primary"><h2>Add New Interview</h2></Button></Link>
        </Grid>
      </Grid>
    </div>
  );
}

function AddInterview() {
  return (
    <div>
      <h2>Interview</h2>
      <UserForm />
    </div>
  );
}

function Home() {
  return <Main />;
}

export default App;
