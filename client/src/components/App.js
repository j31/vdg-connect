import React, { Component } from 'react';

import MenuAppBar from './MenuAppBar';
import api from '../api';

import './App.css';


// import { userInfo } from 'os';

window.api = api;

class App extends Component {
  constructor(props) {
    super(props)

    api.loadUser();
  }


  render() {                
    return (
      <div className="App">

   <MenuAppBar />


      </div>
    );
  }
}

export default App;
