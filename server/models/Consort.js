const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const { Schema } = mongoose;

const consortSchema = new Schema({

  consortName:    String,
  
});

const Consort = mongoose.model('Consort', consortSchema);

module.exports = Consort;