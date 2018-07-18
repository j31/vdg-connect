import React from 'react';


// Material UI Components 
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

function SimpleMediaCard(props) {
  const { classes } = props;

  return (
    <div>
      <Card className={classes.card}>
        {/* <CardMedia
          className={classes.media}
          image={props.pictureUrl}
          title="Event Photo"
        /> */}
        <CardContent>
          <Typography gutterBottom variant="title" component="h2">
            {props.fullName}<br/>
 
          </Typography>
          <Typography component="p">
            {props.date}<br/>
            {props.venue}<br/>
            {props.description}<br/>
            {props.venueAddress}<br/>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            CONTACT
          </Button>
          <Button size="small" color="primary">
            DETAILS
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);