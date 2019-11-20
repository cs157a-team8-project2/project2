import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar, FlatButton } from 'material-ui';
import UserForm from './components/UserForm';
import './App.css';
import Main from './components/Main';

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
            <div style={styles.button}>
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
            </div>
          </AppBar>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <div style={styles.center}>
            <Switch>
              <Route path="/Patients">
                <Patients />
              </Route>
              <Route path="/Visits">
                <Visits />
              </Route>
              <Route path="/Analytics">
                <Analytics />
              </Route>
              <Route path="/Other">
                <Other />
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

function Patients() {
  return <h2>Patients</h2>;
}

function Visits() {
  return <h2>Visits</h2>;
}

function Analytics() {
  return <h2>Analytics</h2>;
}

function Other() {
  return (
    <UserForm />
  );
}

function Home() {
  return <Main />;
}

export default App;
