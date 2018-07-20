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
        this.setState({
          events: events
        })

        api.getProfile()
        .then(user => {
          const favEvents = user.favEvents.map( e => e._id )

          const events = this.state.events.slice()

          for (let i in events) {
  
            if (favEvents.indexOf(events[i]._id) === -1 ) {
              events[i].fav = "ATTEND"
            } else {
              events[i].fav = "CANCEL"
            }
          }
          
          this.setState({
            events: events
          })

        })
        .catch(err => console.log(err))
      })
      .catch(err => console.log(err))
  }
  
  render() {                
    return (

       
      <div className="Events">
        <br/><br/>
      
        <h2>Browse Upcoming Gamba Events</h2><br/>

        <div className="Events-container">
        {this.state.events.map((c, i) => 
          <div key={i}>
          <EventCard
            _id={c._id}
            fullName={c.eventName}
            eventType={c.eventType}
            date={c.date}
            venue={c.venue}
            description={c.description}
            venueAddress={c.venueAddress}
            fav={c.fav}
            pictureUrl={c.pictureUrl} />
          </div>
          )}
        </div>


        <Route path="/add-event" component={AddEvent} />

        <br/><br/><Link to="/add-event">Add Event</Link>&nbsp;&nbsp;
      </div>
    
    );
  }
}

export default Events;
