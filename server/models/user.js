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
  State:       String,
  PostalCode:  String,
  Country:     String,

  playsTreble: String,
  playsAlto:   String,
  playsBass:   String,

  playerLevel:       String,
  
  playerNotes:  String,
  
  pictureUrl: String,

});

// Add "email" (instead of "username"), "hash" and "salt" field to store the email (as username), the hashed password and the salt value
// Documentation: https://github.com/saintedlama/passport-local-mongoose
userSchema.plugin(passportLocalMongoose, {
  usernameField: "email"
});

module.exports = mongoose.model('User', userSchema);