import React, { Component } from 'react';
import './Dashboard.css';

// Custom Components 
import PlayersNearMe from './PlayersNearMe';
import MyConsorts from './MyConsorts';
import MyEvents from './MyEvents';

class Home extends Component {

  render() {                
    return (
      <div className="Home">
        {/* <h3>DASHBOARD</h3> */}

        <br/>

        <h3 className="section-header">MY CONSORTS</h3>
        <MyConsorts />
        
        <h3 className="section-header">MY EVENTS</h3>
        <MyEvents />

        <h3 className="section-header">FAVORITE PLAYERS</h3>
        <PlayersNearMe />

  
        <br/><br/>

 
      </div>
    );
  }
}

export default Home;
