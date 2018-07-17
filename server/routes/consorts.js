const express = require('express');
const router = express.Router();
const Consort = require('../models/consort');
// const passport = require('passport');
// const config = require('../configs/index');

// const uploadCloudinary = require('../configs/cloudinary');




// Route to get all consorts
router.get('/', (req, res, next) => {
  Consort.find()
    .populate('_members')
    .then(consorts => {
      res.json(consorts)
    })
});


// Route to get consort by id
router.get('/:id', (req, res, next) => {
  
  Consort.findById(req.params.id)
    .populate('_members')
    .then(consort => {
      res.json(consort)
    })
});



module.exports = router;