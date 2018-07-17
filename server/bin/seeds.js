require('dotenv').config();

require ('../configs/database');

const mongoose = require('mongoose');
const User     = require('../models/User');
const Consort     = require('../models/Consort');
const Event     = require('../models/Event');

// var faker = require('faker');

const user1 = new User({
  email: "jeremy@gmail.com",
  fullName: "Jeremy Allen",
  playsTreble: false,
  playsAlto: false,
  playsBass: true,
  playerLevel: "Intermediate",
  playerNotes: "",
  address1: "",
  address2: "",
  city: "Oklahoma City",
  stateCounty: "OK",
  postalCode: "73129",
  country: "USA",
  location: { type: 'Point', coordinates: [-97.477518, 35.469371] },

  pictureUrl: 'http://res.cloudinary.com/cldpix/image/upload/v1531809096/my-images/fsonzoiwjkz6lvu5p7bx.jpg'
});


const user2 = new User({
  email: "eric@gmail.com",
  fullName: "Eric Miller",
  playsTreble: true,
  playsAlto: true,
  playsBass: true,
  playerLevel: "Advanced",
  playerNotes: "",
  address1: "",
  address2: "",
  city: "Berlin",
  stateCounty: "",
  postalCode: "10115",
  country: "Germany",
  location: { type: 'Point', coordinates: [13.39, 52.55] },
  pictureUrl: 'http://res.cloudinary.com/cldpix/image/upload/v1531810425/my-images/teekof4jaeijsxryzimu.png'
});


const user3 = new User({
  email: "ken@gmail.com",
  fullName: "Ken Perlow",
  playsTreble: true,
  playsAlto: true,
  playsBass: true,
  playerLevel: "Advanced",
  playerNotes: "Board member VdGSA",
  address1: "Dickensweg 17",
  address2: "",
  city: "Berlin",
  stateCounty: "",
  postalCode: "14055",
  country: "Germany",
  location: { type: 'Point', coordinates: [13.2716, 52.4794315] },
  pictureUrl: 'http://res.cloudinary.com/cldpix/image/upload/v1531732681/my-images/kkubogku5f40asxh1dsx.jpg'
});

const user4 = new User({
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
  pictureUrl: 'http://res.cloudinary.com/cldpix/image/upload/v1531645684/my-images/zmk8uqv86syfgdz0glmw.jpg'
});

const user5 = new User({
  email: "hille@gmail.com",
  fullName: "Hille Perle",
  playsTreble: true,
  playsAlto: false,
  playsBass: false,
  playerLevel: "Professional",
  playerNotes: "",
  address1: "",
  address2: "",
  city: "Berlin",
  stateCounty: "Berlin",
  postalCode: "10115",
  country: "Germany",
  location: { type: 'Point', coordinates: [13.40, 52.60] },
  pictureUrl: 'http://res.cloudinary.com/cldpix/image/upload/v1531809849/my-images/oyppnap7gxsmeqh8nlaa.jpg'
});

const user6 = new User({
  email: "michell@gmail.com",
  fullName: "Michelle Wang",
  playsTreble: true,
  playsAlto: true,
  playsBass: true,
  playerLevel: "Advanced",
  playerNotes: "",
  address1: "3843 Duck Creek Road",
  address2: "",
  city: "Brisbane",
  stateCounty: "CA",
  postalCode: "94005",
  country: "USA",
  location: { type: 'Point', coordinates: [-122.485721, 
    37.742477] },
  pictureUrl: 'http://res.cloudinary.com/cldpix/image/upload/v1531809070/my-images/ny8o4bend8atny4cnbn2.jpg'
});

const user7 = new User({
  email: "alta@gmail.com",
  fullName: "Alta Kelton",
  playsTreble: true,
  playsAlto: false,
  playsBass: true,
  playerLevel: "Intermediate",
  playerNotes: "",
  address1: "4244 Leo Street",
  address2: "",
  city: "Denver",
  stateCounty: "CO",
  postalCode: "80202",
  country: "USA",
  location: { type: 'Point', coordinates: [-104.986202, 39.718694] },
  pictureUrl: 'http://res.cloudinary.com/cldpix/image/upload/v1531810086/my-images/bernly1bstrz8yi5kkhl.jpg'
});

const user8 = new User({
  email: "justina@gmail.com",
  fullName: "Justina Cruz",
  playsTreble: false,
  playsAlto: false,
  playsBass: true,
  playerLevel: "Advanced",
  playerNotes: "Board member VdGSA",
  address1: "4536 Johnstown Road",
  address2: "",
  city: "Elk Grove Village",
  stateCounty: "IL",
  postalCode: "60007",
  country: "USA",
  location: { type: 'Point', coordinates: [-87.911909, 42.055929] },
  pictureUrl: 'http://res.cloudinary.com/cldpix/image/upload/v1531810309/my-images/zks1isfmkmbf1ye3sgqd.jpg'
});

const user9 = new User({
  email: "johnm@gmail.com",
  fullName: "John Mathews",
  playsTreble: false,
  playsAlto: false,
  playsBass: true,
  playerLevel: "Beginner",
  playerNotes: "",
  address1: "2963 Kovar Road",
  address2: "",
  city: "Auburn",
  stateCounty: "MA",
  postalCode: "01501",
  country: "USA",
  location: { type: 'Point', coordinates: [-71.880014, 42.178238] },
  pictureUrl: 'http://res.cloudinary.com/cldpix/image/upload/v1531810178/my-images/fcrieb4dwgy6fgw4qibl.jpg'
});

const user10 = new User({
  email: "johanna@gmail.com",
  fullName: "Johnanna Rose",
  playsTreble: true,
  playsAlto: true,
  playsBass: true,
  playerLevel: "Advanced",
  playerNotes: "",
  address1: " Ackerstraße 76",
  address2: "",
  city: "Berlin",
  stateCounty: "Berlin",
  postalCode: "10115",
  country: "Germany",
  location: { type: 'Point', coordinates: [13.2716, 52.4794728] },
  pictureUrl: 'http://res.cloudinary.com/cldpix/image/upload/v1531809205/my-images/vwcbqj2o4dqu9ahg5oky.jpg'
});



// function getRandomUser() {
//   var randomCard = faker.helpers.createCard(); // random contact card containing many properties
//     // console.log(randomCard)
  
//   const user = new User({
//     email: randomCard.email,
//     fullName: randomCard.name,
//     playsTreble: true,
//     playsAlto: true,
//     playsBass: true,
//     playerLevel: "Advanced",
//     playerNotes: "Board member VdGSA",
//     address1: randomCard.address.streetB,
//     address2: randomCard.address.streetC,
//     city: randomCard.address.city,
//     stateCounty: randomCard.address.state,
//     postalCode: randomCard.address.zipcode,
//     country: randomCard.address.country,
//     location: { type: 'Point', coordinates: [randomCard.address.geo.lng, randomCard.address.geo.lat] },
//     pictureUrl: 'http://res.cloudinary.com/cldpix/image/upload/v1531732681/my-images/kkubogku5f40asxh1dsx.jpg'
//   });

//   console.log ("random user ", user)
//   return user
// }


// Delete all and save admin user
User.deleteMany()
  .then(() => User.register(user1, 'p'))
  .then(() => User.register(user2, 'p'))
  .then(() => User.register(user3, 'p'))
  .then(() => User.register(user4, 'p'))
  .then(() => User.register(user5, 'p'))
  .then(() => User.register(user6, 'p'))
  .then(() => User.register(user7, 'p'))
  .then(() => User.register(user8, 'p'))
  .then(() => User.register(user9, 'p'))
  .then(() => User.register(user10, 'p'))
  .then(userDocuments => {
    console.log("Successfully seeded MongoDB users.")
  })
  .then( () => {
  
    const consort1 = new Consort({ 
      consortName: "Phorms Quartet",
      _members: [user4._id, user5._id, user9._id, user10._id],
      venue: "Phorms Auola",
      address1:    "Ackerstraße 76",
      address2:    "",
      city:        "Berlin",
      stateCounty:   "",
      postalCode:  "13355",
      country:     "Germany",
      location: { type: "Point", coordinates: [13.2716, 52.4794728] },
      isProfessional: false,
      notes:  "Guests are welcome to attend rehearsals.",
      pictureUrl: ""
    });

    const consort2 = new Consort({ 
      consortName: "Ken's Trio",
      _members: [user2._id, user3._id, user4._id],
      venue: "Ken's Place",
      address1:    "Dickensweg 17",
      address2:    "",
      city:        "Berlin",
      stateCounty:   "",
      postalCode:  "14055",
      country:     "Germany",
      location: { type: "Point", coordinates: [13.2716, 52.4794315] },
      isProfessional: false,
      notes:  "We're always open to guests playing in... get in touch!",
      pictureUrl: ""
    });
    
  
   Consort.deleteMany()
    .then(() => Consort.create([consort2, consort1]))
    .then(userDocuments => {
      console.log("Successfully seeded MongoDB with consorts.")
      
      
     
      var myDate = new Date("2018-07-25T18:00:00Z");


      const event1 = new Event({
        eventName: "Händel Selections",
      
        date: myDate, 
      
        description: "Includes 'Cantata spagnuola' HWV 140 and many other favorites.",
      
        _organizer: user4,
        
        _consorts: [consort1],
      
        _players: [],
      
        venue: "Bode Museum, Main Atrium",
        venueAddress: "Am Kupfergraben, 10117 Berlin",
        location: { type: "Point", coordinates: [13.3942567,52.5218937] },
      
        pictureUrl: ""
      })
      
      Event.deleteMany()
      .then(() => Event.create(event1))
      .then(userDocuments => {
        console.log("Successfully seeded MongoDB with events.")
        mongoose.connection.close()
      })
      .catch(err => {throw(err)})

    })
    .catch(err => {throw(err)})
  })
  .catch(err => {throw(err)})



  
