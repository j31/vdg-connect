import React, { Component } from 'react';
import api from '../api';

import './Profile.css';

import Button from '@material-ui/core/Button';


// For Google geocoding 
// import Geocode from "react-geocode";





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
      pictureUrl: "", 
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
    // console.log(e)
    const playerInfo = {
      fullName: this.state.fullName,
      address1: this.state.address1,
      address2: this.state.address2,
      city:     this.state.city,
      stateCounty:    this.state.stateCounty,
      postalCode:  this.state.postalCode,
      country:  this.state.country,
    };   

    // console.log("playerInfo ", playerInfo)
    
      // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
    // Geocode.setApiKey("AIzaSyBvWzRQzBctgTfvkNzKLuy2BlDGcqpVDBw");

    api.postProfile(this.state.file, playerInfo)
    .then(result => {
      // console.log('posted player profile')
      this.props.history.push("/") // Redirect to the home page
    })
    .catch(err => {
      console.log('ERROR')
    })
  }

    // const combinedAddress = `${this.state.address1},${this.state.address2},${this.state.city},${this.state.stateCounty},${this.state.postalCode},${this.state.country}`


    // console.log("combinedAddress ", combinedAddress)
    // Geocode.fromAddress(combinedAddress)
    // .then( response => {
    //     const { lat, lng } = response.results[0].geometry.location;
    //     console.log(lat, lng);
    //     playerInfo.location = { type: 'Point', coordinates: [lng, lat] }

    //     console.log("Location ", playerInfo.location)

    //     api.postProfile(this.state.file, playerInfo)
    //     .then(result => {
    //       // console.log('posted player profile')
    //       this.props.history.push("/") // Redirect to the home page
    //     })
    //     .catch(err => {
    //       console.log('ERROR')
    //     })
        
    //   },
    //   error => {
    //     console.error(error);
    //   }
    // );



  
  
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
          pictureUrl: data.pictureUrl,

          address1: data.address1,
          address2: data.address2,
          city:     data.city,
          stateCounty:    data.stateCounty,
          postalCode:  data.postalCode,
          country:  data.country,

          location:  data.location,
        })
      })
  };





  render() {  
    // console.log("rendered profile")              
    return (
      <div className="Profile">
        
        <br/>
        <h1>Your Profile</h1>
        <p className="form-message">Make any changes you like, then click save.</p> <br/>
      
        <form>

  <img className="ProfilePhoto" src={this.state.pictureUrl} alt="profile" /><br/><br/>


          <table className="center-table">
            <tbody>
           <tr>
              <td className="input-label" >Name</td>
              <td>
                <input type="text" 
                className="input-text" 
                value={this.state.fullName} 
                onChange={(e) => {this.handleInputChange("fullName", e)}} 
                />
              </td>
              </tr>
          
    <tr>
          <td className="input-label" >Address 1</td> 
          <td><input type="text" 
          className="input-text" 
          value={this.state.address1} 
          onChange={(e) => {this.handleInputChange("address1", e)}} 
          /> </td>
          </tr>
    <tr>
          <td className="input-label" >Address 2</td> 
          <td><input type="text" 
          className="input-text" 
          value={this.state.address2} 
          onChange={(e) => {this.handleInputChange("address2", e)}}/> </td>
          
          </tr>
    <tr>
          <td className="input-label" >City</td> 
          <td><input type="text" 
          className="input-text" 
          value={this.state.city} 
          onChange={(e) => {this.handleInputChange("city", e)}} 
          /></td>
          </tr>
    <tr>
          <td className="input-label" >State or County</td> 
          <td><input type="text" 
          className="input-text" 
          value={this.state.stateCounty} 
          onChange={(e) => {this.handleInputChange("stateCounty", e)}} 
          /></td>
          </tr>
    <tr>
          <td className="input-label" >Postal Code</td> 
          <td><input type="text" 
          className="input-text" 
          value={this.state.postalCode} 
          onChange={(e) => {this.handleInputChange("postalCode", e)}} 
          /></td>
          </tr>
    <tr>
          <td className="input-label" >Country</td> 
          <td><input type="text" 
          className="input-text" 
          value={this.state.country} 
          onChange={(e) => {this.handleInputChange("country", e)}} 
          /></td>
          </tr>

          
            <tr>
            <td className="input-label" >Level</td>       
            <td>
              <input type="text" 
                className="input-text" 
                value={this.state.playerLevel}  
                onChange={(e) => {this.handleInputChange("playerLevel", e)}} 
                />
            </td>

            </tr>
          
            <tr>
            <td className="input-label" >Notes</td>  
            <td><input type="text" 
          className="input-text" 
          value={this.state.playerNotes} 
          onChange={(e) => {this.handleInputChange("playerNotes", e)}} 
          /></td>
          </tr>

                          <tr>
          <td className="input-label" >Change Profile Photo</td> 
        
          <td><input type="file" 
          className="input-text input-label" 
          onChange={(e)=>this.handleChange(e)} 
          /> </td>
    </tr>


          <tr>
          <td></td><td>
          <Button variant="contained" color="primary" onClick={(e) => this.handleClick(e)}>
          Save Changes
          </Button><br/><br/>
</td>

          </tr>

        </tbody>
        </table>
        </form>

      </div>
    );
  }
}

export default Profile;
