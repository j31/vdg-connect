import React, { Component } from 'react';
import api from '../api';



// Custom Components 
import './PlayersNearMe.css';

// Material UI Components 
import SimpleMediaCard from './SimpleMediaCard'

class Players extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playersAll: [],
      playersShow: [],
      searchText: ""
    }
  }
  componentDidMount() {
    api.getLocalPlayers()
      .then(players => {
        // console.log ("local players ", players)
        this.setState({
          playersAll: players,
          playersShow: players
        })
      })
      .catch(err => console.log(err))
  }

  handleInputChange(stateFieldName, event) {
    let newState = {}
    newState[stateFieldName] = event.target.value
  
    this.setState(newState)
  }

  newSearch(event) {
    const searchString = event.target.value.toUpperCase()

    if (searchString !== "") {
      const players = this.state.playersAll.slice()
 
      const filterList = players.filter( e => e.fullName
        .toUpperCase()
        .includes(searchString)
      )

      this.setState({
        playersShow: filterList
      });
    } else {
      this.setState({
        playersShow: this.state.playersAll
      });
    }
  }


  render() {                
    return (
      <div className="PlayersNearMe">


        {/* <h2>Players Near Me</h2>
        <form>
          <input placeholder=" search by name" className="input-text"  type="text" value={this.props.searchText} onChange={(e) => this.newSearch(e)} />
        </form> */}

        
        <div className="center-players">

          {this.state.playersShow.map((p, i) => 
            <div key={i} className="ProfileCard">
              {/* <p>{p.fullName}</p>
              <p><img src={p.pictureUrl} className="ProfilePhoto" alt="player"/></p>
              <p>{p.playsTreble && "Treble"}</p>
              <p>{p.playsAlto && "Alto"}</p>
              <p>{p.playsBass && "Bass"}</p>
              <p>{p.playerLevel}</p> */}

              <SimpleMediaCard 
                fullName={p.fullName}
                pictureUrl={p.pictureUrl}
              />

            </div>)}
          </div>



      </div>
    );
  }
}

export default Players;


