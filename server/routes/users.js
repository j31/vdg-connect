const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const config = require('../configs/index');

const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer');

const storage = cloudinaryStorage({
  cloudinary,
  folder: 'my-images',
  allowedFormats: ['jpg', 'png', 'gif'],
});

const parser = multer({ storage });


// Route to get all users
router.get('/', (req, res, next) => {
  User.find()
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

router.post('/profile', passport.authenticate("jwt", config.jwtSession), (req, res, next) => {
  console.log("req.body ", req.body)

  const id = req.user._id;

  const playerInfo = {
    'fullName':  req.body.fullName
  };      

  console.log("post profile id ", id)
  console.log("post profile fullName ", playerInfo.fullName)

  User.findByIdAndUpdate(id, playerInfo)
  .then(profile => {
    console.log ("updated player profile!")
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
router.post('/first-user/pictures', parser.single('picture'), (req, res, next) => {
  console.log('DEBUG req.file', req.file);
  User.findOneAndUpdate({}, { pictureUrl: req.file.url })
    .then(() => {
      res.json({
        success: true,
        pictureUrl: req.file.url
      })
    })
});

module.exports = router;