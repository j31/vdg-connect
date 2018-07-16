import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import api from '../api';
import Login from './Login';
import Signup from './Signup';


class Home extends Component {

  render() {                
    return (
      <div className="Home">
        <h3>Connect with Viola da Gamba players around the world.</h3>

        <br /><br />

        {!api.isLoggedIn() && <Link to="/signup">Sign Up</Link>}
        <br />
        <br />
        {!api.isLoggedIn() && <Link to="/login">Login</Link>}

        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default Home;
