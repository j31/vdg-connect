import React, { Component } from 'react';

// Custom Components 
import PlayersNearMe from './PlayersNearMe';
import MyConsorts from './MyConsorts';
import Events from './Events';

class Home extends Component {

  render() {                
    return (
      <div className="Home">
        <h1>Dashboard</h1>

        {/* <h3>My Events</h3> */}
        <Events />
        <h3>My Consorts</h3>
        <MyConsorts />
        <h3>Players Near Me</h3>
        <PlayersNearMe />
        <br /><br />

 
      </div>
    );
  }
}

export default Home;
