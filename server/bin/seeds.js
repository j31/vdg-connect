require('dotenv').config();

require ('../configs/database');

const mongoose = require('mongoose');
const User     = require('../models/User');
const Consort     = require('../models/Consort');

// Connect to DB
// mongoose
//   .connection.openUri(process.env.MONGODB_URI)
//   .then(() => {
//     console.log('seeds.js: connected to Mongo!')
//   }).catch(err => {
//     console.error('seeds.js: problems connecting to mongo', err)
//   });


// Create admin/admin user
const lizzy = new User({
  email: "elizabeth@gmail.com",
  fullName: "Elizabeth Fish",
  playsTreble: true,
  playsAlto: false,
  playsBass: true,
  playerLevel: "Intermediate",
  playerNotes: "Killing cats! ",
  address1: "Bernauer Str. 31",
  address2: "",
  city: "Berlin",
  stateCounty: "",
  postalCode: "10115",
  country: "Germany",
  location: { type: 'Point', coordinates: [13.39, 52.53] },
});

const password1 = "lizzy"

const john = new User({
  email: "john@gmail.com",
  fullName: "John Fish",
  playsTreble: false,
  playsAlto: false,
  playsBass: true,
  playerLevel: "Beginner",
  playerNotes: "Not too shabby",
  address1: "Bernauer Str. 31",
  address2: "",
  city: "Berlin",
  stateCounty: "",
  postalCode: "10115",
  country: "Germany",
  location: { type: 'Point', coordinates: [13.38, 52.52] },
});

const password2 = "john"

// User.register(john, password2, err => {
//   if (err) return next(err);
//   res.json({ success: true });
// });


// const newUsers = [john, lizzy]


// Delete all and save admin user
User.deleteMany()
  .then(() => User.register(lizzy, password1))
  .then(() => User.register(john, password2))
  .then(userDocuments => {
    console.log("Successfully seeded MongoDB with this many users ", userDocuments)
    mongoose.connection.close()
  })
  .then( () => {
    const consort1 = new Consort({ consortName: "Don't Fret!"});
    const consort2 = new Consort({ consortName: "Perlman's Pluckers"});
  
   Consort.deleteMany()
    .then(() => Consort.create([consort1, consort2]))
    .then(userDocuments => {
      console.log("Successfully seeded MongoDB with this many  ", userDocuments)
      mongoose.connection.close()
    })
    .catch(err => {throw(err)})
  })
  .catch(err => {throw(err)})



  
