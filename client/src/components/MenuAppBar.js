import React from 'react';
import { NavLink, Link, Switch, Route } from 'react-router-dom';
import api from '../api';
import './MenuAppBar.css';

// Custom Components
import Home from './Home';
import Dashboard from './Dashboard';
import Players from './Players';
import Consorts from './Consorts';
import ConsortDetail from './ConsortDetail';
import Profile from './Profile';
import Events from './Events';
import AddEvent from './AddEvent';
import Login from './Login';
import FirstLogin from './FirstLogin';
import Signup from './Signup';

// Material UI Components
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';

// Material UI style 
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import amber from '@material-ui/core/colors/amber';

var ReactRotatingText = require('react-rotating-text');



const theme = createMuiTheme({
  palette: {
    primary: amber,
    secondary: {
      main: '#f44336',
    },
  },
});

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};






class MenuAppBar extends React.Component {
  state = {
    anchorEl: null,
    splashClasses: "splashBanner"
  };

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleShrink = () => {
    this.setState({ splashClasses: "hidden"})
  };

  handleLogoutClick(e) {
    api.logout()
  };

  componentDidMount() {
    {api.isLoggedIn() && this.handleShrink()}
  }


  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);


    return (
      <MuiThemeProvider theme={theme}>
      <div className={classes.root}>

        <AppBar position="static">
          <Toolbar>
            {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
              
            </IconButton> */}
            <Link to="/">
            <img src="../img/gamba-big.png" alt="VdGSA Logo" className="App-logo"/>
            </Link>
            
            <Typography variant="title" color="inherit" className={classes.flex}>
            <div className="Nav">
       
          {api.isLoggedIn() && <Button size="large" color="default" component={Link} to="/">HOME</Button>}

          {api.isLoggedIn() && <Button size="large" color="default" component={Link} to="/players">PLAYERS</Button>}

          {api.isLoggedIn() && <Button size="large" color="default" component={Link} to="/consorts">CONSORTS</Button>}

          {api.isLoggedIn() && <Button size="large" color="default" component={Link} to="/events">EVENTS</Button>}

          </div>
            </Typography>
            
              <div>
              {api.isLoggedIn() && <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>}

          
                {!api.isLoggedIn() && <Button variant="outlined" color="default" component={Link} to="/login">Login</Button> }
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                
                  {api.isLoggedIn() && <MenuItem onClick={this.handleClose}><Link to="/profile">Edit Profile</Link></MenuItem>}
                  {api.isLoggedIn() && <MenuItem onClick={this.handleClose}><Link to="/" onClick={(e) => this.handleLogoutClick(e)}>Log Out</Link></MenuItem>}
                </Menu>
              </div>
          </Toolbar>

            
            <div className={this.state.splashClasses}>
            <br/><br/>
            <ReactRotatingText 
              items={['Welcome to', 'Authentic', 'Quirky', 'Beautiful', 'Resurgant',
              'Friendly', 'Soul-touching', 'Viola da']} 
              pause={3500}
              cursor={false}
              />
              &nbsp;Gamba.<br/>

              <Button variant="outlined" color="default" onClick={this.handleShrink}> CONTINUE </Button>
              </div>
         



        </AppBar>

        <Switch>


          {!api.isLoggedIn() && <Route path="/" exact component={Home} />}
          {api.isLoggedIn() && <Route path="/" exact component={Dashboard} />}
          <Route path="/players" component={Players} />
          
          <Route path="/consorts/:id" component={ConsortDetail} />
          <Route path="/consorts" component={Consorts} />
          
          <Route path="/events" component={Events} />
          <Route path="/add-event" component={AddEvent} />
     
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/welcome" component={FirstLogin} />
          <Route path="/profile" component={Profile} />

          <Route render={() => <h2>404</h2>} />
        </Switch>   
      </div>
      </MuiThemeProvider>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);
