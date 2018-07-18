import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import api from '../api';

import Button from '@material-ui/core/Button';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
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
    api.login(this.state.email, this.state.password)
      .then(result => {
        console.log('Login success for ', result)
        this.props.history.push("/") // Redirect to the home page
      })
      .catch(err => {
        console.log('ERROR: ', err)
      })
  }

  render() {   
    return (
      <div className="Login">
      <br/>
        <h1>Log In</h1>
        <p className="form-message">Please log in with your email and password.</p>
        <form>
          <input placeholder=" email" className="input-text"  type="text" value={this.state.email} onChange={(e) => {this.handleInputChange("email", e)}} /> <br/>
          <input placeholder=" password" className="input-text" type="password" value={this.state.password} onChange={(e) => {this.handleInputChange("password", e)}}  /> <br/>
          {/* <button onClick={(e) => this.handleClick(e)}>Login</button> */}

         <Button variant="contained" color="primary" onClick={(e) => this.handleClick(e)}>
          Login
          </Button><br/><br/>


          <p className="form-message">Not signed up?  &nbsp;&nbsp; Please <Link to="/signup">sign up</Link>.</p>


        </form>
      </div>
    );
  }
}

export default Login;
