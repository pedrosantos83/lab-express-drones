//SCHEMA
const mongoose = require ('mongoose');
const {Schema, model} =mongoose;

const droneSchema = new Schema ({
name : String,
propellers: Number,
maxSpeed:{ type: Number, min: 0, max: 20 },

});


module.exports = model('Drone', droneSchema);