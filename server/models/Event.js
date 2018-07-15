const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({  
  eventName: {
    type: String,
    required: [true, 'The event name is required']
  },

  _organizer:{type: mongoose.Schema.Types.ObjectId, ref:'User'},
  
  _consorts: [{type: mongoose.Schema.Types.ObjectId, ref:'Consort'}],

  // location: { type: { type: String }, coordinates: [Number] },

  description: {
    type: String,
  },
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event