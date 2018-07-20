import React, { Component } from 'react';
import api from '../api';
import './Players.css';

// Custom Components 

// Material UI Components 
import SimpleMediaCard from './SimpleMediaCard'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';


class Players extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playersAll: [],
      playersShow: [],
      localPlayers: [],
      searchText: "",
      limitByLocation: false
    }
  }
  componentDidMount() {
    api.getPlayers()
    .then(players => {
      
      this.setState({
        playersAll: players,
        playersShow: players
      })
    })
    .catch(err => console.log(err))

    api.getLocalPlayers()
    .then(localPlayers => {
      // console.log ("local players ", players)
      this.setState({
        localPlayers: localPlayers
      })

    })
    .catch(err => console.log(err))
  }


  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
    
    if (this.state.limitByLocation === false) {
      this.setState({playersShow: this.state.localPlayers});
    } else {
      this.setState({playersShow: this.state.playersAll});
    }

  };

  handleInputChange(stateFieldName, event) {
    let newState = {}
    newState[stateFieldName] = event.target.value
    this.setState(newState)
  }

  newSearch(event) {
    const searchString = event.target.value.toUpperCase()

    var players = []
    if (this.state.limitByLocation === true) {
      players = this.state.localPlayers.slice()
    } else {
      players = this.state.playersAll.slice()
    }
    
    if (searchString !== "") {
      
      const filterList = players.filter( e => e.fullName
        .toUpperCase()
        .includes(searchString)
      )
      this.setState({
        playersShow: filterList
      });
    } else {
      this.setState({
        playersShow: players
      });
    }
    console.log("all ", this.state.playersAll)
    console.log("local ", this.state.localPlayers)
    console.log("show ", this.state.playersShow)
  }


  render() {                
    return (
      <div className="Players">
        <h2>Connect with Fellow Players</h2>


        <form>
          <input placeholder=" search by name" className="input-text"  type="text" value={this.props.searchText} onChange={(e) => this.newSearch(e)} />
        
         {/* <Button variant="outlined" color="primary" onClick={(e) => this.newSearch(e)}>
          Search
          </Button><br/><br/> */}

          &nbsp;&nbsp;&nbsp;&nbsp;
        <FormControlLabel
          control={
            <Switch
              checked={this.state.limitByLocation}
              onChange={this.handleChange('limitByLocation')}
              value="limitBy"
              color="primary"
            />
          }
          label="Limit to players in your area"
        />
       
        </form>

        
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
                level={p.playerLevel}
                email={p.email}
              />

            </div>)}
          </div>



      </div>
    );
  }
}

export default Players;


