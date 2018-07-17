import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import api from '../api';
import './Home.css';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


import Login from './Login';
import Signup from './Signup';


class Home extends Component {

  render() {                
    return (
      <div className="Home">
        <div className="headline">
        <div className="headline1">A QUIRKY COMMUNITY WHO LOVE THE</div><br />
        <div className="headline2">VIOLA DA GAMBA</div><br />
        </div>
        <br/><br/>
        
        
       
          
    

      <Grid container spacing={24}>
          <Grid item xs>
          <i class="fas fa-hands-helping fa-2x"></i><br/><br/>

     
        <p className="section-text">Sign up to stay connected to the VdG community.</p>

        <Button variant="contained" color="primary" component={Link} to="/signup">
          Sign Up
        </Button><br/><br/>

        <p className="section-text">Already registered?</p>

        <Button variant="outlined" color="primary" component={Link} to="/login">
          Log In
        </Button><br/><br/>

          </Grid>

          <Grid item xs>
          <i class="fas fa-info fa-2x"></i><br/><br/>
          <p className="section-text">Brooklyn poutine echo park marfa palo santo tofu snackwave drinking vinegar ugh pabst 3 wolf moon. Quinoa master cleanse la croix hell of. Dreamcatcher fingerstache hella health goth humblebrag scenester. Health goth stumptown aesthetic disrupt bicycle rights cronut squid brunch succulents lyft lo-fi forage letterpress you probably haven't heard of them.</p><br/><br/>
          </Grid>

        <Grid item xs>
        <i class="fas fa-calendar-alt fa-2x"></i>
        </Grid>
      </Grid>

      <Grid container spacing={18}>
    
        {/* <i class="fas fa-headphones fa-2x"></i><br/><br/><br/> */}
  
        <Grid item xs>
          <i class="fab fa-spotify fa-2x"></i><br/><br/><br/>
          <iframe src="https://open.spotify.com/embed?uri=spotify:user:andrewtlane:playlist:5Hes2UeE14GBiIKbdJ5Mpb" height="240" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

        </Grid>
        <Grid item xs>
        <i class="fab fa-youtube fa-2x"></i><br/><br/><br/>
          <iframe src="https://www.youtube.com/embed/YvpU3UYtVmI?start=10" height="240" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe><br/><br/>
          {/* <iframe src="https://www.youtube.com/embed/IP0YrMKZhkM?start=10" frameborder="0" allow="autoplay; 
          encrypted-media" allowfullscreen></iframe><br/><br/>
          <iframe src="https://www.youtube.com/embed/C4m1KHjp03M?start=10" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe><br/><br/> */}
        </Grid>
        <Grid item xs>
        <img src="../img/npr.jpg" alt="NPR Logo" className="npr-logo"/><br/><br/><br/>
        <iframe src="https://www.npr.org/player/embed/157991138/158127329?start=25" height="240" frameborder="0" scrolling="no" title="NPR embedded audio player"></iframe><br/><br/><br/><br/>
        
        </Grid>
      </Grid>


        <br /><br />

   


  

        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default Home;
