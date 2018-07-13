import React, { Component } from 'react';
import api from '../api';


class Consorts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      consorts: []
    }
  }
  componentDidMount() {
    api.getConsorts()
      .then(consorts => {
        
        this.setState({
          consorts: consorts
        })
        console.log(consorts)
      })
      .catch(err => console.log(err))
  }
  render() {                
    return (
      <div className="Consorts">
        <h2>Consorts in Berlin</h2>
       
        {this.state.consorts.map((c, i) => 
        
          <div key={i} className="ProfileCard">
            <p>{c.consortName}</p>
          </div>)}

      </div>
    );
  }
}

export default Consorts;


