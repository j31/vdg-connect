import React, { Component } from 'react';
// import axios from 'axios';
// import { Route, Switch, NavLink, Link } from 'react-router-dom';
import api from '../api';


class AddEvent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      eventName: "",
      description: "",
      message: null
    }
  }

  handleInputChange(stateFieldName, event) {
    let newState = {}
    newState[stateFieldName] = event.target.value
  
    this.setState(newState)
  }

  handleClick(e) {
    e.preventDefault()
    console.log(this.state.eventName, this.state.description)
    let data = {
      eventName: this.state.eventName,
      description: this.state.description,
    }
    api.postEvents(data)
      .then(result => {
        console.log('SUCCESS!')
        this.setState({
          eventName: "",
          description: "",
          message: `Your event '${this.state.eventName}' has been created`
        })
        setTimeout(() => {
          this.setState({
            message: null
          })
        }, 2000)
      })
      .catch(err => {
        console.log('ERROR')
      })
  }
  render() {                
    return (
      <div className="AddEvent">
        <h2>Add event</h2>
        <form>
          Name: <input type="text" value={this.state.eventName} onChange={(e) => {this.handleInputChange("eventName", e)}} /> <br/>
          Description <textarea value={this.state.description} cols="30" rows="10" onChange={(e) => {this.handleInputChange("description", e)}} ></textarea> <br/>
          <button onClick={(e) => this.handleClick(e)}>Create event</button>
        </form>
        <div style={{
          margin: 10,
          backgroundColor: "green",
          display: this.state.message ? "block" : "none"
        }}>
          {this.state.message}
        </div>
      </div>
    );
  }
}

export default AddEvent;
