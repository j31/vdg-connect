import React, { Component } from 'react';
import api from '../api';

import './Events.css';

// Custom
import EventCard from './EventCard'



class MyEvents extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: []
    }
  }

  componentDidMount() {
    api.getProfile()
      .then(user => {

        const events = user.favEvents
      
        for (let i in events) {
          events[i].fav = "CANCEL"
        }

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
  
      </div>
      </div>
    );
  }
}

export default MyEvents;
