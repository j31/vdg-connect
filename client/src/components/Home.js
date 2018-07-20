import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import './Home.css';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


import Login from './Login';
import Signup from './Signup';


class Home extends Component {

  render() {                
    return (
      <div className="Home">
       
     
      <br/><br/>
        
  
  

        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default Home;
