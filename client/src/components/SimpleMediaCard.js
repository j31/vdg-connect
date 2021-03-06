import React from 'react';

// Custom
import EmailButton from './EmailButton';

// Material UI Components 
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
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
        <CardMedia
          className={classes.media}
          image={props.pictureUrl}
          title="Player Photo"
        />
        <CardContent>
          <Typography gutterBottom variant="title" component="h2">
            {props.fullName}
          </Typography>
          <Typography component="p">
           {props.level}
          </Typography>
        </CardContent>
        <CardActions>

        {/* <IconButton aria-label="Add to favorites">
            +
        </IconButton> */}

    
        <EmailButton 
          size="small" 
          color="primary" 
          email={props.email}
          subject="Hi from Gamba!"
           />
       

          {/* <Button size="small" color="primary">
            DETAILS
          </Button> */}
        </CardActions>
      </Card>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);