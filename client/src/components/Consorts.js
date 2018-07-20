import React, { Component } from 'react';
import api from '../api';
import './Consorts.css';

// Custom
import EmailButton from './EmailButton';

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
      
      this.setState({
        consorts: consorts
      })
      
    })
    .catch(err => console.log(err))
  }
  render() {                
    return (
      <div className="Consorts">
      <h2>Join a Consort</h2>
      {/* <p className="form-message">Can't find a good match? &nbsp;  Create a new consort!</p> */}
      
        <table className="consort-table">
          <tbody>
        {this.state.consorts.map((c, i) => 
          
          
            <tr key={i}>
              <td><h3>{c.consortName}</h3></td>
            
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
                {c.notes}
                </td>

                <td>  

                   <EmailButton 
                     size="small" 
                    color="primary" 
                    email={c._members[0].email} 
                    subject={c.consortName} />

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
  
  
  