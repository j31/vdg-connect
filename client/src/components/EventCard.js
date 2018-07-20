import React from 'react';
import './EventCard.css';
import api from '../api';

// Material UI Components 
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const styles = {
  card: {
    maxWidth: 230,
    margin: 15
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};


 

class SimpleMediaCard extends React.Component {
  constructor(props) {

    super(props)
    this.state = {
      fav: props.fav
    }
 
  }

  

  handleFavorite(id) {
    const favorite = {
      favEvent: id
    }

    api.postFavorites(favorite)
    .then(result => {
      this.props.history.push("/") // Redirect to the home page
    })

    .catch(err => {
      console.log('ERROR')
    })
    window.location.reload();
  };


  render() {

    const { classes } = this.props;

    return (
      <div>
        <Card className={classes.card}>
  
          <CardContent>
            
          <Typography gutterBottom variant="body2">
            <div className="event-type">
              {this.props.eventType}
            </div><br/>
          </Typography>

            <Typography gutterBottom variant="title">
              {this.props.fullName}<br/>
            </Typography>
          

            <Typography>
              {this.props.date}<br/>
              {this.props.venue}<br/>
              {this.props.description}<br/>
              {this.props.venueAddress}<br/>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" onClick={() => this.handleFavorite(this.props._id)}>{this.props.fav}
            </Button>

          </CardActions>
        </Card>
      </div>
    );
  }
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);