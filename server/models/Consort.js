const mongoose = require('mongoose');
// const passportLocalMongoose = require('passport-local-mongoose');
const { Schema } = mongoose;

const consortSchema = new Schema({
  consortName:    String,

  _organizer:{type: mongoose.Schema.Types.ObjectId, ref:'User'},
  
  _members: [{type: mongoose.Schema.Types.ObjectId, ref:'User'}]  
  
});

const Consort = mongoose.model('Consort', consortSchema);

module.exports = Consort;

