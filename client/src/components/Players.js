import React, { Component } from 'react';
import api from '../api';

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
        console.log("players ", players)
        this.setState({
          players: players
        })
      })
      .catch(err => console.log(err))
  }
  render() {                
    return (
      <div className="Players">
        <h2>List of Players</h2>
        {this.state.players.map((p, i) => <li key={i}>{p.email}</li>)}
      </div>
    );
  }
}

export default Players;
