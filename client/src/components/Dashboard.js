import React, { Component } from 'react';

// Custom Components 
import PlayersNearMe from './PlayersNearMe';
import MyConsorts from './MyConsorts';
import MyEvents from './MyEvents';

class Home extends Component {

  render() {                
    return (
      <div className="Home">
        <h1>Welcome Back</h1>

        <h3>My Consorts</h3>
        <MyConsorts />
        
        <h3>My Events</h3>
        <MyEvents />

        <h3>My Players</h3>
        <PlayersNearMe />
        <br /><br />

 
      </div>
    );
  }
}

export default Home;
