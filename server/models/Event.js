const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({  

  eventName: {
    type: String,
    required: [true, 'The event name is required']
  },

  eventType: String,
  
  date: Date, 

  description: String,

  _organizer:{type: mongoose.Schema.Types.ObjectId, ref:'User'},
  
  _consorts: [{type: mongoose.Schema.Types.ObjectId, ref:'Consort'}],

  _players: [{type: mongoose.Schema.Types.ObjectId, ref:'User'}],

  venue: String,
  venueAddress: String,
  location: { type: { type: String }, coordinates: [Number] },

  pictureUrl: String

});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event