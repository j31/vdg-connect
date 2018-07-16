import React, { Component } from 'react';
import api from '../api';

// Custom Components 
import './Players.css';

// Material UI Components 
import SimpleMediaCard from './SimpleMediaCard'

class Players extends Component {
  constructor(props) {
    super(props)
    this.state = {
      players: []
    }
  }
  componentDidMount() {
    api.getPlayers()
      .then(players => {
        
        this.setState({
          players: players
        })
      })
      .catch(err => console.log(err))
  }
  render() {                
    return (
      <div className="Players">
        <h2>Players in Berlin</h2>

        
        {this.state.players.map((p, i) => 
          <div key={i} className="ProfileCard">
            {/* <p>{p.fullName}</p>
            <p><img src={p.playerPictureUrl} className="ProfilePhoto" alt="player"/></p>
            <p>{p.playsTreble && "Treble"}</p>
            <p>{p.playsAlto && "Alto"}</p>
            <p>{p.playsBass && "Bass"}</p>
            <p>{p.playerLevel}</p> */}

            <SimpleMediaCard 
              fullName={p.fullName}
              playerPictureUrl={p.playerPictureUrl}
            />

            
  
          </div>)}



      </div>
    );
  }
}

export default Players;


