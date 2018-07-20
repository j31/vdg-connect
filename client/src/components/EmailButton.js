import React, { Component } from 'react';

import Button from '@material-ui/core/Button';

class EmailButton extends Component {
  constructor(props){
      super(props);
      this.onClick = this.onClick.bind(this);
  }
  
  onClick(){
      console.log(this.props)
      window.open(`mailto:${this.props.email}?subject=${this.props.subject}`);
  }
  render(){
      return <Button onClick={this.onClick} size="small" color="primary">CONTACT</Button>;
  }
}

export default EmailButton;