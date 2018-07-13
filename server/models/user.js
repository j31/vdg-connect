const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  // email: String, // Defined with passportLocalMongoose
  // hashed: String, // Defined with passportLocalMongoose
  // salt: String, // Defined with passportLocalMongoose
  // name: {type:String, required: [true, "A name is required"]},

  fullName:    String,
  address1:    String,
  address2:    String,
  city:        String,
  stateCounty:       String,
  postalCode:  String,
  country:     String,

  location: { type: { type: String }, coordinates: [Number] },

  playsTreble: Boolean,
  playsAlto:   Boolean,
  playsBass:   Boolean,

  playerLevel:       String,
  
  playerNotes:  String,
  
  playerPictureUrl: String,

});

userSchema.index({ location: "2dsphere" });

// Add "email" (instead of "username"), "hash" and "salt" field to store the email (as username), the hashed password and the salt value
// Documentation: https://github.com/saintedlama/passport-local-mongoose
userSchema.plugin(passportLocalMongoose, {
  usernameField: "email"
});

module.exports = mongoose.model('User', userSchema);