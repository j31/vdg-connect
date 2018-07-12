require('dotenv').config();

require ('../configs/database');

const mongoose = require('mongoose');
const User     = require('../models/User');



// Connect to DB
mongoose
  .connection.openUri(process.env.MONGODB_URI)
  .then(() => {
    console.log('seeds.js: connected to Mongo!')
  }).catch(err => {
    console.error('seeds.js: problems connecting to mongo', err)
  });


// Create admin/admin user
const lizzy = new User({
  username: "elizabeth@gmail.com",
  fullName: "Elizabeth Fish",
  playsTreble: true,
  playsAlto: false,
  playsBass: true,
  playerLevel: "Intermediate",
  playerNotes: "Killing cats!"
});

const password1 = "lizzy"

User.register(lizzy, password1, err => {
  if (err) return next(err);
  res.json({ success: true });
});

// const john = new User({
//   username: "john@gmail.com",
//   fullName: "John Fish",
//   playsTreble: false,
//   playsAlto: false,
//   playsBass: false,
//   playerLevel: "Beginner",
//   playerNotes: "That crazy cat can jam!"
// });

// const password2 = "john"

// User.register(john, password2, err => {
//   if (err) return next(err);
//   res.json({ success: true });
// });


// const newUsers = [john, lizzy]

// Delete all and save admin user
User.deleteMany()
  .then(() => User.create(lizzy))
  .then(userDocuments => {
    console.log("Successfully seeded MongoDB with this many users ", userDocuments)
    mongoose.connection.close()
  })
  .catch(err => {throw(err)})