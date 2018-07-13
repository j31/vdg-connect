import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import Players from './Players';
import Consorts from './Consorts';
import Profile from './Profile';

import Login from './Login';
import Signup from './Signup';
import api from '../api';
import './App.css';
// import { userInfo } from 'os';

window.api = api;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: []
    }
    api.loadUser();
  }

  handleLogoutClick(e) {
    api.logout()
  }

  render() {                
    return (
      <div className="App">

        <header className="App-header">
    
          <img src="../img/vdgsa_logo.jpg" alt="VdGSA Logo" className="App-logo"/>
          <h1 className="App-title">CONNECT</h1>

          <div className="Nav">
            <Link to="/">Home</Link> 
            <Link to="/players">Players</Link> 
            <Link to="/consorts">Consorts</Link> 
            {!api.isLoggedIn() && <Link to="/signup">Sign Up</Link> }
            {!api.isLoggedIn() && <Link to="/login">Login</Link> }

            {api.isLoggedIn() && <Link to="/" onClick={(e) => this.handleLogoutClick(e)}>Logout</Link> }
            {api.isLoggedIn() && <Link to="/profile">Profile</Link>}
           
          </div>
        </header>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/players" component={Players} />
          <Route path="/consorts" component={Consorts} />
          {/* <Route path="/countries" component={Countries} />
          <Route path="/add-country" component={AddCountry} /> */}
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />

          <Route render={() => <h2>404</h2>} />
        </Switch>        
      </div>
    );
  }
}

export default App;
