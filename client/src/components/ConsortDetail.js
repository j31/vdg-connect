import React, { Component } from 'react';
import api from '../api';
import './ConsortDetail.css';

// Component UI 
// import Avatar from '@material-ui/core/Avatar';
// import classNames from 'classnames';
// import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';


class ConsortDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      consort: "",
      members: []
    }
  }

  componentDidMount() {
    console.log("mounted ", this.props.match.params)
    api.getConsort(this.props.match.params.id)
    .then(result => {
      console.log("result ", result)
      this.setState({
        consort: result,
        members: result._members
      })
      console.log("members ", this.state.members)
    })
    .catch(err => console.log(err))
  }



  render() {                
    return (
      <div className="ConsortDetail">
      <h2>{this.state.consort.consortName}</h2>
    
      {this.state.members.map((m, i) =>
            <div key={i}>
            <Avatar
            alt={m.fullName}
            src={m.pictureUrl}
            className="avatars" />
            </div>)}


      <p>{this.state.consort.venue}</p>
      <p>{this.state.consort.address1}</p>
      <p>{this.state.consort.address2}</p>
      <p>{this.state.consort.city},&nbsp;{this.state.consort.postalCode}
        {/* {this.state.consort.stateCounty} */}
      </p>
      <p>{this.state.consort.country}</p>
      {/* <p>{this.state.consort.location}</p> */}
      <p>{this.state.consort.isProfessional}</p>
      <p>{this.state.consort.notes}</p>
      <p>{this.state.consort.pictureUrl}</p>
    
      <p></p>
      </div>
    );
  }
  }
  
  export default ConsortDetail;
  
  
  