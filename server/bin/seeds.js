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
  playerNotes: "",
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

const user11 = new User({
  email: "angela@gmail.com",
  fullName: "Angela	Zander",
  playsTreble: true, playsAlto: false, playsBass: false,
  playerLevel: "Beginner",
  city: "Berlin",
  country: "Germany",
  location: { type: 'Point', coordinates: [13.2716, 52.4794728] },
  pictureUrl: 'https://res.cloudinary.com/cldpix/image/upload/v1531981126/my-images/f1fivsuo3fjy4acg4uze.jpg'
});

const user12 = new User({
  email: "frida@gmail.com",
  fullName: "Frida	Sanders",
  playsTreble: false, playsAlto: true, playsBass: false,
  playerLevel: "Beginner",
  city: "Berlin",
  country: "Germany",
  location: { type: 'Point', coordinates: [13.2716, 52.4794728] },
  pictureUrl: 'https://res.cloudinary.com/cldpix/image/upload/v1531989683/my-images/k8cyub3h9ghgubayokc3.jpg'
});

const user13 = new User({
  email: "xanthi@gmail.com",
  fullName: "Xanthi	Watson",
  playsTreble: true, playsAlto: false, playsBass: true,
  playerLevel: "Intermediate",
  city: "Chicago",
  country: "USA",
  location: { type: 'Point', coordinates: [-88.0121478, 41.8333925] },
  pictureUrl: 'https://res.cloudinary.com/cldpix/image/upload/v1531982831/my-images/mrx0giupgf6w4boq3dxc.jpg'
});

const user14 = new User({
  email: "teri@gmail.com",
  fullName: "Teri Campbell",
  playsTreble: true, playsAlto: true, playsBass: true,
  playerLevel: "Advanced",
  city: "Berlin",
  country: "Germany",
  location: { type: 'Point', coordinates: [13.2716, 52.4794728] },
  pictureUrl: 'https://res.cloudinary.com/cldpix/image/upload/v1531989687/my-images/d8s0vlpcccdrgqdhvhma.jpg'
});

const user15 = new User({
  email: "kimberly@gmail.com",
  fullName: "Kimberly	Harris",
  playsTreble: true, playsAlto: true, playsBass: true,
  playerLevel: "Professional",
  city: "Berlin",
  country: "Germany",
  location: { type: 'Point', coordinates: [13.2716, 52.4794728] },
  pictureUrl: 'https://res.cloudinary.com/cldpix/image/upload/v1531982942/my-images/uukavpwnvl0kvuxlbuig.jpg'
});

const user16 = new User({
  email: "roger@gmail.com",
  fullName: "Roger Perez",
  playsTreble: false, playsAlto: true, playsBass: true,
  playerLevel: "Advanced",
  city: "Berlin",
  country: "Germany",
  location: { type: 'Point', coordinates: [13.2716, 52.4794728] },
  pictureUrl: 'https://res.cloudinary.com/cldpix/image/upload/v1531983514/my-images/stwurgijssdwpfdnuago.jpg'
});

const user17 = new User({
  email: "gregory@gmail.com",
  fullName: "Gregory Martin",
  playsTreble: true, playsAlto: false, playsBass: false,
  playerLevel: "Beginner",
  city: "Berlin",
  country: "Germany",
  location: { type: 'Point', coordinates: [13.2716, 52.4794728] },
  pictureUrl: 'https://res.cloudinary.com/cldpix/image/upload/v1531989678/my-images/tbqcu25m9larrakzl09q.jpg'
});

const user18 = new User({
  email: "joe@gmail.com",
  fullName: "Joe Reed",
  playsTreble: true, playsAlto: true, playsBass: true,
  playerLevel: "Intermediate",
  city: "Berlin",
  country: "Germany",
  location: { type: 'Point', coordinates: [13.2716, 52.4794728] },
  pictureUrl: 'https://res.cloudinary.com/cldpix/image/upload/v1531989696/my-images/ja5iewd7irid92s0zl0y.jpg'
});

const user19 = new User({
  email: "edward@gmail.com",
  fullName: "Edward	Russell",
  playsTreble: false, playsAlto: false, playsBass: true,
  playerLevel: "Intermediate",
  city: "Berlin",
  country: "Germany",
  location: { type: 'Point', coordinates: [13.2716, 52.4794728] },
  pictureUrl: 'https://res.cloudinary.com/cldpix/image/upload/v1531982914/my-images/lfyjzvleulga49enrsph.jpg'
});

const user20 = new User({
  email: "carl@gmail.com",
  fullName: "Carl	Garcia",
  playsTreble: true, playsAlto: true, playsBass: true,
  playerLevel: "Professional",
  city: "Berlin",
  country: "Germany",
  location: { type: 'Point', coordinates: [13.2716, 52.4794728] },
  pictureUrl: 'https://res.cloudinary.com/cldpix/image/upload/v1531989700/my-images/ecl6gxf7clhs86mppzbj.jpg'
});

const user21 = new User({
  email: "jessica@gmail.com",
  fullName: "Jessica Sanders",
  playsTreble: false, playsAlto: false, playsBass: true,
  playerLevel: "Beginner",
  city: "Chicago",
  country: "USA",
  location: { type: 'Point', coordinates: [-88.0121478, 41.8333925] },
  pictureUrl: 'https://res.cloudinary.com/cldpix/image/upload/v1531983294/my-images/nqsa2sr1dqxwprkxh7sa.jpg'
});

const user22 = new User({
  email: "emily@gmail.com",
  fullName: "Emily Lewis",
  playsTreble: false, playsAlto: true, playsBass: false,
  playerLevel: "Beginner",
  city: "Chicago",
  country: "USA",
  location: { type: 'Point', coordinates: [-88.0121478, 41.8333925] },
  pictureUrl: 'https://res.cloudinary.com/cldpix/image/upload/v1531989988/my-images/oicqlo9raft5v3nfw0ys.jpg'
});

const user23 = new User({
  email: "carolyn@gmail.com",
  fullName: "Carolyn Green",
  playsTreble: true, playsAlto: true, playsBass: true,
  playerLevel: "Intermediate",
  city: "Chicago",
  country: "USA",
  location: { type: 'Point', coordinates: [-88.0121478, 41.8333925] },
  pictureUrl: 'https://res.cloudinary.com/cldpix/image/upload/v1531983322/my-images/shkudxsldg0f0kladtid.jpg'
});

const user24 = new User({
  email: "judy@gmail.com",
  fullName: "Judy	Alexander",
  playsTreble: true, playsAlto: true, playsBass: false,
  playerLevel: "Intermediate",
  city: "Chicago",
  country: "USA",
  location: { type: 'Point', coordinates: [-88.0121478, 41.8333925] },
  pictureUrl: 'https://res.cloudinary.com/cldpix/image/upload/v1531983403/my-images/dckfi7ozh7xeykuzu6sg.jpg'
});

const user25 = new User({
  email: "alice@gmail.com",
  fullName: "Alice Jones",
  playsTreble: false, playsAlto: true, playsBass: true,
  playerLevel: "Advanced",
  city: "Chicago",
  country: "USA",
  location: { type: 'Point', coordinates: [-88.0121478, 41.8333925] },
  pictureUrl: 'https://res.cloudinary.com/cldpix/image/upload/v1531989996/my-images/fpxfg76fppimjqdk01i1.jpg'
});

const user26 = new User({
  email: "sara@gmail.com",
  fullName: "Sara	Butler",
  playsTreble: true, playsAlto: true, playsBass: true,
  playerLevel: "Professional",
  city: "Chicago",
  country: "USA",
  location: { type: 'Point', coordinates: [-88.0121478, 41.8333925] },
  pictureUrl: 'https://res.cloudinary.com/cldpix/image/upload/v1531983274/my-images/xsrxk2siizrz2zkkbmup.jpg'
});

const user27 = new User({
  email: "steven@gmail.com",
  fullName: "Steven	Stewart",
  playsTreble: false, playsAlto: false, playsBass: true,
  playerLevel: "Professional",
  city: "Chicago",
  country: "USA",
  location: { type: 'Point', coordinates: [-88.0121478, 41.8333925] },
  pictureUrl: 'https://res.cloudinary.com/cldpix/image/upload/v1531989691/my-images/dleuqiawnwo5b6oavbcb.jpg'
});

const user28 = new User({
  email: "ronald@gmail.com",
  fullName: "Ronald	Morgan",
  playsTreble: false, playsAlto: false, playsBass: true,
  playerLevel: "Beginner",
  city: "Chicago",
  country: "USA",
  location: { type: 'Point', coordinates: [-88.0121478, 41.8333925] },
  pictureUrl: 'https://res.cloudinary.com/cldpix/image/upload/v1531983303/my-images/li0ym84fuf9cvmns8xr1.jpg'
});

const user29 = new User({
  email: "paul@gmail.com",
  fullName: "Paul	Bell",
  playsTreble: true, playsAlto: true, playsBass: false,
  playerLevel: "Intermediate",
  city: "Chicago",
  country: "USA",
  location: { type: 'Point', coordinates: [-88.0121478, 41.8333925] },
  pictureUrl: 'https://res.cloudinary.com/cldpix/image/upload/v1531983394/my-images/kmn7ydducfc29tzbyo9n.jpg'
});

const user30 = new User({
  email: "bruce@gmail.com",
  fullName: "Bruce Hill",
  playsTreble: true, playsAlto: false, playsBass: true,
  playerLevel: "Intermediate",
  city: "Chicago",
  country: "USA",
  location: { type: 'Point', coordinates: [-88.0121478, 41.8333925] },
  pictureUrl: 'https://res.cloudinary.com/cldpix/image/upload/v1531983442/my-images/mz3ebpgpyubnt06iwjah.jpg'
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
  .then(() => User.register(user11, 'p'))
  .then(() => User.register(user12, 'p'))
  .then(() => User.register(user13, 'p'))
  .then(() => User.register(user14, 'p'))
  .then(() => User.register(user15, 'p'))
  .then(() => User.register(user16, 'p'))
  .then(() => User.register(user17, 'p'))
  .then(() => User.register(user18, 'p'))
  .then(() => User.register(user19, 'p'))
  .then(() => User.register(user20, 'p'))
  .then(() => User.register(user21, 'p'))
  .then(() => User.register(user22, 'p'))
  .then(() => User.register(user23, 'p'))
  .then(() => User.register(user24, 'p'))
  .then(() => User.register(user25, 'p'))
  .then(() => User.register(user26, 'p'))
  .then(() => User.register(user27, 'p'))
  .then(() => User.register(user28, 'p'))
  .then(() => User.register(user29, 'p'))
  .then(() => User.register(user30, 'p'))
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
      notes:  "Guests are welcome.",
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
    
    const consort3 = new Consort({ 
      consortName: "Saturday Strings",
      _members: [user11._id, user14._id, user18._id, user19._id, user20._id],
      venue: "Haus der Kunst",
      address1:    "Kantstraße 76",
      address2:    "",
      city:        "Berlin",
      stateCounty:   "",
      postalCode:  "10627",
      country:     "Germany",
      location: { type: "Point", coordinates: [13.2716, 52.4794315] },
      isProfessional: true,
      notes:  "",
      pictureUrl: ""
    });

    const consort4 = new Consort({ 
      consortName: "Teri & Friends Trio",
      _members: [user14._id, user20._id, user12._id],
      venue: "Terri's (usually)",
      address1:    "Strausslander 10",
      address2:    "",
      city:        "Berlin",
      stateCounty:   "",
      postalCode:  "10627",
      country:     "Germany",
      location: { type: "Point", coordinates: [13.2716, 52.4794315] },
      isProfessional: false,
      notes:  "",
      pictureUrl: ""
    });

    const consort5 = new Consort({ 
      consortName: "Here & Now",
      _members: [user15._id],
      venue: "My apartment. (Kimberly Harris)",
      address1:    "Bernauer Str. 10",
      address2:    "",
      city:        "Berlin",
      stateCounty:   "",
      postalCode:  "10115",
      country:     "Germany",
      location: { type: "Point", coordinates: [13.2716, 52.4794315] },
      isProfessional: false,
      notes:  "Hi!  I'm creating a new consort to focus on contemporary composers.  I'm looking for 3+ others to join on a weekly basis.  Very casual!",
      pictureUrl: ""
    });

    const consort6 = new Consort({ 
      consortName: "Harris & Co.",
      _members: [user15._id, user16._id, user17._id, user10._id, user5._id, user3._id],
      venue: "My apartment. (Kimberly Harris)",
      address1:    "Bernauer Str. 10",
      address2:    "",
      city:        "Berlin",
      stateCounty:   "",
      postalCode:  "10115",
      country:     "Germany",
      location: { type: "Point", coordinates: [13.2716, 52.4794315] },
      isProfessional: false,
      notes:  "",
      pictureUrl: ""
    });


  
   Consort.deleteMany()
    .then(() => Consort.create([consort2, consort1, consort3, consort4, consort5, consort6]))
    .then(userDocuments => {
      console.log("Successfully seeded MongoDB with consorts.")
      
      
     
      var myDate = new Date("2018-07-25T18:00:00Z");


      const event1 = new Event({
        eventName: "Händel Selections",
        eventType: "Performance",
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


      var myDate2 = new Date("2018-08-05T18:30:00Z");

      const event2 = new Event({
        eventName: "Empire Viols",
        eventType: "Performance",
        date: myDate2, 
        description: "Empire Viols plays music for viols and harpsichordf rom France, the Low Countries, Italy, and Germany.",
        _organizer: user20,
        _consorts: [consort3],
        _players: [],
        venue: "Frei Waldorfschule Mitte",
        venueAddress: "Weinmeisterstraße 16, 10178 Berlin",
        location: { type: "Point", coordinates: [13.404,52.525] },
        pictureUrl: ""
      })

      var myDate3 = new Date("2018-08-25T12:00:00Z");

      const event3 = new Event({
        eventName: "Jacobean Fantasies for Six Viols",
        eventType: "Performance",
        date: myDate3, 
        description: "Masterpieces from the sublimely creative Private Music of James I and Charles I, works which point the way to Henry Purcell. Tickets $25.",
        _organizer: user15,
        _consorts: [consort6],
        _players: [],
        venue: "Pierre Boulez Saal",
        venueAddress: "Französische Straße 33D, 10117 Berlin",
        location: { type: "Point", coordinates: [13.32637,52.5154224] },
        pictureUrl: ""
      })

      var myDate4 = new Date("2018-09-03T09:00:00Z");


      const event4 = new Event({
        eventName: "Viols West Workshop",
        eventType: "Workshop",
        date: myDate4, 
        description: "Viols West is a week-long summer workshop for viola da gamba players of all levels. In four classes each day, our excellent faculty provides instruction in technique, consort and solo literature.",
        _organizer: user20,
        _consorts: [],
        _players: [],
        venue: "Humboldt University of Berlin",
        venueAddress: "Unter den Linden 6, 10099 Berlin",
        location: { type: "Point", coordinates: [13.3936551,52.517883] },
        pictureUrl: ""
      })



      
      Event.deleteMany()
      .then(() => Event.create([event1, event2, event3, event4]))
      .then(userDocuments => {
        console.log("Successfully seeded MongoDB with events.")
        mongoose.connection.close()
      })
      .catch(err => {throw(err)})

    })
    .catch(err => {throw(err)})
  })
  .catch(err => {throw(err)})



  
