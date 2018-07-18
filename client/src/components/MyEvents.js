import React, { Component } from 'react';
import api from '../api';
import { Link, Route } from 'react-router-dom';
import AddEvent from './AddEvent';
import './Events.css';

// Custom
import EventCard from './EventCard'



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

      <div className="center-players">
      <div className="Events">
        <br/>
      
        {this.state.events.map((c, i) => 
          <div key={i}>
          <EventCard
            fullName={c.eventName}
            date={c.date}
            venue={c.venue}
            description={c.description}
            venueAddress={c.venueAddress}
            pictureUrl={c.pictureUrl} />
          </div>
          )}



        <Route path="/add-event" component={AddEvent} />

        <br/><br/><Link to="/add-event">Add Event</Link>&nbsp;&nbsp;
      </div>
      </div>
    );
  }
}

export default Events;
