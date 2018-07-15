var express = require('express');
const Event = require('../models/event')

var router = express.Router();

// Route to get all events
router.get('/', (req, res, next) => {
  Event.find()
    .then(events => {
      res.json(events);
    })
    .catch(err => next(err))
});


// Route to add a event
router.post('/', (req, res, next) => {
  let {eventName, description} = req.body
  Event.create({eventName, description})
    .then(event => {
      res.json({
        success: true,
        event
      });
    })
    .catch(err => next(err))
});

module.exports = router;
