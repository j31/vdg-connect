import React, { Component } from 'react';
import api from '../api';
import './Signup.css';

import Button from '@material-ui/core/Button';



class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      name: "",
      password: "",
    }
  }

  handleInputChange(stateFieldName, event) {
    let newState = {}
    newState[stateFieldName] = event.target.value
    this.setState(newState)
  }

  handleClick(e) {
    e.preventDefault()
    let data = {
      email: this.state.email,
      name: this.state.name,
      password: this.state.password,
    }
    api.signup(data)
      .then(result => {
        console.log('SUCCESS!')
        this.props.history.push("/welcome") // Redirect to the login page
      })
      .catch(err => {
        console.log('ERROR')
      })
  }

  render() {   
    return (
      <div className="Signup">
        <br/>
        <h1>Join the VdG Community!</h1>
        <p className="form-message">Your account will always be free.  We respect your privacy.</p>
        <form>


          <input placeholder=" email" className="input-text" type="text" value={this.state.email} onChange={(e) => {this.handleInputChange("email", e)}} /> <br/>
          <input placeholder=" name" className="input-text" type="text" value={this.state.name} onChange={(e) => {this.handleInputChange("name", e)}} /> <br/>
          <input placeholder=" password" className="input-text" type="password" value={this.state.password} onChange={(e) => {this.handleInputChange("password", e)}}  /> <br/>
          {/* <button onClick={(e) => this.handleClick(e)}>Signup</button> */}
          <Button variant="contained" color="primary" onClick={(e) => this.handleClick(e)}>
          Sign up
          </Button><br/><br/>

        </form>
      </div>
    );
  }
}

export default Signup;
