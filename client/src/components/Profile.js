import React, { Component } from 'react';
import api from '../api';

// For Google geocoding 
import Geocode from "react-geocode";





class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fullName: "",
      playsTreble: undefined,
      playsAlto: undefined,
      playsBass: undefined,
      level: "",
      playerNotes: "",
      playerPictureUrl: "", 
      file: undefined,

      address1:    "",
      address2:    "",
      city:        "",
      stateCounty: "",
      postalCode:  "",
      country:     "",
      location:    "",
    }
  }



  handleInputChange(stateFieldName, event) {
    let newState = {}
    newState[stateFieldName] = event.target.value
  
    this.setState(newState)
  }

  handleChange(e) {
    // console.log('handleChange');
    // console.log('DEBUG e.target.files[0]', e.target.files[0]);
    this.setState({
      file: e.target.files[0],
    })
  }

  handleClick(e) {
    e.preventDefault()
    // console.log('begin handle click on profile submit')
    console.log(e)
    const playerInfo = {
      fullName: this.state.fullName,
      address1: this.state.address1,
      address2: this.state.address2,
      city:     this.state.city,
      stateCounty:    this.state.stateCounty,
      postalCode:  this.state.postalCode,
      country:  this.state.country,
    };   

    console.log("playerInfo ", playerInfo)
    
      // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
    // Geocode.setApiKey("AIzaSyBvWzRQzBctgTfvkNzKLuy2BlDGcqpVDBw");

    const combinedAddress = `${this.state.address1},${this.state.address2},${this.state.city},${this.state.stateCounty},${this.state.postalCode},${this.state.country}`


    console.log("combinedAddress ", combinedAddress)
    Geocode.fromAddress(combinedAddress)
    .then( response => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
        playerInfo.location = { type: 'Point', coordinates: [lng, lat] }

        console.log("Location ", playerInfo.location)

        api.postProfile(this.state.file, playerInfo)
        .then(result => {
          // console.log('posted player profile')
          this.props.history.push("/") // Redirect to the home page
        })
        .catch(err => {
          console.log('ERROR')
        })
        
      },
      error => {
        console.error(error);
      }
    );



  }

  
  componentDidMount() {
    // console.log("componentMounted")
    // console.log(api.loadUser())
    api.getProfile()
      .then(data => {
        this.setState({
          _id: data._id,
          fullName: data.fullName,
          playsTreble: data.playsTreble,
          playsAlto: data.playsAlto,
          playsBass: data.playsBass,
          playerLevel: data.playerLevel,
          playerNotes: data.playerNotes,
          playerPictureUrl: data.playerPictureUrl,

          address1: data.address1,
          address2: data.address2,
          city:     data.city,
          stateCounty:    data.stateCounty,
          postalCode:  data.postalCode,
          country:  data.country,

        })
      })
  };





  render() {  
    // console.log("rendered profile")              
    return (
      <div className="Profile">
        
        <h2>{this.state.fullName}'s Profile</h2>
        <form>
          Name: <input type="text" 
          value={this.state.fullName} 
          onChange={(e) => {this.handleInputChange("fullName", e)}} 
          /><br/><br/>

          <img className="ProfilePhoto" src={this.state.playerPictureUrl} alt="profile" /><br />

          Profile Photo: <input type="file" 
          onChange={(e)=>this.handleChange(e)} 
          /> <br/><br/>

          Address 1: <input type="text" 
          value={this.state.address1} 
          onChange={(e) => {this.handleInputChange("address1", e)}} 
          /><br/><br/>

          Address 2: <input type="text" 
          value={this.state.address2} 
          onChange={(e) => {this.handleInputChange("address2", e)}} 
          /><br/><br/>

          City: <input type="text" 
          value={this.state.city} 
          onChange={(e) => {this.handleInputChange("city", e)}} 
          /><br/><br/>

          State or County: <input type="text" 
          value={this.state.stateCounty} 
          onChange={(e) => {this.handleInputChange("stateCounty", e)}} 
          /><br/><br/>

          PostalCode: <input type="text" 
          value={this.state.postalCode} 
          onChange={(e) => {this.handleInputChange("postalCode", e)}} 
          /><br/><br/>

          Country: <input type="text" 
          value={this.state.country} 
          onChange={(e) => {this.handleInputChange("country", e)}} 
          /><br/><br/>

          <p>Level: {this.state.playerLevel}        </p>
          <p>Notes: {this.state.playerNotes}  </p>
          <button onClick={(e) => this.handleClick(e)}>Save Changes</button>
        </form>

      </div>
    );
  }
}




export default Profile;
