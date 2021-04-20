// Iteration #1
const mongoose = require('mongoose');
const Drone = require ('../models/Drone.model');


require('../configs/db.config');



const drone = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
];

    Drone.create(drone).then((dronesFromDB) => {
        console.log(`created ${dronesFromDB.length} drones`);
    mongoose.connection.close()
      }).catch((e) => {
        console.log(e);
    });