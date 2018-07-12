import React, { Component } from 'react';
// import { Route, Switch, NavLink, Link } from 'react-router-dom';
import api from '../api';
// import './Profile.css';

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fullName: "",
      playsTreble: null,
      playsAlto: null,
      playsBass: null,
      level: null,
      playerNotes: null,
    }
  }

  handleInputChange(stateFieldName, event) {
    let newState = {}
    newState[stateFieldName] = event.target.value
  
    this.setState(newState)
  }

  handleClick(e) {
    e.preventDefault()
    console.log('inside handle click on profile submit')

    const playerInfo = {
      'fullName':  this.state.fullName
    };   

    console.log("playerInfo ", playerInfo)

    api.postProfile(playerInfo)
      .then(result => {
        console.log('API post profile seemed to work, but...')
        this.props.history.push("/") // Redirect to the home page
      })
      .catch(err => {
        console.log('ERROR')
      })
  }

  componentDidMount() {
    console.log("componentMounted")
    console.log(api.loadUser())
    api.getProfile()
      .then(data => {
        this.setState({
          _id: data._id,
          fullName: data.fullName,
          playsTreble: data.playsTreble,
          playsAlto: data.playsAlto,
          playsBass: data.playsBass,
          playerLevel: data.playerLevel,
          playerNotes: data.playerNotes
        })
      })
  }


  render() {  
    console.log("rendered profile")              
    return (
      <div className="Profile">
        
        <h2>Profile</h2>
        <form>
          Name: <input type="text" value={this.state.fullName} onChange={(e) => {this.handleInputChange("fullName", e)}} /> <br/>
          <p>{this.state.fullName}     </p>
          <p>{this.state.level}        </p>
          <p>{this.state.playerNotes}  </p>
          <button onClick={(e) => this.handleClick(e)}>Save Changes</button>
        </form>
      </div>
    );
  }
}

export default Profile;
