import React, { Component } from 'react';
import api from '../api';
import './ConsortDetail.css';

// Component UI 
// import Avatar from '@material-ui/core/Avatar';
// import classNames from 'classnames';
// import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';


class ConsortDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      consort: ""
    }
  }

  componentDidMount() {
    console.log("mounted ", this.props.match.params)
    api.getConsort(this.props.match.params.id)
    .then(result => {
      console.log("result ", result)
      this.setState({
        consort: result
      })
      
    })
    .catch(err => console.log(err))
  }



  render() {                
    return (
      <div className="ConsortDetail">
      <h5>Hi, you're on the consort detail page but it's not formatted yet.</h5>
    
      <p>{this.state.consort.consortName}</p>
      </div>
    );
  }
  }
  
  export default ConsortDetail;
  
  
  