const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passport = require('passport');
const config = require('../configs/index');

const uploadCloudinary = require('../configs/cloudinary');

// Route to get all users
router.get('/', (req, res, next) => {
  User.find()
    .sort({ fullName: 1 })
    .then(users => {
      res.json(users)
    })
});


// Route to get users near Berlin
router.get('/local', (req, res, next) => {
  
  User.find(
    {
      location:
        { $near:
           {
             $geometry: { type: "Point",  coordinates: [ 13.39, 52.53 ] },
             $maxDistance: 100000
           }
        }
    }
 )
  .sort({ fullName: 1 })
  .then(users => {
  res.json(users)
})
});


router.get('/profile', passport.authenticate("jwt", config.jwtSession), (req, res, next) => {
  console.log("req.user ", req.user)
  User.findById(req.user._id)
    .populate('favEvents')
    .populate('favPlayers')
    .populate('favConsorts')
    .then(user => {
      console.log(user)
      res.json(user)
    })
});

router.post('/profile', passport.authenticate("jwt", config.jwtSession), uploadCloudinary.single('picture'), (req, res, next) => {
  console.log("req.body.location ", req.body.location)
  console.log("************ req.file.url ", req.file.url)
  const id = req.user._id;

  const playerInfo = {
    fullName:  req.body.fullName,
    address1:  req.body.address1,
    address2:  req.body.address2,
    city:  req.body.city,
    stateCounty:  req.body.stateCounty,
    postalCode:  req.body.postalCode,
    country:  req.body.country,
    // location:  req.body.location,

    pictureUrl: req.file.url
  };      

  console.log('playerInfo in routes ', playerInfo)

  User.findByIdAndUpdate(id, playerInfo)
  .then(profile => {
    console.log ("updated player profile! ", playerInfo)
  })
});




router.post('/favorites', passport.authenticate("jwt", config.jwtSession), (req, res, next) => {

  const id = req.user._id;

  if (req.body.favEvent) {
    const eventId = req.body.favEvent
    User.findById(id)
    .then(user => {
      const newEvents = user.favEvents

      // console.log ("newEvents ", newEvents)
      // console.log ("eventId ", eventId)
      // console.log ("indexOf ", newEvents.indexOf(eventId))

      const i = newEvents.indexOf(eventId)

      if ( i === -1 ) {
        newEvents.push(eventId)
      } else {
        newEvents.splice(i, 1)
      }
        
      const playerInfo = {
        favEvents:  newEvents,
      }
      User.findByIdAndUpdate(id, playerInfo)
      .then(user => {
      })
    })
  }

  if (req.body.favPlayer) {
    const playerId = req.body.favPlayer
    User.findById(id)
    .then(user => {
      const newPlayers = user.favPlayers
      newPlayers.push(playerId)
      const playerInfo = {
        favPlayers:  newPlayers,
      }
      User.findByIdAndUpdate(id, playerInfo)
      .then(user => {
      })
    })
  }

  if (req.body.favConsort) {
    const eventId = req.body.favConsort
    User.findById(id)
    .then(user => {
      const newConsorts = user.favConsorts
      newConsorts.push(eventId)
      const playerInfo = {
        favConsorts:  newConsorts,
      }
      User.findByIdAndUpdate(id, playerInfo)
      .then(user => {
      })
    })
  }
  

});



// Route to add a picture on one user with Cloudinary
// To perform the request throw Postman, you need
// - Endpoint: POST http://localhost:3030/api/first-user/users/pictures
// - Select: Body > form-data
// - Put as key: picture (and select "File")
// - Upload your file
// To perform the request in HTML:
//   <form method="post" enctype="multipart/form-data" action="http://localhost:3030/api/users/first-user/pictures">
//     <input type="file" name="picture" />
//     <input type="submit" value="Upload" />
//   </form>
// router.post('/first-user/pictures', uploadCloudinary.single('picture'), (req, res, next) => {
//   console.log('DEBUG req.file', req.file);
//   User.findOneAndUpdate({}, { pictureUrl: req.file.url })
//     .then(() => {
//       res.json({
//         success: true,
//         pictureUrl: req.file.url
//       })
//     })
// });

module.exports = router;