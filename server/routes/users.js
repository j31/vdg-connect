const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const config = require('../configs/index');

const uploadCloudinary = require('../configs/cloudinary');




// Route to get all users
// router.get('/', (req, res, next) => {
//   User.find()
//     .then(users => {
//       res.json(users)
//     })
// });



// Route to get users near Berlin
router.get('/', (req, res, next) => {
  
  User.find(
    {
      location:
        { $near:
           {
             $geometry: { type: "Point",  coordinates: [ 13.39, 52.53 ] },
             $maxDistance: 1
           }
        }
    }
 )
  .then(users => {
  res.json(users)
})
});



router.get('/profile', passport.authenticate("jwt", config.jwtSession), (req, res, next) => {
  console.log("req.user ", req.user)
  User.findById(req.user._id)
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

    playerPictureUrl: req.file.url
  };      

  console.log('playerInfo in routes ', playerInfo)

  User.findByIdAndUpdate(id, playerInfo)
  .then(profile => {
    console.log ("updated player profile! ", playerInfo)
  })
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