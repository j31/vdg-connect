import React, { Component } from 'react';

import api from '../api';
import './MyConsorts.css';

// Component UI 
import Avatar from '@material-ui/core/Avatar';


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
      
    
      let myConsorts = []
      myConsorts.push(consorts[0])
      myConsorts.push(consorts[2])

      this.setState({
        consorts: myConsorts
      })

    })
    .catch(err => console.log(err))
  }
  render() {                
    return (
      <div className="Consorts">
  
      <table className="consort-table">
        <tbody>
      {this.state.consorts.map((c, i) => 
        
       
        <tr key={i}>
        
        <td><h5>{c.consortName}</h5></td>
        
          <td>
          {c._members.map((m, i) =>
            <div key={m.pictureUrl}>
            <Avatar
            alt={m.fullName}
            src={m.pictureUrl}
            className="avatars" />
            </div>
          )}
          </td>
          <td>  

            {c.venue}
            {/* <Button size="small" color="primary" component={Link} to={'/consorts/' + c._id} >
              DETAILS
            </Button> */}
          </td>
        </tr>
      )}
      </tbody>
      </table>
    
        </div>
      );
    }
  }
  
  export default Consorts;
  
  
  