import React, { Component } from 'react';
import api from '../api';
import { Link, Route } from 'react-router-dom';
import AddEvent from './AddEvent';

class Events extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: []
    }
  }
  componentDidMount() {
    api.getEvents()
      .then(events => {
        console.log(events)
        this.setState({
          events: events
        })
      })
      .catch(err => console.log(err))
  }
  render() {                
    return (
      <div className="Events">
        <br />
      <Link to="/add-event">Add Event</Link>&nbsp;&nbsp;
        <h2>List of events</h2>
        {this.state.events.map((c, i) => <li key={i}>{c.eventName}</li>)}
        <Route path="/add-event" component={AddEvent} />
      </div>
     
    );
  }
}

export default Events;
