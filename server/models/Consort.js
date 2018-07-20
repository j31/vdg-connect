const mongoose = require('mongoose');
// const passportLocalMongoose = require('passport-local-mongoose');
const { Schema } = mongoose;

const consortSchema = new Schema({
  consortName:    String,

  _members: [{type: mongoose.Schema.Types.ObjectId, ref:'User'}],
  

  venue: String,
  address1:    String,
  address2:    String,
  city:        String,
  stateCounty:       String,
  postalCode:  String,
  country:     String,

  location: { type: { type: String }, coordinates: [Number] },

  isProfessional: Boolean,

  notes:  String,
  
  pictureUrl: String,
  
});

const Consort = mongoose.model('Consort', consortSchema);

module.exports = Consort;

