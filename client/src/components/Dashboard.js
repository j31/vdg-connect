import React, { Component } from 'react';

import api from '../api';

// Custom Components 
import PlayersNearMe from './PlayersNearMe';


class Home extends Component {

  render() {                
    return (
      <div className="Home">
        <h1>Welcome back </h1><br /><br />

        
        <h3>My Events</h3><br /><br />
        <h3>My Consorts</h3><br /><br />
        <h3>Players Near Me</h3>
        <PlayersNearMe />
        <br /><br />

 
      </div>
    );
  }
}

export default Home;
